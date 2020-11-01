import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from '../styles';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import formatValue from '../../utils/formatValue';

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

interface Size {
  column: number;
}

export default function OrderDetails() {

  const [products, setProducts] = useState<Product[]>([]);

  function loadProducts() {
    AsyncStorage.getItem('@Sapathanos:cart').then(response => {
      if(response) {
        const cartProducts = JSON.parse(response);
        setProducts(cartProducts);
      }
    })
  }

  useFocusEffect(() => {
    loadProducts();
  });

  return (
    <View style={ [styles.main, { paddingTop: -50 }] }>

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
              </View>
            </View>
            )
          }))
        }
      </ScrollView>
    </View>
  );
}
