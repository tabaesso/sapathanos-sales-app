import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../../pages/SignIn';
import SignUp from '../../pages/SignUp';
import Account from '../../pages/Account';
import { useAuth } from '../../hooks/auth';

const { Navigator, Screen } = createStackNavigator();

export default function AccountRoutes() {
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
      {(customer && Object.keys(customer).length !== 0) ||
      (seller && Object.keys(seller).length !== 0) ? (
        <Screen name="Account" component={Account} />
      ) : (
        <>
          <Screen name="SignIn" component={SignIn} options={{ headerShown: false }}/>
          <Screen name="SignUp" component={SignUp} />
        </>
      )}
    </Navigator>
  );
}
