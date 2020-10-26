import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import CustomerRoutes from './routes/customer.routes';
import SellerRoutes from './routes/seller.routes';
import ProductDetails from './pages/ProductDetail/ProductDetail';

import Header from './components/Header';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
    return (
        <Navigator
            initialRouteName="SellerRoutes"
            screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: '#f2f3f5' }
            }}
        >
            <Screen name="CustomerRoutes" component={CustomerRoutes} />
            <Screen name="SellerRoutes" component={SellerRoutes} />

            <Screen 
                name="ProductDetails" 
                component={ProductDetails} 
                options={{
                    headerShown: true,
                    header: () => <Header title="Detalhes do produto" />
                }}
            />

        </Navigator>
    );
}