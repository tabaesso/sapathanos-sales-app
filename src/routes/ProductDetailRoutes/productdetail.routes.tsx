import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../../components/Header';
import ProductDetails from '../../pages/ProductDetail/ProductDetail';
import Shoes from '../../pages/Shoes';
import Cart from '../../pages/Cart';

const { Navigator, Screen } = createStackNavigator();

export default function ProductDetailRoutes(){
    return (
        <Navigator
            initialRouteName="Shoes"
            screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: '#f2f3f5' },
            }}
        >
            <Screen name="Shoes" component={Shoes} />
            <Screen
                name="ProductDetails"
                component={ProductDetails}
                options={{
                    headerShown: true,
                    header: () => <Header title="Detalhes do produto" />,
                }}
            />

            <Screen
                name="Cart"
                component={Cart}
                options={{
                    headerShown: true,
                    header: () => <Header title="Meu carrinho" />,
                }}
            />
        </Navigator>
    );
}
