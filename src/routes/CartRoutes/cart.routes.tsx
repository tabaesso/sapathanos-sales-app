import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../../components/Header';
import Cart from '../../pages/Cart';
import Checkout from '../../pages/Customer/Checkout'

const { Navigator, Screen } = createStackNavigator();

export default function CartRoutes() {
  return (
    <Navigator
      initialRouteName="Cart"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#f2f3f5' },
      }}
    >
      <Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: true,
          header: () => <Header title="Meu carrinho" />,
        }}
      />
      <Screen
        name="Checkout"
        component={Checkout}
        options={{
          headerShown: true,
          header: () => <Header title="Finalizar pedido" />,
        }}
      />
      {/* <Screen
        name="UpdateQuantity"
        component={UpdateQuantity}
        options={{
          headerShown: true,
          header: () => <Header title="Adicionar quantidade de pares" />,
        }}
      /> */}
    </Navigator>
  );
}
