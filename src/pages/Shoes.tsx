import React, { useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
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

export default function Shoes() {
    const navigation = useNavigation();
    const [shoes, setShoes] = useState<Shoes[]>([]);

    useFocusEffect(() => {
        api.get('products/active').then((response => {
            setShoes(response.data);
        }))
    })

    function goToProductDetails( id: string ){
        navigation.navigate('ProductDetails', { id });
    }

    return (
        <View style={ styles.main }>
            <Text style={styles.lenghtInfo}> Total de sapatos encontrados: { shoes.length } </Text>
            
            <ScrollView>
                <View style={ styles.cardVerticalContainer } >{
                    shoes.map(shoe => {
                        return (
                            <RectButton key={shoe.id} style={styles.cardVerticalContent} onPress={ () => goToProductDetails(shoe.id) } >
                                <View style={ styles.cardVerticalImage }>
                                    <MaterialCommunityIcons name="file-image" color="#4F4F4F" size={60}/>
                                </View>
                            

                                <View style={styles.cardVerticalInfo}>
                                    <Text style={styles.shoeName}>{ shoe.name }</Text>
                                    <Text style={styles.shoeDescription}>{ shoe.description }</Text>
                                    <Text style={styles.shoePrice}>R$ { shoe.price }</Text>
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