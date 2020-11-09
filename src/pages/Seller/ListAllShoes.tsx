import React, { useState, useEffect } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, SafeAreaView, FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import api from '../../services/api';

import styles from '../styles';
import formatValue from '../../utils/formatValue';

interface Shoes {
    id: string;
    name: string;
    description: string;
    price: number;
    size_id: string;
}

export default function ListAllShoes() {
    const navigation = useNavigation();
    const [data, setData] = useState<Shoes[]>([]);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const [perPage, setPerPage] = useState(10);
    const [total, setTotal] = useState(0);

    function navigateToRegister() {
        navigation.navigate('RegisterNewShoe');
    }

    function sizeEdit(size_id: string) {
        navigation.navigate('UpdateQuantity', {id: size_id});
    }

    useEffect(() => {
      getTotal();
      loadProducts(false);
    }, []);

    async function loadProducts(refresh: boolean) {
      setLoading(true);

      const response = await api.get(`products/${0}/${perPage}/active`);

      const shoes = response.data;

      setData(shoes);

      if (refresh) {
        setPage(0)
      } else {
        setPage(page + 10);
      }

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

    const renderItem = ({ item } : { item : Shoes }) => {
      return (
        <View style={customStyles.item}>
          <View style={ styles.cardVerticalImage }>
            <MaterialCommunityIcons name="file-image" color="#4F4F4F" size={60}/>
          </View>

          <View style={styles.cardVHorizontallInfo}>
          <Text style={styles.shoeName}>{ item.name }</Text>
          <Text style={styles.shoeDescription}>{ item.description }</Text>

          <View style={styles.infoShoeContainer}>
              <Text style={styles.infoShoeLeft}>R$ </Text>
              <Text style={styles.infoShoeRight}>{ formatValue(item.price).slice(2) }</Text>
          </View>

          <RectButton style={styles.iconButton} onPress={() => sizeEdit(item.size_id)}>
            <MaterialCommunityIcons name="plus" color="#FFF" size={26}/>
          </RectButton>
        </View>
      </View>
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
        <View style={[styles.main, { marginTop: 50}]}>

            <Text style={styles.titlePage}> Listando todos os sapatos </Text>
            <Text style={styles.lenghtInfo}> Total de sapatos encontrados: { data.length } </Text>

            <View style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'flex-end',
              flexWrap: 'nowrap'
            }}
            >
              <View style={{ width: 250 }}>
                <RectButton style={styles.textIconButton} onPress={navigateToRegister}>
                    <MaterialCommunityIcons name="plus" color="#FFF" size={26}/>
                    <Text style={styles.titleTextIconButton}>
                        Adicionar novo sapato
                    </Text>
                </RectButton>
              </View>

              <View style={{ }}>
                <RectButton style={styles.iconButton} onPress={() => loadProducts(true)}>
                  <MaterialCommunityIcons name="refresh" color="#FFF" size={26}/>
                </RectButton>
              </View>
            </View>

            <SafeAreaView style={customStyles.container}>
              <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                onEndReached={loadMoreProducts}
                onEndReachedThreshold={0.1}
                ListFooterComponent={renderFooter}
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
    marginTop: 5,
    marginBottom: 50
  },

  item: {
    width: 325,
    borderRadius: 10,
    margin: 10,
    padding: 10,
    backgroundColor: '#FFF',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },

  loading: {
    alignSelf: 'center',
    marginVertical: 20,
  },
});
