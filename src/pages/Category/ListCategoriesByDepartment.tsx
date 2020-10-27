import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
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

export default function ListCategoriesByDepartment() {
    const route = useRoute();
    const params = route.params as DepartmentRouteParams;

    const [categories, setCategories] = useState<Categories[]>([]);
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');

    function loadCategories(id: string) {
      const department_id = id;

      api.get(`categories/${department_id}/departamento`).then((response => {
        setCategories(response.data);
      }));
    }

    useEffect(() => {
      loadCategories(params.id);
    }, [params]);

    async function handleCreateCategory() {
      const department_id = params.id;
      nameValidator();

      if(
        name === '' ||
        department_id === ''
      ) {
        console.log('Algum capos está vázio');
      } else {
        const data = {
          name,
          department_id
        };

        await api.post('categories', data);

        loadCategories(params.id);
        setName('');
      }
    }

    function nameValidator() {
      if(name === '' || name === null) {
          setNameError('Não se esqueça do nome');
      } else {
          setNameError('');
      }
    }

    return (
        <View style={ styles.main }>
            <View style={ [styles.inputContainer, {marginTop: -50}] }>
              <Text style={styles.titleInput}>
                Nome da nova categoria:
              </Text>
              <TextInput
                style={styles.textInput}
                value={name}
                onBlur={nameValidator}
                multiline
                onChangeText={setName}
              />
              {
                (nameError !== '')
                  ? <Text style={ styles.messageError }>{ nameError }</Text>
                  : null
              }
            </View>

            <View style={[styles.textIconButtonContainer, { marginTop: -20 }]}>
              <RectButton style={styles.textIconButton} onPress={handleCreateCategory}>
                  <MaterialCommunityIcons name="plus" color="#FFF" size={26}/>
                  <Text style={styles.titleTextIconButton}>
                    Adicionar nova categoria
                  </Text>
              </RectButton>
            </View>

            <ScrollView
                style={ customStyles.listContainer }
            >
                {
                    categories.map(categorie => {
                        return (
                          <View key={categorie.id}>
                            <View style={ customStyles.divisor }></View>

                            <View style={customStyles.listIitem}>
                              <MaterialCommunityIcons name="dots-vertical" color="#828282" size={26}/>
                              <Text style={ styles.titlePage }>{ categorie.name }</Text>
                            </View>

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
    justifyContent: 'flex-start',
    alignItems: 'center',
    direction: 'inherit',
    flexWrap: 'nowrap'
  }
});
