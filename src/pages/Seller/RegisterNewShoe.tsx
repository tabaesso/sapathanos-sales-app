import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, ScrollView, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {Picker} from '@react-native-community/picker';

import api from '../../services/api';

import styles from '../styles';
import AsyncStorage from '@react-native-community/async-storage';

interface Departments {
  id: string;
  name: string;
}

interface Categories {
  id: string;
  name: string;
}

export default function RegisterNewShoe() {
    const navigation = useNavigation();
    const [category_id, setCategoryId] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [color, setColor] = useState('');
    const [material, setMaterial] = useState('');
    const [price, setPrice] = useState('');
    const [seller_id, setSellerId] = useState('');
    const [departmentError, setDepartmentError] = useState('');
    const [categoryError, setCategoryError] = useState('');
    const [nameError, setNameError] = useState('');
    const [descriptionError, setDescriptionError] = useState('');
    const [colorError, setColorError] = useState('');
    const [materialError, setMaterialError] = useState('');
    const [priceError, setPriceError] = useState('');
    const [department_id, setDepartmentId] = useState('');
    const [sellerError, setSellerError] = useState('');
    const [departments, setDepartments] = useState<Departments[]>([]);
    const [categories, setCategories] = useState<Categories[]>([]);

    function loadSeller() {
      AsyncStorage.getItem('@Sapathanos:seller').then(response => {
        if(response) {
          const res = JSON.parse(response);
          setSellerId(res.id);
        }
      });
    }

    useEffect(() => {
      if(category_id !== '') {
        categoryValidator();
      }

      if(department_id !== '') {
        departmentValidator();
      }
    }, [category_id, department_id]);

    useEffect(() => {
      if(department_id !== '') {
        api.get(`categories/${department_id}/departamento`).then((response => {
          setCategories(response.data);
        }));
      }
    }, [department_id]);

    useEffect(() => {
      api.get('departamentos').then((response => {
        setDepartments(response.data);
      }));

      loadSeller();
    }, []);

    async function navigateToUpdateSizes() {
        sellerValidator();
        departmentValidator();
        nameValidator();
        descriptionValidator();
        colorValidator();
        materialValidator();
        priceValidator();
        categoryValidator();

        if(
            seller_id === '' ||
            department_id === '' ||
            category_id === '' ||
            name === '' ||
            description === '' ||
            color === '' ||
            material === '' ||
            price === ''
         ){
            console.log({
                message: 'Verifique os campos'
            });
        } else {
            const data = {
                    seller_id,
                    category_id,
                    name,
                    description,
                    color,
                    material,
                    price
                }

            const response = await api.post('products', data);

            await api.put(`products/${response.data.id}/status`);

            navigation.navigate('UpdateQuantity', { id: response.data.size_id } );

            clear();
        }
    }

    function clear() {
      setDepartmentId('');
      setCategoryId('');
      setName('')
      setDescription('');
      setMaterial('');
      setColor('');
      setPrice('');
    }

    function sellerValidator() {
      if(seller_id === '' || seller_id === null) {
        setSellerError('Aparentemente você não está logado');
      } else {
        setSellerError('');
      }
    }

    function departmentValidator() {
      if(department_id === '' || department_id === null) {
        setDepartmentError('Não se esqueça do departamento');
      } else {
        setDepartmentError('');
      }
    }

    function categoryValidator() {
      if(category_id === '' || category_id === null) {
        setCategoryError('Não se esqueça da categoria');
      } else {
        setCategoryError('');
      }
    }

    function nameValidator() {
      if(name === '' || name === null) {
        setNameError('Não se esqueça do nome');
      } else {
        setNameError('');
      }
    }

    function descriptionValidator() {
      if(description === '' || description === null) {
        setDescriptionError('Não se esqueça da descrição');
      } else {
        setDescriptionError('');
      }
    }

    function colorValidator() {
      if(color === '' || color === null) {
          setColorError('Não se esqueça da cor');
       } else {
          setColorError('');
       }
    }

    function materialValidator() {
      if(material === '' || material === null) {
          setMaterialError('Não se esqueça do material');
      } else {
          setMaterialError('');
      }
    }

    function priceValidator() {
        if(price === '' || price === null) {
            setPriceError('Não se esqueça do preço');
        } else {
            setPriceError('');
        }
    }

    return (
        <ScrollView style={ styles.mainForScroll }>
            <View style={ styles.selectInputContainer } >
              {
              (sellerError !== '')
                ? <Text style={ styles.messageError }>{ sellerError }</Text>
                : null
              }
                <Text style={styles.titleInput}>
                    Selecione o departamento:
                </Text>
                <View style={styles.selectInput}>
                    <Picker
                        selectedValue={department_id}
                        style={styles.pickerInput}
                        onValueChange={(itemValue, itemIndex) =>
                            setDepartmentId(String(itemValue))
                    }>
                        <Picker.Item
                            label="Clique para selecionar"
                            value=""
                        />
                        {
                          departments.map(department => {
                            return (
                                <Picker.Item
                                    key={department.id}
                                    label={department.name}
                                    value={department.id}
                                />
                            );
                          })
                        }

                    </Picker>
                </View>
                {
                (departmentError !== '')
                    ? <Text style={ styles.messageError }>{ departmentError }</Text>
                    : null
                }
            </View>

            <View style={ styles.selectInputContainer }>
                <Text style={styles.titleInput}>
                    Selecione uma categoria:
                </Text>
                <View style={styles.selectInput}>
                    <Picker
                        selectedValue={category_id}
                        style={styles.pickerInput}
                        enabled={ department_id === '' ? false : true }
                        onValueChange={(itemValue, itemIndex) =>
                            setCategoryId(String(itemValue))
                    }>
                        <Picker.Item
                            label="Clique para selecionar"
                            value=""
                        />
                        {
                          categories.map(categorie => {
                              return (
                                  <Picker.Item
                                      key={categorie.id}
                                      label={categorie.name}
                                      value={categorie.id}
                                  />
                              );
                          })
                        }
                    </Picker>
                </View>
                {
                (categoryError !== '')
                    ? <Text style={ styles.messageError }>{ categoryError }</Text>
                    : null
                }
                {
                (department_id === '' || department_id === null)
                    ? <Text style={ styles.messageError }> Selecione um departamento </Text>
                    : null
                }
            </View>

            <View style={ styles.inputContainer }>
              <Text style={styles.titleInput}>
                Nome
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

            <View style={ styles.inputContainer }>
              <Text style={styles.titleInput}>
                  Descrição
              </Text>
              <TextInput
                  style={styles.textInput}
                  value={description}
                  onBlur={descriptionValidator}
                  multiline
                  onChangeText={setDescription}
              />

              {
                  (descriptionError !== '')
                      ? <Text style={ styles.messageError }>{ descriptionError }</Text>
                      : null
              }
            </View>

            <View style={ styles.inputContainer }>
              <Text style={styles.titleInput}>
                  Cor
              </Text>
              <TextInput
                  style={styles.textInput}
                  value={color}
                  onBlur={colorValidator}
                  multiline
                  onChangeText={setColor}
              />

              {
                  (colorError !== '')
                      ? <Text style={ styles.messageError }>{ colorError }</Text>
                      : null
              }
            </View>

            <View style={ styles.inputContainer }>
              <Text style={styles.titleInput}>
                  Material
              </Text>
              <TextInput
                  style={styles.textInput}
                  value={material}
                  onBlur={materialValidator}
                  multiline
                  onChangeText={setMaterial}
              />

              {
                  (materialError !== '')
                      ? <Text style={ styles.messageError }>{ materialError }</Text>
                      : null
              }
            </View>

            <View style={ styles.inputContainer }>
              <Text style={styles.titleInput}>
                  Preço
              </Text>
              <TextInput
                  style={styles.textInput}
                  value={price}
                  onBlur={priceValidator}
                  keyboardType="number-pad"
                  maxLength={7}
                  onChangeText={setPrice}
              />

              {
                  (priceError !== '')
                      ? <Text style={ styles.messageError }>{ priceError }</Text>
                      : null
              }
            </View>

            <View style={{ marginBottom: 50 }}>
                <RectButton style={styles.textIconButton} onPress={navigateToUpdateSizes}>
                    <MaterialCommunityIcons name="chevron-right" color="#FFF" size={26}/>
                    <Text style={styles.titleTextIconButton}>
                        Continuar
                    </Text>
                </RectButton>
            </View>
        </ScrollView>
    );
}
