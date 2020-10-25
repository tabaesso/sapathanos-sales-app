import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import api from '../services/api';

import styles from './styles'

interface Shoes {
    id: string;
    name: string;
    description: string;
    price: number;
    size_id: string;
}

export default function Shoes() {
    const [shoes, setShoes] = useState<Shoes[]>([]);

    useFocusEffect(() => {
        api.get('products/active').then((response => {
            setShoes(response.data);
        }))
    })

    return (
        <View style={ styles.main }>
            <Text style={styles.lenghtInfo}> Total de sapatos encontrados: { shoes.length } </Text>
            
            <ScrollView>
                <View style={ styles.cardVerticalContainer } >{
                    shoes.map(shoe => {
                        return (
                            <View key={shoe.id} style={styles.cardVerticalContent}>
                                <View style={ styles.cardVerticalImage }>
                                    <MaterialCommunityIcons name="file-image" color="#4F4F4F" size={60}/>
                                </View>
                            

                                <View style={styles.cardVerticalInfo}>
                                    <Text style={styles.shoeName}>{ shoe.name }</Text>
                                    <Text style={styles.shoeDescription}>{ shoe.description }</Text>
                                    <Text style={styles.shoePrice}>R$ { shoe.price }</Text>
                                </View>
                            </View>                            
                        );
                    })
                }
                </View>                
            </ScrollView>
        </View>        
    );
}