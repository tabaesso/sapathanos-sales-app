import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Cart() {


    async function handleAdd() {

    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Carrinho</Text>
            <Button title="add" onPress={handleAdd}/>
        </View>
    );
}
