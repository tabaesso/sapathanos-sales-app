import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, ScrollView, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {Picker} from '@react-native-community/picker';

import api from '../../services/api';

import styles from '../styles';

export default function RegisterNewShoe() {
    const navigation = useNavigation();
    const [category_id, setCategoryId] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [color, setColor] = useState('');
    const [material, setMaterial] = useState('');
    const [price, setPrice] = useState('');
    const [categoryError, setCategoryError] = useState('');
    const [nameError, setNameError] = useState('');
    const [descriptionError, setDescriptionError] = useState('');
    const [colorError, setColorError] = useState('');
    const [materialError, setMaterialError] = useState('');
    const [priceError, setPriceError] = useState('');

    const [selectedDepartment, setSelectedDepartment] = useState<any>({
        department: 'Selecione'
    });
    const [selectedCategoty, setSelectedCategoty] = useState<any>({
        category: 'Selecione'
    });

    async function navigateToUpdateSizes() {
        setCategoryId(selectedCategoty.category);

        nameValidator();
        descriptionValidator();
        colorValidator();
        materialValidator();
        priceValidator();
        categoryValidator();

        if( 
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
        setCategoryId('');
        setName('')
        setDescription('');
        setMaterial('');
        setColor('');
        setPrice('');
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
        <ScrollView style={{ 
            flex: 1,
            padding: 25
        }}>
            <View>
                <Text style={styles.titleInput}>
                    Selecione o departamento:
                </Text>
                <View style={styles.selectInput}>
                    <Picker
                        selectedValue={selectedDepartment.department}
                        style={styles.pickerInput}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedDepartment({department: itemValue})
                    }>
                        <Picker.Item 
                            label="Selecione" 
                            value=""
                        />
                         <Picker.Item 
                            label="Masculino" 
                            value="14902049-10d6-46ae-a4ef-e7eeccea01cb"
                        />
                        {/* {
                            products.map(product => {
                                return (
                                    <Picker.Item 
                                        key={product.id} 
                                        label={product.name} 
                                        value={product.id}
                                    />
                                );
                            })
                        } */}
                        
                    </Picker>
                </View>
            </View>

            <View>
                <Text style={styles.titleInput}>
                    Selecione uma categoria:
                </Text>
                <View style={styles.selectInput}>
                    <Picker
                        selectedValue={selectedCategoty.category}
                        style={styles.pickerInput}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedCategoty({category: itemValue})
                    }>
                        <Picker.Item 
                            label="Selecione" 
                            value=""
                        />
                        <Picker.Item 
                            label="Sapatênis" 
                            value="41ef269a-4791-474a-9faf-2708daca7b3d"
                        />
                        {/* {
                            products.map(product => {
                                return (
                                    <Picker.Item 
                                        key={product.id} 
                                        label={product.name} 
                                        value={product.id}
                                    />
                                );
                            })
                        }                         */}
                    </Picker>
                </View>
                {
                (categoryError !== '') 
                    ? <Text style={ styles.messageError }>{ categoryError }</Text>
                    : null
                }
            </View>

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