import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, ScrollView, StyleSheet, Alert } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import api from '../../services/api';

import styles from '../styles';
import AsyncStorage from '@react-native-community/async-storage';
import formatValue from '../../utils/formatValue';

interface ProductRouteParams {
    id: string;
}

interface Product {
    id: string;
    category_id: string;
    size_id: string;
    name: string;
    description: string;
    color: string;
    material: string;
    price: number;
}

interface Size {
  size_33: number;
  size_34: number;
  size_35: number;
  size_36: number;
  size_37: number;
  size_38: number;
  size_39: number;
  size_40: number;
  size_41: number;
  size_42: number;
  size_43: number;
  size_44: number;
  size_45: number;
  size_46: number;
  size_47: number;
  size_48: number;
}

export default function ProductDetail() {
    const route = useRoute();
    const params = route.params as ProductRouteParams;
    const navigation = useNavigation();

    const [product, setProduct] = useState<Product>();
    const [size, setSize] = useState<Size>();
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedSizeError, setSelectedSizeError] = useState('');
    const [totalSizes, setTotalSizes] = useState(0);

    async function loadShoe( id: string ) {
        await api.get(`products/${id}/only`).then(( response => {
            setProduct(response.data);
        }));
    }

    useEffect( () => {
        loadShoe(params.id);
    }, [params]);

    useEffect(() => {
      if(product) {
        const id = product.size_id;

        api.get(`sizes/${id}`).then(( response => {
          setSize(response.data);
        }));
      }
    }, [product]);

    useEffect(() => {
      countSizes();
    }, [size]);

    async function addToCart() {
      sizeValidator();

      if(selectedSize === '') {
        console.log('Nenhum tamanho selecionado.');
      } else {
        const cart = await AsyncStorage.getItem('@Sapathanos:cart');

        let cartArray = [];

        if(cart) {
          cartArray = JSON.parse(cart);
        }

        if(product) {
          const data = {
            id: (product.id + selectedSize),
            name: product.name,
            description: product.description,
            price: product.price,
            color: product.color,
            sizeColumn: selectedSize,
            quantity: 1,
            size_id: product.size_id
          }

          const productIndex = cartArray.findIndex((productItem: Product) => {
            return productItem.id === (product.id + selectedSize);
          });

          if(productIndex >= 0) {
            cartArray[productIndex].quantity += 1;
          } else {
            cartArray.push(data);
          }

          await AsyncStorage.setItem('@Sapathanos:cart', JSON.stringify(cartArray));

          navigation.navigate('CartRotues');

          setSelectedSize('');
        }
      }
    }

    function sizeValidator() {
      if(selectedSize === '' || selectedSize === null) {
        setSelectedSizeError('Escolha um tamanho');
      } else {
        setSelectedSizeError('');
      }
    }

    if ( !product || !size ){
        return (
            <View style={styles.main} >
                <Text style={styles.shoeDescription} >
                    Carregando....
                </Text>
            </View>
        );
    }

    function countSizes() {
      if(size) {
        const value = Object.values(size);
        let quantity = 0;

        for(let i = 1; i < 17; i++ ) {
          if(value[i] > 0) {
            quantity += value[i];
          }
        }

        setTotalSizes(quantity);
      }
    }

    return(
        <ScrollView style={styles.mainForScroll} >
            <View style={styles.imageContainer} >
                {/*<Image
                    style={styles.image}
                    source={{ uri: product.image.url }}
                />*/}
                <MaterialCommunityIcons name="file-image" color="#4F4F4F" size={200}/>
            </View>

            <View style={styles.shoeDetails} >
                <Text style={styles.shoeDetailName} >
                    {product.name}
                </Text>
                <Text style={styles.shoeDetailDescription} >
                    {product.description}
                </Text>
                <Text style={styles.shoeDetailPrice} >
                    { formatValue(product.price) }
                </Text>

                { /* view dos tamanhos */ }
                <View style={styles.sizesView} >
                    <Text>
                        Tamanhos disponíveis:
                    </Text>
                    {
                      totalSizes > 0
                        ?
                        <ScrollView
                          style={styles.horizontalInfo}
                          horizontal
                          showsHorizontalScrollIndicator={false}
                      >
                          { size.size_33 > 0 ? (
                              <RectButton
                                style={
                                  selectedSize === 'size_33'
                                  ? styles.sizeContainer
                                  : customStyles.selectedSize
                                  }
                                onPress={() => setSelectedSize('size_33')}
                              >
                                <Text
                                  style={
                                    selectedSize === 'size_33'
                                    ? styles.sizeText
                                    : customStyles.selectedSizeText
                                  }
                                  >
                                    33
                                </Text>
                              </RectButton>
                          ): (
                              null
                          ) }
                          { size.size_34 > 0 ? (
                              <RectButton
                                style={
                                  selectedSize === 'size_34'
                                  ? styles.sizeContainer
                                  : customStyles.selectedSize
                                  }
                                onPress={() => setSelectedSize('size_34')}
                              >
                                <Text
                                  style={
                                    selectedSize === 'size_34'
                                    ? styles.sizeText
                                    : customStyles.selectedSizeText
                                  }
                                  >
                                    34
                                </Text>
                              </RectButton>
                          ): (
                              null
                          ) }
                          { size.size_35 > 0 ? (
                              <RectButton
                                style={
                                  selectedSize === 'size_35'
                                  ? styles.sizeContainer
                                  : customStyles.selectedSize
                                  }
                                onPress={() => setSelectedSize('size_35')}
                              >
                                <Text
                                  style={
                                    selectedSize === 'size_35'
                                    ? styles.sizeText
                                    : customStyles.selectedSizeText
                                  }
                                  >
                                    35
                                </Text>
                              </RectButton>
                          ): (
                              null
                          ) }
                          { size.size_36 > 0 ? (
                              <RectButton
                                style={
                                  selectedSize === 'size_36'
                                  ? styles.sizeContainer
                                  : customStyles.selectedSize
                                  }
                                onPress={() => setSelectedSize('size_36')}
                              >
                                <Text
                                  style={
                                    selectedSize === 'size_36'
                                    ? styles.sizeText
                                    : customStyles.selectedSizeText
                                  }
                                  >
                                    36
                                </Text>
                              </RectButton>
                          ): (
                              null
                          ) }
                          { size.size_37 > 0 ? (
                              <RectButton
                                style={
                                  selectedSize === 'size_37'
                                  ? styles.sizeContainer
                                  : customStyles.selectedSize
                                  }
                                onPress={() => setSelectedSize('size_37')}
                              >
                                <Text
                                  style={
                                    selectedSize === 'size_37'
                                    ? styles.sizeText
                                    : customStyles.selectedSizeText
                                  }
                                  >
                                    37
                                </Text>
                              </RectButton>
                          ): (
                              null
                          ) }
                          { size.size_38 > 0 ? (
                              <RectButton
                                style={
                                  selectedSize === 'size_38'
                                  ? styles.sizeContainer
                                  : customStyles.selectedSize
                                  }
                                onPress={() => setSelectedSize('size_38')}
                              >
                                <Text
                                  style={
                                    selectedSize === 'size_38'
                                    ? styles.sizeText
                                    : customStyles.selectedSizeText
                                  }
                                  >
                                    38
                                </Text>
                              </RectButton>
                          ): (
                              null
                          ) }
                          { size.size_39 > 0 ? (
                              <RectButton
                                style={
                                  selectedSize === 'size_39'
                                  ? styles.sizeContainer
                                  : customStyles.selectedSize
                                  }
                                onPress={() => setSelectedSize('size_39')}
                              >
                                <Text
                                  style={
                                    selectedSize === 'size_39'
                                    ? styles.sizeText
                                    : customStyles.selectedSizeText
                                  }
                                  >
                                    39
                                </Text>
                              </RectButton>
                          ): (
                              null
                          ) }
                          { size.size_40 > 0 ? (
                              <RectButton
                                style={
                                  selectedSize === 'size_40'
                                  ? styles.sizeContainer
                                  : customStyles.selectedSize
                                  }
                                onPress={() => setSelectedSize('size_40')}
                              >
                                <Text
                                  style={
                                    selectedSize === 'size_40'
                                    ? styles.sizeText
                                    : customStyles.selectedSizeText
                                  }
                                  >
                                    40
                                </Text>
                              </RectButton>
                          ): (
                              null
                          ) }
                          { size.size_41 > 0 ? (
                              <RectButton
                                style={
                                  selectedSize === 'size_41'
                                  ? styles.sizeContainer
                                  : customStyles.selectedSize
                                  }
                                onPress={() => setSelectedSize('size_41')}
                              >
                                <Text
                                  style={
                                    selectedSize === 'size_41'
                                    ? styles.sizeText
                                    : customStyles.selectedSizeText
                                  }
                                  >
                                    41
                                </Text>
                              </RectButton>
                          ): (
                              null
                          ) }
                          { size.size_42 > 0 ? (
                              <RectButton
                                style={
                                  selectedSize === 'size_42'
                                  ? styles.sizeContainer
                                  : customStyles.selectedSize
                                  }
                                onPress={() => setSelectedSize('size_42')}
                              >
                                <Text
                                  style={
                                    selectedSize === 'size_42'
                                    ? styles.sizeText
                                    : customStyles.selectedSizeText
                                  }
                                  >
                                    42
                                </Text>
                              </RectButton>
                          ): (
                              null
                          ) }
                          { size.size_43 > 0 ? (
                              <RectButton
                                style={
                                  selectedSize === 'size_43'
                                  ? styles.sizeContainer
                                  : customStyles.selectedSize
                                  }
                                onPress={() => setSelectedSize('size_43')}
                              >
                                <Text
                                  style={
                                    selectedSize === 'size_43'
                                    ? styles.sizeText
                                    : customStyles.selectedSizeText
                                  }
                                  >
                                    43
                                </Text>
                              </RectButton>
                          ): (
                              null
                          ) }
                          { size.size_44 > 0 ? (
                              <RectButton
                                style={
                                  selectedSize === 'size_44'
                                  ? styles.sizeContainer
                                  : customStyles.selectedSize
                                  }
                                onPress={() => setSelectedSize('size_44')}
                              >
                                <Text
                                  style={
                                    selectedSize === 'size_44'
                                    ? styles.sizeText
                                    : customStyles.selectedSizeText
                                  }
                                  >
                                    44
                                </Text>
                              </RectButton>
                          ): (
                              null
                          ) }
                          { size.size_45 > 0 ? (
                              <RectButton
                                style={
                                  selectedSize === 'size_45'
                                  ? styles.sizeContainer
                                  : customStyles.selectedSize
                                  }
                                onPress={() => setSelectedSize('size_45')}
                              >
                                <Text
                                  style={
                                    selectedSize === 'size_45'
                                    ? styles.sizeText
                                    : customStyles.selectedSizeText
                                  }
                                  >
                                    45
                                </Text>
                              </RectButton>
                          ): (
                              null
                          ) }
                          { size.size_46 > 0 ? (
                              <RectButton
                                style={
                                  selectedSize === 'size_46'
                                  ? styles.sizeContainer
                                  : customStyles.selectedSize
                                  }
                                onPress={() => setSelectedSize('size_46')}
                              >
                                <Text
                                  style={
                                    selectedSize === 'size_46'
                                    ? styles.sizeText
                                    : customStyles.selectedSizeText
                                  }
                                  >
                                    46
                                </Text>
                              </RectButton>
                          ): (
                              null
                          ) }
                          { size.size_47 > 0 ? (
                              <RectButton
                                style={
                                  selectedSize === 'size_47'
                                  ? styles.sizeContainer
                                  : customStyles.selectedSize
                                  }
                                onPress={() => setSelectedSize('size_47')}
                              >
                                <Text
                                  style={
                                    selectedSize === 'size_47'
                                    ? styles.sizeText
                                    : customStyles.selectedSizeText
                                  }
                                  >
                                    47
                                </Text>
                              </RectButton>
                          ): (
                              null
                          ) }
                          { size.size_48 > 0 ? (
                              <RectButton
                                style={
                                  selectedSize === 'size_48'
                                  ? styles.sizeContainer
                                  : customStyles.selectedSize
                                  }
                                onPress={() => setSelectedSize('size_48')}
                              >
                                <Text
                                  style={
                                    selectedSize === 'size_48'
                                    ? styles.sizeText
                                    : customStyles.selectedSizeText
                                  }
                                  >
                                    48
                                </Text>
                              </RectButton>
                          ): (
                              null
                          ) }
                      </ScrollView>
                    :
                      <Text style={ styles.messageError }>Desculpe, no momento este produto está esgotado.</Text>
                    }
                </View>

                {
                (selectedSizeError !== '')
                    ? <Text style={ styles.messageError }>{ selectedSizeError }</Text>
                    : null
                }

                <RectButton style={styles.cartButton} onPress={addToCart}>
                    <MaterialCommunityIcons name="cart-plus" size={24} color="#f2f2f2" />
                    <Text style={styles.cartButtonText} >
                        Adicionar ao carrinho
                    </Text>
                </RectButton>

                <View style={styles.additionalInfo} >
                    <Text style={styles.additionalInfoHeader} >
                        Informações adicionais:
                    </Text>
                    <View style={styles.horizontalInfo} >
                        <MaterialCommunityIcons name="palette-swatch" size={24} color="#2F80ED" />
                        <Text style={styles.additionalInfoTitle} >
                            Material:
                        </Text>
                    </View>
                    <Text style={styles.additionalInfoText} >
                        {product.material}
                    </Text>
                    <View style={styles.horizontalInfo} >
                        <MaterialCommunityIcons name="palette" size={24} color="#2F80ED" />
                        <Text style={styles.additionalInfoTitle} >
                            Cor:
                        </Text>
                    </View>
                    <Text style={styles.additionalInfoText} >
                        {product.color}
                    </Text>
                </View>

            </View>
        </ScrollView>
    );
}

const customStyles = StyleSheet.create({
  selectedSize: {
    width: 50,
        height: 50,
        borderRadius: 25,
        margin: 5,

        justifyContent: 'center',
        alignItems: 'center',

        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
        backgroundColor: '#F2F2F2',
  },

  selectedSizeText: {
    color: '#4F4F4F',
    fontFamily: 'Quicksand_700Bold',
    fontSize: 24,
},

});
