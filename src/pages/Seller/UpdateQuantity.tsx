import React, { useEffect, useState } from 'react';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import { Text, StyleSheet, ScrollView, TextInput, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import api from '../../services/api';

import styles from '../styles';

interface ShoeRouteParams {
    id: string;
}

interface Size {
    size_33: number;
    size_34: number;
    size_35: number;
    size_36: number;
    size_37: number;
    size_38: number;
    size_39: number;
    size_40: number;
    size_41: number;
    size_42: number;
    size_43: number;
    size_44: number;
    size_45: number;
    size_46: number;
    size_47: number;
    size_48: number;
}

export default function UpdateQuantity() {
    const route = useRoute();
    const params = route.params as ShoeRouteParams;
    
    const navigation = useNavigation();

    const [size, setSize] = useState<Size>();
    
    const [size_33, setSize33] = useState('');
    const [size_34, setSize34] = useState('');
    const [size_35, setSize35] = useState('');
    const [size_36, setSize36] = useState('');
    const [size_37, setSize37] = useState('');
    const [size_38, setSize38] = useState('');
    const [size_39, setSize39] = useState('');
    const [size_40, setSize40] = useState('');
    const [size_41, setSize41] = useState('');
    const [size_42, setSize42] = useState('');
    const [size_43, setSize43] = useState('');
    const [size_44, setSize44] = useState('');
    const [size_45, setSize45] = useState('');
    const [size_46, setSize46] = useState('');
    const [size_47, setSize47] = useState('');
    const [size_48, setSize48] = useState('');

    useEffect(() => {  
        api.get(`sizes/${params.id}`).then((response => {
            setSize(response.data);   
        }));
    }, [params.id])

    useEffect(() => { 
        if(size) {
            setSize33(String(size.size_33));
            setSize34(String(size.size_34));
            setSize35(String(size.size_35));
            setSize35(String(size.size_35));
            setSize35(String(size.size_35));
            setSize36(String(size.size_36));
            setSize37(String(size.size_37));
            setSize38(String(size.size_38));
            setSize39(String(size.size_39));
            setSize40(String(size.size_40));
            setSize41(String(size.size_41));
            setSize42(String(size.size_42));
            setSize43(String(size.size_43));
            setSize43(String(size.size_43));
            setSize44(String(size.size_44));
            setSize45(String(size.size_45));
            setSize46(String(size.size_46));
            setSize47(String(size.size_47));
            setSize48(String(size.size_48));
        }
    }, [size])

    if(!size) {
        return (
            <View >
                <Text>Carrgando...</Text>
            </View>
        )
    }
    
    async function handleSave() {
          const data = {
                size_33,
                size_34,
                size_35,
                size_36,
                size_37,
                size_38,
                size_39,
                size_40,
                size_41,
                size_42,
                size_43,
                size_44,
                size_45,
                size_46,
                size_47,
                size_48
            }

        await api.put(`sizes/${params.id}`, data);

        navigation.navigate('ListAllShoes');
    }

    return (
        <ScrollView style={{ 
            flex: 1,
            padding: 25
        }}>
            <View style={customStyles.row}>
                <Text style={customStyles.title}>
                    33
                </Text>

                <View style={{marginTop: 10}}>
                    <MaterialCommunityIcons name="ray-start-arrow" color="#219653" size={26}/>
                </View> 

                {/* <Text> { size.size_33 } </Text> */}

                <TextInput 
                    style={customStyles.input}
                    value={size_33}
                    maxLength={4}
                    keyboardType="numeric"
                    onChangeText={setSize33}
                />
            </View>

            <View style={customStyles.row}>
                <Text style={customStyles.title}>
                    34
                </Text>

                <View style={{marginTop: 10}}>
                    <MaterialCommunityIcons name="ray-start-arrow" color="#219653" size={26}/>
                </View> 

                <TextInput 
                    style={customStyles.input}
                    value={size_34}
                    maxLength={4}
                    keyboardType="numeric"
                    onChangeText={setSize34}
                />
            </View>

            <View style={customStyles.row}>
                <Text style={customStyles.title}>
                    35
                </Text>

                <View style={{marginTop: 10}}>
                    <MaterialCommunityIcons name="ray-start-arrow" color="#219653" size={26}/>
                </View> 

                <TextInput 
                    style={customStyles.input}
                    value={size_35}
                    maxLength={4}
                    keyboardType="numeric"
                    onChangeText={setSize35}
                />
            </View>

            <View style={customStyles.row}>
                <Text style={customStyles.title}>
                    36
                </Text>

                <View style={{marginTop: 10}}>
                    <MaterialCommunityIcons name="ray-start-arrow" color="#219653" size={26}/>
                </View> 

                <TextInput 
                    style={customStyles.input}
                    value={size_36}
                    maxLength={4}
                    keyboardType="numeric"
                    onChangeText={setSize36}
                />
            </View>

            <View style={customStyles.row}>
                <Text style={customStyles.title}>
                    37
                </Text>

                <View style={{marginTop: 10}}>
                    <MaterialCommunityIcons name="ray-start-arrow" color="#219653" size={26}/>
                </View> 

                <TextInput 
                    style={customStyles.input}
                    value={size_37}
                    maxLength={4}
                    keyboardType="numeric"
                    onChangeText={setSize37}
                />
            </View>

            <View style={customStyles.row}>
                <Text style={customStyles.title}>
                    38
                </Text>

                <View style={{marginTop: 10}}>
                    <MaterialCommunityIcons name="ray-start-arrow" color="#219653" size={26}/>
                </View> 

                <TextInput 
                    style={customStyles.input}
                    value={size_38}
                    maxLength={4}
                    keyboardType="numeric"
                    onChangeText={setSize38}
                />
            </View>

            <View style={customStyles.row}>
                <Text style={customStyles.title}>
                    39
                </Text>

                <View style={{marginTop: 10}}>
                    <MaterialCommunityIcons name="ray-start-arrow" color="#219653" size={26}/>
                </View> 

                <TextInput 
                    style={customStyles.input}
                    value={size_39}
                    maxLength={4}
                    keyboardType="numeric"
                    onChangeText={setSize39}
                />
            </View>

            <View style={customStyles.row}>
                <Text style={customStyles.title}>
                    40
                </Text>

                <View style={{marginTop: 10}}>
                    <MaterialCommunityIcons name="ray-start-arrow" color="#219653" size={26}/>
                </View> 

                <TextInput 
                    style={customStyles.input}
                    value={size_40}
                    maxLength={4}
                    keyboardType="numeric"
                    onChangeText={setSize40}
                />
            </View>

            <View style={customStyles.row}>
                <Text style={customStyles.title}>
                    41
                </Text>

                <View style={{marginTop: 10}}>
                    <MaterialCommunityIcons name="ray-start-arrow" color="#219653" size={26}/>
                </View> 

                <TextInput 
                    style={customStyles.input}
                    value={size_41}
                    maxLength={4}
                    keyboardType="numeric"
                    onChangeText={setSize41}
                />
            </View>

            <View style={customStyles.row}>
                <Text style={customStyles.title}>
                    42
                </Text>

                <View style={{marginTop: 10}}>
                    <MaterialCommunityIcons name="ray-start-arrow" color="#219653" size={26}/>
                </View> 

                <TextInput 
                    style={customStyles.input}
                    value={size_42}
                    maxLength={4}
                    keyboardType="numeric"
                    onChangeText={setSize42}
                />
            </View>

            <View style={customStyles.row}>
                <Text style={customStyles.title}>
                    43
                </Text>

                <View style={{marginTop: 10}}>
                    <MaterialCommunityIcons name="ray-start-arrow" color="#219653" size={26}/>
                </View> 

                <TextInput 
                    style={customStyles.input}
                    value={size_43}
                    maxLength={4}
                    keyboardType="numeric"
                    onChangeText={setSize43}
                />
            </View>

            <View style={customStyles.row}>
                <Text style={customStyles.title}>
                    44
                </Text>

                <View style={{marginTop: 10}}>
                    <MaterialCommunityIcons name="ray-start-arrow" color="#219653" size={26}/>
                </View> 

                <TextInput 
                    style={customStyles.input}
                    value={size_44}
                    maxLength={4}
                    keyboardType="numeric"
                    onChangeText={setSize44}
                />
            </View>

            <View style={customStyles.row}>
                <Text style={customStyles.title}>
                    45
                </Text>

                <View style={{marginTop: 10}}>
                    <MaterialCommunityIcons name="ray-start-arrow" color="#219653" size={26}/>
                </View> 

                <TextInput 
                    style={customStyles.input}
                    value={size_45}
                    maxLength={4}
                    keyboardType="numeric"
                    onChangeText={setSize45}
                />
            </View>

            <View style={customStyles.row}>
                <Text style={customStyles.title}>
                    46
                </Text>

                <View style={{marginTop: 10}}>
                    <MaterialCommunityIcons name="ray-start-arrow" color="#219653" size={26}/>
                </View> 

                <TextInput 
                    style={customStyles.input}
                    value={size_46}
                    maxLength={4}
                    keyboardType="numeric"
                    onChangeText={setSize46}
                />
            </View>

            <View style={customStyles.row}>
                <Text style={customStyles.title}>
                    47
                </Text>

                <View style={{marginTop: 10}}>
                    <MaterialCommunityIcons name="ray-start-arrow" color="#219653" size={26}/>
                </View> 

                <TextInput 
                    style={customStyles.input}
                    value={size_47}
                    maxLength={4}
                    keyboardType="numeric"
                    onChangeText={setSize47}
                />
            </View>

            <View style={customStyles.row}>
                <Text style={customStyles.title}>
                    48
                </Text>

                <View style={{marginTop: 10}}>
                    <MaterialCommunityIcons name="ray-start-arrow" color="#219653" size={26}/>
                </View> 

                <TextInput 
                    style={customStyles.input}
                    value={size_48}
                    maxLength={4}
                    keyboardType="numeric"
                    onChangeText={setSize48}
                />
            </View>

            <View style={{ marginBottom: 50 }}>
                <RectButton style={styles.textIconButton} onPress={handleSave}>
                    <MaterialCommunityIcons name="content-save" color="#FFF" size={26}/>
                    <Text style={styles.titleTextIconButton}>
                        Salvar
                    </Text>
                </RectButton>
            </View>
        </ScrollView>        
    );
}

const customStyles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center', 
        alignItems: 'center'
    },

    input: {
        marginTop: 10,
        height: 50,
        width: 110,
        backgroundColor: '#E0E0E0',
        borderRadius: 10,
        paddingHorizontal: 10, 
        fontFamily: 'Quicksand_700Bold',
        fontSize: 36,
        color: '#828282',
        marginLeft: 10
        
    },
    
    title: { 
        marginTop: 5,
        backgroundColor: 'transparent',
        color: '#4F4F4F',
        fontFamily: 'Quicksand_700Bold',
        fontSize: 36,
        marginRight: 10
    }
})