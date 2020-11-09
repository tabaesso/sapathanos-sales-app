import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
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

interface DepartmentRouteParams {
  id: string;
}

export default function ListCategoriesByDepartmentCustomer() {
  const navigation = useNavigation();
  const route = useRoute();
  const params = route.params as DepartmentRouteParams;

  const [categories, setCategories] = useState<Categories[]>([]);

  function loadCategories(id: string) {
    const department_id = id;

    api.get(`categories/${department_id}/departamento`).then((response => {
      setCategories(response.data);
    }));
  }

  useEffect(() => {
    loadCategories(params.id);
  }, [params]);

  function goToShoes(id: string) {
    navigation.navigate('ShoesByCategory', { id });
  }

  return (
    <View style={ styles.main }>
        <ScrollView
            style={ [customStyles.listContainer, { marginTop: -50}] }
        >
            {
            categories.map(categoty => {
              return (
                <View key={categoty.id}>
                  <View style={ customStyles.divisor }></View>

                  <RectButton style={customStyles.listIitem} onPress={() => goToShoes(categoty.id)}>
                    <Text style={ styles.titlePage }>{ categoty.name }</Text>
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
