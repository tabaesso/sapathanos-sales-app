import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Alert } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Cart() {
  const [description, setDescription] = useState('');
  const navigation = useNavigation();

  async function goToCheckout() {
    navigation.navigate('Checkout');
  }

  useEffect(() => {
    setDescription('Descrição do sapato');
  }, [])

  return (
    <View style={ [styles.main, { paddingTop: -50 }] }>
      <View style={ customStyles.topInfoContainer}>
        <View style={ customStyles.topInfoItem }>
          <MaterialCommunityIcons name="cart-outline" color="#2D9CDB" size={26}/>
          <Text style={ customStyles.topInfoText }> 999 itens</Text>
        </View>

        <View style={ customStyles.topInfoItem }>
          <MaterialCommunityIcons name="cash-usd" color="#2D9CDB" size={26}/>
          <Text style={ customStyles.topInfoText }> R$ 9999.00</Text>
        </View>
      </View>

      <ScrollView
        style={ styles.cardHorizontalContainer }
      >
        <View style={styles.cardHorizontallContent} >
          <View style={ styles.cardVerticalImage }>
            <MaterialCommunityIcons name="file-image" color="#4F4F4F" size={60}/>
          </View>

          <View style={styles.cardVHorizontallInfo}>
            <Text style={styles.shoeName}>Nome do sapato é bem grande e tals</Text>
            <Text style={styles.shoeDescription}>{ description.substring(0, 30) + '...' }</Text>
            <View style={styles.infoShoeContainer}>
              <Text style={styles.infoShoeLeft}>R$ </Text>
              <Text style={styles.infoShoeRight}>99.00</Text>
            </View>
            <View style={styles.infoShoeContainer}>
              <Text style={styles.infoShoeLeft}>Tamanho: </Text>
              <Text style={styles.infoShoeRight}>38</Text>
            </View>
            <View style={styles.infoShoeContainer}>
              <Text style={styles.infoShoeLeft}>Cor: </Text>
              <Text style={styles.infoShoeRight}>Verde</Text>
            </View>
          </View>
        </View>

        <View style={styles.cardHorizontallContent} >
          <View style={ styles.cardVerticalImage }>
            <MaterialCommunityIcons name="file-image" color="#4F4F4F" size={60}/>
          </View>

          <View style={styles.cardVHorizontallInfo}>
            <Text style={styles.shoeName}>Nome do sapato é bem grande e tals</Text>
            <Text style={styles.shoeDescription}>{ description.substring(0, 30) + '...' }</Text>
            <View style={styles.infoShoeContainer}>
              <Text style={styles.infoShoeLeft}>R$ </Text>
              <Text style={styles.infoShoeRight}>99.00</Text>
            </View>
            <View style={styles.infoShoeContainer}>
              <Text style={styles.infoShoeLeft}>Tamanho: </Text>
              <Text style={styles.infoShoeRight}>38</Text>
            </View>
            <View style={styles.infoShoeContainer}>
              <Text style={styles.infoShoeLeft}>Cor: </Text>
              <Text style={styles.infoShoeRight}>Verde</Text>
            </View>
          </View>
        </View>

        <View style={styles.cardHorizontallContent} >
          <View style={ styles.cardVerticalImage }>
            <MaterialCommunityIcons name="file-image" color="#4F4F4F" size={60}/>
          </View>

          <View style={styles.cardVHorizontallInfo}>
            <Text style={styles.shoeName}>Nome do sapato é bem grande e tals</Text>
            <Text style={styles.shoeDescription}>{ description.substring(0, 30) + '...' }</Text>
            <View style={styles.infoShoeContainer}>
              <Text style={styles.infoShoeLeft}>R$ </Text>
              <Text style={styles.infoShoeRight}>99.00</Text>
            </View>
            <View style={styles.infoShoeContainer}>
              <Text style={styles.infoShoeLeft}>Tamanho: </Text>
              <Text style={styles.infoShoeRight}>38</Text>
            </View>
            <View style={styles.infoShoeContainer}>
              <Text style={styles.infoShoeLeft}>Cor: </Text>
              <Text style={styles.infoShoeRight}>Verde</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={[styles.textIconButtonContainer, { marginBottom: 20 }]}>
        <RectButton style={styles.textIconButton} onPress={goToCheckout}>
          <MaterialCommunityIcons name="chevron-right" color="#FFF" size={26}/>
          <Text style={styles.titleTextIconButton}>
            Continuar
          </Text>
        </RectButton>
      </View>
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
    color: '#333'
  }
});
