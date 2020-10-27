import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, StyleSheet } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface HeaderProps {
    title: string;
}

export default function Header({ title }: HeaderProps) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <BorderlessButton onPress={navigation.goBack}>
                <MaterialCommunityIcons name="chevron-left" color="#4F4F4F" size={26}/>
            </BorderlessButton>

            <Text style={styles.title}>{title}</Text>

            <View />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor: '#dde3f0',
        paddingTop: 44,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    title: {
        color: '#9B51E0',
        fontSize: 16,
        fontFamily: 'Quicksand_600SemiBold'
    }
})
