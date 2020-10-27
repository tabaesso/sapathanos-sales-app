import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import api from '../services/api';

import styles from './styles'

interface Categories {
  id: string;
  department_id: string;
  name: string;

}

export default function Categories() {
  const [categories, setCategories] = useState<Categories[]>([]);

    return (

        <View style={ styles.main }>
        <Text> Categorias </Text>

        <ScrollView>
            <View style={ styles.cardVerticalContainer } >{
                categories.map(category => {
                    return (
                        <View key={category.id} style={styles.cardVerticalContent}>

                            <View style={styles.cardVerticalInfo}>
                                <Text style={styles.categoryName}>{ category.name }</Text>

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


