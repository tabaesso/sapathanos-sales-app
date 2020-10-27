import React, { useEffect, useState } from 'react';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import api from '../services/api';

import styles from './styles'
import { RectButton } from 'react-native-gesture-handler';

interface Shoes {
    id: string;
    name: string;
    description: string;
    price: number;
    size_id: string;
}

interface CategotyRouteParams {
  id: string;
}

export default function Shoes() {
    const navigation = useNavigation();

    const route = useRoute();
    const params = route.params as CategotyRouteParams;
    const [isFilter, setIsFilter] = useState(false);

    const [shoes, setShoes] = useState<Shoes[]>([]);

    async function loadProducts() {
      await api.get('products/active').then((response => {
        setShoes(response.data);
      }));
      setIsFilter(false);
    }

    useEffect(() => {
        if(params) {
          const category_id = params.id;
          api.get(`products/${category_id}/category`).then((response => {
            setShoes(response.data);
          }))
          setIsFilter(true);
        } else {
          loadProducts();
        }
    }, [params]);

    function clearCategory() {
      loadProducts();
      navigation.navigate('Shoes')
    }

    function goToProductDetails( id: string ){
        navigation.navigate('ProductDetails', { id });
    }

    return (
        <View style={ styles.main }>
            <Text style={styles.lenghtInfo}> Total de sapatos encontrados: { shoes.length } </Text>

            { isFilter ?
              <View style={ [styles.textIconButtonContainer, { marginTop: -10, marginBottom: 10 }]}>
                <RectButton style={styles.textIconButton} onPress={clearCategory}>
                    <MaterialCommunityIcons name="autorenew" color="#FFF" size={26}/>
                    <Text style={styles.titleTextIconButton}>
                        Limpar categoria
                    </Text>
                </RectButton>
              </View>
              : null
            }

            <ScrollView>
                <View style={ styles.cardVerticalContainer } >{
                    shoes.map(shoe => {
                        return (
                            <RectButton key={shoe.id} style={styles.cardVerticalContent} onPress={ () => goToProductDetails(shoe.id) } >
                                <View style={ styles.cardVerticalImage }>
                                    <MaterialCommunityIcons name="file-image" color="#4F4F4F" size={60}/>
                                </View>

                                <View style={styles.cardVerticalInfo}>
                                    <Text style={styles.shoeName}>{ shoe.name.substring(0, 12)}</Text>
                                    <Text style={styles.shoeDescription}>{ shoe.description.substring(0, 14) + '...' }</Text>
                                    <View style={styles.infoShoeContainer}>
                                        <Text style={styles.infoShoeLeft}>R$ </Text>
                                        <Text style={styles.infoShoeRight}>{ shoe.price }</Text>
                                    </View>
                                </View>
                            </RectButton>
                        );
                    })
                }
                </View>
            </ScrollView>
        </View>
    );
}
