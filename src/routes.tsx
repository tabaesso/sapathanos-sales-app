/* eslint-disable no-nested-ternary */
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import { useAuth } from './hooks/auth';

import CustomerRoutes from './routes/customer.routes';
import SellerRoutes from './routes/seller.routes';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  const { customer, seller, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#999" />
      </View>
    );
  }

  return (
    <Navigator>
      {customer && Object.keys(customer).length !== 0 ? (
        <Screen name="CustomerRoutes" component={CustomerRoutes} />
      ) : seller && Object.keys(seller).length !== 0 ? (
        <Screen name="SellerRoutes" component={SellerRoutes} />
      ) : (
        <Screen name="CustomerRoutes" component={CustomerRoutes} />
      )}
    </Navigator>
  );
}
