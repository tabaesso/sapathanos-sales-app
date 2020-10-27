import React, { useEffect, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import api from '../../services/api';

import styles from '../styles';

interface Departments {
  id: string;
  name: string;
}

export default function ListAllDepartmentsCustomer() {
    const navigation = useNavigation();
    const [departments, setDepartments] = useState<Departments[]>([]);

    function goToCategories(id: string) {
        navigation.navigate('ListCategoriesByDepartmentCustomer', { id });

    }

    useFocusEffect(() => {
      api.get('departamentos').then((response => {
        setDepartments(response.data);
      }));
    });

    return (
        <View style={ styles.main }>
            <Text style={styles.titlePage}> Selecione o departamento </Text>

            <ScrollView
              style={ customStyles.listContainer }
            >
              {
                departments.map(department => {
                  return (
                    <View key={department.id}>
                      <View style={ customStyles.divisor }></View>

                      <RectButton style={customStyles.listIitem} onPress={() => goToCategories(department.id)}>
                        <Text style={ styles.titlePage }>{ department.name }</Text>
                        <MaterialCommunityIcons name="chevron-right" color="#828282" size={26}/>
                      </RectButton>

                      <View style={ customStyles.divisor }></View>
                    </View>

                  );
                })
              }
            </ScrollView>
        </View>
    );
}

const customStyles = StyleSheet.create({
  divisor: {
    width: '100%',
    borderTopWidth: 1,
    borderColor: '#CCC'
  },

  listContainer: {
    width: '100%',
    marginTop: 20
  },

  listIitem: {
    paddingHorizontal: 10,
    height: 64,
    backgroundColor: 'transparent',

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    direction: 'inherit',
    flexWrap: 'nowrap'
  }
});
