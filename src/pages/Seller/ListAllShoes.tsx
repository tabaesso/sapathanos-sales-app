import React, { useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
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

export default function ListAllShoes() {
    const navigation = useNavigation();
    const [shoes, setShoes] = useState<Shoes[]>([]);

    function navigateToRegister() {
        navigation.navigate('RegisterNewShoe');
    }

    function sizeEdit(size_id: string) {
        navigation.navigate('UpdateQuantity', {id: size_id});
    }

    useFocusEffect(() => {
        api.get('products').then((response => {
            setShoes(response.data);
        }))
    })

    if(!shoes) {
      return (
        <View >
          <Text>Carrgando...</Text>
        </View>
      )
    }

    return (
        <View style={ styles.main }>

            <Text style={styles.titlePage}> Listando todos os sapatos </Text>
            <Text style={styles.lenghtInfo}> Total de sapatos encontrados: { shoes.length } </Text>

            <View style={ styles.textIconButtonContainer }>
            <RectButton style={styles.textIconButton} onPress={navigateToRegister}>
                <MaterialCommunityIcons name="plus" color="#FFF" size={26}/>
                <Text style={styles.titleTextIconButton}>
                    Adicionar novo sapato
                </Text>
            </RectButton>
            </View>

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
                                    <View style={styles.infoShoeContainer}>
                                        <Text style={styles.infoShoeLeft}>R$ </Text>
                                        <Text style={styles.infoShoeRight}>{ shoe.price }</Text>
                                    </View>

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

