import React, { useEffect, useMemo, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './styles';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import formatValue from '../utils/formatValue';
import api from '../services/api';
import { useAuth } from '../hooks/auth';
interface Product {
  id: string;
  category_id: string;
  size_id: string;
  name: string;
  description: string;
  color: string;
  material: string;
  price: number;
  sizeColumn: string;
  quantity: number;
}

interface Customer {
  id: string;
  name: string;
}

export default function Cart() {
  const { customer } = useAuth();
  const navigation = useNavigation();

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  function loadProducts() {
    AsyncStorage.getItem('@Sapathanos:cart').then(response => {
      if(response) {
        const cartProducts = JSON.parse(response);
        setProducts(cartProducts);
      } else {
        setProducts([]);
      }
    })
  }

  function getSize(id: string, sizeColumn: string): Promise<any> {
    return new Promise( (resolve, reject) => {
      const response = api.post(`sizes/${id}/sizecolumn`, { sizeColumn });

      if(response)
        resolve(response);
      reject('Query failed');
    });
  }

  const checkAvailability = products.map(product => {
    const result = getSize(product.size_id, product.sizeColumn)
      .then((fromResolve) =>  {
        const size = fromResolve.data;
        const value = Object.values(size[0]);

        if(Number(value) < product.quantity) {
          return `${product.name}`;
        } else {
          return 'available';
        }
      })
      .catch((fromReject) => console.log(fromReject));

    return result;
  });

  async function handleCheckout() {
    setLoading(true);
    const response = await Promise.all(checkAvailability);

    let product = '';

    for(let i = 0; i < response.length; i++) {
      if(response[i] !== 'available') {
        product = String(response[i]);
      }
    }

    if(product !== '') {
      Alert.alert(
        'Sinto muito 😥',
        `Não temos mais o produto ${product} na quantidade desejada.`
      );
    } else {
      if(customer && Object.keys(customer).length !== 0) {
        navigation.navigate('Checkout');
      } else {
        navigation.navigate('AccountRoutes');
      }
    }

    setLoading(false);
  }

  const cartTotal = useMemo(() => {
    const total = products.reduce(( accumulator, product) => {
      const productSubtotal = Number(product.price) * Number(product.quantity);

      return accumulator + productSubtotal;
    }, 0);

    return formatValue(total);
  }, [products]);

  const cartItens = useMemo(() => {
    const total = products.reduce(( accumulator, product) => {
      const productItens = Number(product.quantity);

      return accumulator + productItens;
    }, 0);

    return total;
  }, [products]);

  async function removeProduct(id: string) {
    const productIndex = products.findIndex((productItem: Product) => {
      return productItem.id === id;
    });

    products[productIndex].quantity -= 1;

    if(products[productIndex].quantity <= 0 ) {
      products.splice(productIndex, 1);
    }

    await AsyncStorage.setItem('@Sapathanos:cart', JSON.stringify(products));
  }

  useFocusEffect(() => {
    loadProducts();
  });

  return (
    <View style={ [styles.main, { paddingTop: '6%' }] }>
      <View style={ customStyles.topInfoContainer}>
        <View style={ customStyles.topInfoItem }>
          <MaterialCommunityIcons name="cart-outline" color="#2D9CDB" size={26}/>
          <Text style={ customStyles.topInfoText }> { cartItens } itens</Text>
        </View>

        <View style={ customStyles.topInfoItem }>
          <MaterialCommunityIcons name="cash-usd" color="#2D9CDB" size={26}/>
          <Text style={ customStyles.topInfoText }> { cartTotal }</Text>
        </View>
      </View>

      <ScrollView
        style={ styles.cardHorizontalContainer }
      >
        {
          products.map((product => {
            return (
              <View key={product.id} style={styles.cardHorizontallContent} >
                <View style={ styles.cardVerticalImage }>
                  <MaterialCommunityIcons name="file-image" color="#4F4F4F" size={60}/>
                </View>

                <View style={styles.cardVHorizontallInfo}>
                <Text style={styles.shoeName}>{ product.name }</Text>
                <Text style={styles.shoeDescription}>{ product.name.substring(0, 30) + '...' }</Text>
                <View style={styles.infoShoeContainer}>
                  <Text style={styles.infoShoeLeft}>R$ </Text>
                  <Text style={styles.infoShoeRight}>
                    {
                      formatValue( product.price * product.quantity ).slice(2)
                    }
                  </Text>
                </View>
                <View style={styles.infoShoeContainer}>
                  <Text style={styles.infoShoeLeft}>Tamanho: </Text>
                  <Text style={styles.infoShoeRight}>{ product.sizeColumn.slice(-2) } </Text>
                </View>
                <View style={styles.infoShoeContainer}>
                  <Text style={styles.infoShoeLeft}>Cor: </Text>
                  <Text style={styles.infoShoeRight}> { product.color } </Text>
                </View>
                <View style={styles.infoShoeContainer}>
                  <Text style={styles.infoShoeLeft}>Quantidade: </Text>
                  <Text style={styles.infoShoeRight}> { product.quantity } </Text>
                </View>
                <View style={styles.infoShoeContainer}>
                  <RectButton style={styles.iconButton} onPress={() => removeProduct(product.id)}>
                    <MaterialCommunityIcons name="delete-outline" color="#FFF" size={26}/>
                  </RectButton>
                </View>
              </View>
            </View>
            )
          }))
        }
      </ScrollView>

      {
        loading ? (
          <View style={{
            alignSelf: 'center',
            marginVertical: 20,
          }}>
            <Text style={ customStyles.topInfoText }> Só estamos checando algumas coisinhas... </Text>
            <ActivityIndicator color="#9B51E0" size="large"/>
          </View>
        )
        : null
      }

      {
        (products.length < 1) ?
          <View style={[styles.textIconButtonContainer, { marginBottom: 20 }]}>
            <RectButton style={styles.textIconButton} onPress={() => {}}>
              <MaterialCommunityIcons name="cart-remove" color="#FFF" size={26}/>
              <Text style={styles.titleTextIconButton}>
                Seu carrinho está vázio
              </Text>
            </RectButton>
          </View>
        :
          <View style={[styles.textIconButtonContainer, { marginBottom: 20 }]}>
            <RectButton style={styles.textIconButton} onPress={handleCheckout}>
              <MaterialCommunityIcons name="cart-arrow-right" color="#FFF" size={26}/>
              <Text style={styles.titleTextIconButton}>
                Continuar
              </Text>
            </RectButton>
          </View>
      }
    </View>
  );
}

const customStyles = StyleSheet.create({
  topInfoContainer: {
    width: '100%',
    height: 54,
    backgroundColor: '#F2F2F2',
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    direction: 'inherit',
  },

  topInfoItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    direction: 'inherit',
  },

  topInfoText: {
    fontFamily: 'Quicksand_600SemiBold',
    fontSize: 18,
    color: '#333',
    textAlign: 'center'
  }
});
