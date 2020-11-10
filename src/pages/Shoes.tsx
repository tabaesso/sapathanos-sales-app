import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, ScrollView, StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import api from '../services/api';

import styles from './styles'
import { RectButton } from 'react-native-gesture-handler';
import formatValue from '../utils/formatValue';
import { FlatList } from 'react-native';

interface Shoes {
    id: string;
    name: string;
    description: string;
    price: number;
    size_id: string;
}

export default function Shoes() {
    const navigation = useNavigation();
    const route = useRoute();

    const [data, setData] = useState<Shoes[]>([]);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const [perPage, setPerPage] = useState(10);
    const [total, setTotal] = useState(0);

    async function loadProducts() {
      setLoading(true);

      const response = await api.get(`products/${0}/${perPage}/active`);

      const shoes = response.data;

      setData(shoes);

      setPage(page + 10);
      setLoading(false);
    }

    async function loadMoreProducts() {
      if(data.length >= total) return;

      setLoading(true);

      const response = await api.get(`products/${page}/${perPage}/active`);

      const shoes = response.data;

      setData([...data, ...shoes]);

      setPage(page + 10);
      setLoading(false);
    }

    async function getTotal() {
      const response = await api.get(`products/active`);

      const shoes = response.data;

      setTotal(shoes.length);
    }

    useEffect(() => {
      getTotal();
      loadProducts();
    }, []);

    function goToProductDetails( id: string ){
        navigation.navigate('ProductDetails', { id });
    }

    const renderItem = ({ item } : { item : Shoes }) => {
      return (
        <RectButton style={styles.cardVerticalContent} onPress={ () => goToProductDetails(item.id) } >
          <View style={ styles.cardVerticalImage }>
            <MaterialCommunityIcons name="file-image" color="#4F4F4F" size={60}/>
          </View>

          <View style={styles.cardVerticalInfo}>
            <Text style={styles.shoeName}>{ item.name.substring(0, 12)}</Text>
            <Text style={styles.shoeDescription}>{ item.description.substring(0, 14) + '...' }</Text>
            <View style={styles.infoShoeContainer}>
              <Text style={styles.infoShoeLeft}>R$ </Text>
              <Text style={styles.infoShoeRight}>{ formatValue(item.price).slice(2) }</Text>
            </View>
          </View>
        </RectButton>
      );
    }

    const renderFooter = () => {
      if (!loading) return null;

      return (
        <View style={customStyles.loading}>
          <ActivityIndicator color="#9B51E0" size="large"/>
        </View>
      );
    };

    return (
        <View style={ styles.main }>
            <Text style={styles.lenghtInfo}> Total de sapatos encontrados: { data.length } </Text>

            <SafeAreaView style={customStyles.container}>
              <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                onEndReached={loadMoreProducts}
                onEndReachedThreshold={0.2}
                refreshing={loading}
                ListFooterComponent={renderFooter}
                numColumns={2}
              />
            </SafeAreaView>
        </View>
    );
}

const customStyles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    maxWidth: 540,
    marginBottom: 20
  },

  loading: {
    alignSelf: 'center',
    marginVertical: 20,
  },
});
