import React, { useEffect, useState } from 'react';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import api from '../../services/api';

import styles from '../styles';
import { render } from 'react-dom';

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

export default function ProductDetail(){
    const route = useRoute();
    const params = route.params as ProductRouteParams;

    const [product, setProduct] = useState<Product>();
    const [size, setSize] = useState<Size>();

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


    if ( !product || !size ){
        return (
            <View style={styles.main} >
                <Text style={styles.shoeDescription} >
                    Carregando....
                </Text>
            </View>
        );
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
                    R$ {product.price}
                </Text>

                { /* view dos tamanhos */ }
                <View style={styles.sizesView} >
                    <Text>
                        Tamanhos disponíveis:
                    </Text>
                    <ScrollView 
                        style={styles.horizontalInfo} 
                        horizontal 
                        showsHorizontalScrollIndicator={false}
                    >
                        { size.size_33 > 0 ? (
                            <View style={styles.sizeContainer} >
                                <Text style={styles.sizeText} >
                                    33
                                </Text>
                            </View>
                        ): (
                            null
                        ) }
                        { size.size_34 > 0 ? (
                            <View style={styles.sizeContainer} >
                                <Text style={styles.sizeText} >
                                    34
                                </Text>
                            </View>
                        ): (
                            null
                        ) }
                        { size.size_35 > 0 ? (
                            <View style={styles.sizeContainer} >
                                <Text style={styles.sizeText} >
                                    35
                                </Text>
                            </View>
                        ): (
                            null
                        ) }
                        { size.size_36 > 0 ? (
                            <View style={styles.sizeContainer} >
                                <Text style={styles.sizeText} >
                                    36
                                </Text>
                            </View>
                        ): (
                            null
                        ) }
                        { size.size_37 > 0 ? (
                            <View style={styles.sizeContainer} >
                                <Text style={styles.sizeText} >
                                    37
                                </Text>
                            </View>
                        ): (
                            null
                        ) }
                        { size.size_38 > 0 ? (
                            <View style={styles.sizeContainer} >
                                <Text style={styles.sizeText} >
                                    38
                                </Text>
                            </View>
                        ): (
                            null
                        ) }
                        { size.size_39 > 0 ? (
                            <View style={styles.sizeContainer} >
                                <Text style={styles.sizeText} >
                                    39
                                </Text>
                            </View>
                        ): (
                            null
                        ) }
                        { size.size_40 > 0 ? (
                            <View style={styles.sizeContainer} >
                                <Text style={styles.sizeText} >
                                    40
                                </Text>
                            </View>
                        ): (
                            null
                        ) }
                        { size.size_41 > 0 ? (
                            <View style={styles.sizeContainer} >
                                <Text style={styles.sizeText} >
                                    41
                                </Text>
                            </View>
                        ): (
                            null
                        ) }
                        { size.size_42 > 0 ? (
                            <View style={styles.sizeContainer} >
                                <Text style={styles.sizeText} >
                                    42
                                </Text>
                            </View>
                        ): (
                            null
                        ) }
                        { size.size_43 > 0 ? (
                            <View style={styles.sizeContainer} >
                                <Text style={styles.sizeText} >
                                    43
                                </Text>
                            </View>
                        ): (
                            null
                        ) }
                        { size.size_44 > 0 ? (
                            <View style={styles.sizeContainer} >
                                <Text style={styles.sizeText} >
                                    44
                                </Text>
                            </View>
                        ): (
                            null
                        ) }
                        { size.size_45 > 0 ? (
                            <View style={styles.sizeContainer} >
                                <Text style={styles.sizeText} >
                                    45
                                </Text>
                            </View>
                        ): (
                            null
                        ) }
                        { size.size_46 > 0 ? (
                            <View style={styles.sizeContainer} >
                                <Text style={styles.sizeText} >
                                    46
                                </Text>
                            </View>
                        ): (
                            null
                        ) }
                        { size.size_47 > 0 ? (
                            <View style={styles.sizeContainer} >
                                <Text style={styles.sizeText} >
                                    47
                                </Text>
                            </View>
                        ): (
                            null
                        ) }
                        { size.size_48 > 0 ? (
                            <View style={styles.sizeContainer} >
                                <Text style={styles.sizeText} >
                                    48
                                </Text>
                            </View>
                        ): (
                            null
                        ) }
                    </ScrollView>
                </View>

                <RectButton style={styles.cartButton} >
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
