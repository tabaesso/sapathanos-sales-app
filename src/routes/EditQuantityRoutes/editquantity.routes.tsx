import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../../components/Header';
import ListActiveShoes from '../../pages/Seller/ListActiveShoes'
import UpdateQuantity from '../../pages/Seller/UpdateQuantity';

const { Navigator, Screen } = createStackNavigator();

export default function EditQuantityRoutes() {
  return (
    <Navigator
      initialRouteName="ListAllShoes"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#f2f3f5' },
      }}
    >
      <Screen name="ListAllShoes" component={ListActiveShoes} />
      <Screen
        name="RegisterNewShoe"
        component={ListActiveShoes}
        options={{
          headerShown: true,
          header: () => <Header title="Adicionar novo sapato" />,
        }}
      />
      <Screen
        name="UpdateQuantity"
        component={UpdateQuantity}
        options={{
          headerShown: true,
          header: () => <Header title="Adicionar quantidade de pares" />,
        }}
      />
    </Navigator>
  );
}
