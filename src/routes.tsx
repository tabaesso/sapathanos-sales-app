import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import CustomerRoutes from './routes/customer.routes';
import SellerRoutes from './routes/seller.routes';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
    return (
        <Navigator
            initialRouteName="CustomerRoutes"
            screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: '#f2f3f5' }
            }}
        >
            <Screen name="CustomerRoutes" component={CustomerRoutes} />
            <Screen name="SellerRoutes" component={SellerRoutes} />
        </Navigator>
    );
}
