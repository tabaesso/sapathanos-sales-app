import React, { useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { View, Text, ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import api from '../../services/api';

import styles from '../styles';

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

    function navigateToRegister() {
        navigation.navigate('RegisterNewShoe');
    }

    function sizeEdit(size_id: string) {
        navigation.navigate('UpdateQuantity', {id: size_id});
    }

    useFocusEffect(() => {
        api.get('products/active').then((response => {
            setShoes(response.data);
        }))
    })

    return (
        <View style={ styles.main }>
            <Text style={styles.titlePage}> Listando sapatos ativos </Text>
            <Text style={styles.lenghtInfo}> Total de sapatos encontrados: { shoes.length } </Text>

            <ScrollView
                style={ styles.cardHorizontalContainer }
            >
                {
                    shoes.map(shoe => {
                        return (
                            <View key={shoe.id} style={styles.cardHorizontallContent}>
                                <View style={ styles.cardVerticalImage }>
                                     <MaterialCommunityIcons name="file-image" color="#4F4F4F" size={60}/>
                                </View>
                               

                                <View style={styles.cardVHorizontallInfo}>
                                    <Text style={styles.shoeName}>{ shoe.name }</Text>
                                    <Text style={styles.shoeDescription}>{ shoe.description }</Text>
                                    <Text style={styles.shoePrice}>R$ { shoe.price }</Text>

                                    <RectButton style={styles.iconButton} onPress={() => sizeEdit(shoe.size_id)}>
                                        <MaterialCommunityIcons name="plus" color="#FFF" size={26}/>
                                    </RectButton>
                                </View>
                            </View>
                            
                        );
                    })
                }
            </ScrollView>
        </View>        
    );
}