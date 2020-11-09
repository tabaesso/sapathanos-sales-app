import React, { useEffect, useMemo, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Alert } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from '../styles';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import formatValue from '../../utils/formatValue';
import { useAuth } from '../../hooks/auth';

import api from '../../services/api';
import { buttons } from 'polished';

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

interface ProductOrderDTO {
  name: string;
  sku: string;
  price: number;
  quantity: number;
}

interface OrderDTO {
  customer_id: string;
  products: ProductOrderDTO[];
}

interface Customer {
  id: string;
  name: string;
}

export default function Checkout() {
  const navigation = useNavigation();
  const { customer } = useAuth();

  const [products, setProducts] = useState<Product[]>([]);
  const [shipping, setShiping] = useState(0);
  const [total, setTotal] = useState(0);
  const [customerData, setCustomerData] = useState<Customer>();
  const [hasCart, setHasCart] = useState(false);

  function loadProducts() {
    AsyncStorage.getItem('@Sapathanos:cart').then(response => {
      if(response) {
        const cartProducts = JSON.parse(response);
        setProducts(cartProducts);
      }
    })
  }

  function loadCustomer() {
    AsyncStorage.getItem('@Sapathanos:customer').then(response => {
      if(response) {
        const res = JSON.parse(response);
        setCustomerData(res);
      }
    });
  }

  function logInCheck() {
    if(customer && Object.keys(customer).length !== 0) {
      loadProducts();
    } else {
      navigation.navigate('AccountRoutes');
    }
  }

  useEffect(() => {
    loadCustomer();
    logInCheck();
  }, [customer])

  useFocusEffect(() => {
    loadProducts();
    setTotal(calculate);
  });

  const cartTotal = useMemo(() => {
    const total = products.reduce(( accumulator, product) => {
      const productSubtotal = Number(product.price) * Number(product.quantity);

      return accumulator + productSubtotal;
    }, 0);

    return total;
  }, [products]);

  const calculate = () => {
    return  shipping + cartTotal;
  }

  const handlePayment = async () => {
    if (customerData) {
      const order: OrderDTO = {
        customer_id: customerData.id,
        products: []
      };

      products.map(product => {
        const orderDetail: ProductOrderDTO = {
          name: product.name,
          sku: product.id,
          price: product.price,
          quantity: product.quantity
        }
        order.products.push(orderDetail);
      });

      const response = await api.post('orders', order);
      await api.post(`payments/${response.data.id}/finalize`);

      await api.post(`email/${response.data.id}`);

      Alert.alert('Pedido pago com sucesso', 'Em breve os Sapathanos tão aí! 🤩',
        [{text: 'Ok', onPress: async () => await paidOrder() }]);
    }
  }

  const paidOrder = async () => {
    await AsyncStorage.removeItem(
      '@Sapathanos:cart'
    );
    navigation.goBack();
  }

  return (
    <ScrollView style={ styles.mainForScroll }>
      <View style={styles.cardHorizontallContent} >
        <View style={styles.cardVHorizontallInfo}>
          <View style={ customStyles.titleCard }>
            <MaterialCommunityIcons name="map-marker" color="#2F80ED" size={26}/>
            <Text style={styles.shoeName}>Endereço</Text>
          </View>
          <View style={styles.infoShoeContainer}>
            <Text style={styles.infoShoeLeft}>Logradouro: </Text>
            <Text style={styles.infoShoeRight}>Um nome de rua bem grande e tals</Text>
          </View>
          <View style={styles.infoShoeContainer}>
            <Text style={styles.infoShoeLeft}>nº: </Text>
            <Text style={styles.infoShoeRight}>80</Text>
          </View>
          <View style={styles.infoShoeContainer}>
            <Text style={styles.infoShoeLeft}>Bairro: </Text>
            <Text style={styles.infoShoeRight}>Centro</Text>
          </View>
          <View style={styles.infoShoeContainer}>
            <Text style={styles.infoShoeLeft}>Cidade: </Text>
            <Text style={styles.infoShoeRight}>Brasília</Text>
          </View>
          <View style={styles.infoShoeContainer}>
            <Text style={styles.infoShoeLeft}>Estado: </Text>
            <Text style={styles.infoShoeRight}>Distrito Federal</Text>
          </View>
          <View style={styles.infoShoeContainer}>
            <Text style={styles.infoShoeLeft}>CEP: </Text>
            <Text style={styles.infoShoeRight}>12312-000</Text>
          </View>

          <View style={styles.textIconButtonContainer}>
            <RectButton style={styles.textIconButtonTwo} onPress={()=> Alert.alert('Ainda não me fizeram 😔')}>
              <MaterialCommunityIcons name="pencil-outline" color="#333333" size={20}/>
              <Text style={styles.titleTextIconButtonTwo}>
                Editar endereço
              </Text>
            </RectButton>
          </View>
        </View>
      </View>

      <View style={styles.cardHorizontallContent}>
        <View style={styles.cardVHorizontallInfo}>
          <View style={ customStyles.titleCard }>
            <MaterialCommunityIcons name="map-marker" color="#2F80ED" size={26}/>
            <Text style={styles.shoeName}>Produtos</Text>
          </View>

          <View style={customStyles.cardVerticalImageGrid}>
            {
              products.map(product => {
                return (
                  <View key={product.id} style={ customStyles.cardVerticalImage }>
                    <MaterialCommunityIcons name="file-image" color="#4F4F4F" size={40}/>
                  </View>
                )
              })
            }
          </View>

          <View style={styles.textIconButtonContainer}>
            <RectButton style={styles.textIconButtonTwo} onPress={()=> navigation.navigate('OrderDetails')}>
              <MaterialCommunityIcons name="file-eye-outline" color="#333333" size={20}/>
              <Text style={styles.titleTextIconButtonTwo}>
                Ver de detalhes do pedido
              </Text>
            </RectButton>
          </View>
        </View>
      </View>

      <View style={styles.cardHorizontallContent} >
        <View style={styles.cardVHorizontallInfo}>
          <View style={ customStyles.titleCard }>
            <MaterialCommunityIcons name="cart" color="#2F80ED" size={26}/>
            <Text style={styles.shoeName}>Resumo</Text>
          </View>

          <View style={customStyles.infoShoeContainer}>
            <Text style={styles.infoShoeLeft}>Produtos </Text>
            <Text style={styles.infoShoeRight}>{ formatValue(cartTotal) }</Text>
          </View>

          <View style={customStyles.infoShoeContainer}>
            <Text style={styles.infoShoeLeft}>Frete </Text>
          <Text style={styles.infoShoeRight}>{ shipping === 0 ? 'Grátis' : formatValue(shipping) }</Text>
          </View>

          <View style={customStyles.infoShoeContainer}>
            <Text style={styles.infoShoeLeft}>Total </Text>
            <Text style={styles.infoShoeRight}>{ formatValue(total) }</Text>
          </View>
        </View>
      </View>

      <View style={[styles.textIconButtonContainer, { marginBottom: 20 }]}>
        <RectButton style={styles.textIconButton} onPress={handlePayment}>
          <MaterialCommunityIcons name="credit-card-outline" color="#FFF" size={26}/>
          <Text style={styles.titleTextIconButton}>
            Finalizar
          </Text>
        </RectButton>
      </View>
    </ScrollView>
  );
}

const customStyles = StyleSheet.create({
  infoShoeContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  titleCard: {
    width: '100%',
    height: 40,
    paddingHorizontal: 30,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    direction: 'inherit',
  },
  cardVerticalImageGrid: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    direction: 'inherit',
  },

  cardVerticalImage: {
    backgroundColor: '#CCC',
    borderRadius: 10,
    height: 50,
    width: 50,
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
