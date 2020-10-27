import React, { useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import api from '../../services/api';

import styles from '../styles';

interface Categories {
    id: string;
    department_id: string;
    name: string;
}

export default function ListAllCategories() {
    const navigation = useNavigation();
    const [categories, setCategories] = useState<Categories[]>([]);

    function navigateToRegister() {
        navigation.navigate('RegisterNewCategory');
    }

    return (
        <View style={ styles.main }>
            <RectButton style={styles.textIconButton} onPress={navigateToRegister}>
                <MaterialCommunityIcons name="plus" color="#FFF" size={26}/>
                <Text style={styles.titleTextIconButton}>
                    Adicionar nova categoria
                </Text>
            </RectButton>

            <Text style={styles.titlePage}> Listando todas as categorias </Text>

            <ScrollView
                style={ styles.cardHorizontalContainer }
            >
                {
                    categories.map(category => {
                        return (
                            <View key={category.id} style={styles.cardHorizontallContent}>

                                <View style={styles.cardVHorizontallInfo}>
                                    <Text style={styles.categoryName}>{ category.name }</Text>

                                </View>
                            </View>

                        );
                    })
                }
            </ScrollView>
        </View>
    );
}
