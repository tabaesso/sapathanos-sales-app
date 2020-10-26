import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../../components/Header';
import ListAllShoes from '../../pages/Seller/ListAllShoes';
import RegisterNewShoe from '../../pages/Seller/RegisterNewShoe';
import UpdateQuantity from '../../pages/Seller/UpdateQuantity';

const { Navigator, Screen } = createStackNavigator();

export default function CreateShoeRoutes() {
  return (
    <Navigator
      initialRouteName="ListAllShoes"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#f2f3f5' },
      }}
    >
      <Screen name="ListAllShoes" component={ListAllShoes} />
      <Screen
        name="RegisterNewShoe"
        component={RegisterNewShoe}
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
