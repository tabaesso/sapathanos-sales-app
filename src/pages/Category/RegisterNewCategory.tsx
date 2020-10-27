import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, ScrollView, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {Picker} from '@react-native-community/picker';

import api from '../../services/api';

import styles from '../styles';

export default function RegisterNewCategory() {
    const navigation = useNavigation();
    const [department_id, setDepartmentId] = useState('');
    const [name, setName] = useState('');
    const [departmentError, setDepartmentError] = useState('');
    const [nameError, setNameError] = useState('');


    const [selectedDepartment, setSelectedDepartment] = useState<any>({
        department: 'Selecione'
    });




    function clear() {
        setDepartmentId('');
        setName('')

    }


    function nameValidator() {
        if(name === '' || name === null) {
            setNameError('Não se esqueça do nome');
        } else {
            setNameError('');
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


            <View style={{ marginBottom: 50 }}>
                <RectButton style={styles.textIconButton}>
                    <Text style={styles.titleTextIconButton}>
                        Cadastrar
                    </Text>
                </RectButton>
            </View>
        </ScrollView>
    );
}
