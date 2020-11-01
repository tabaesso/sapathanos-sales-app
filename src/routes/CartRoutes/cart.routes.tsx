import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../../components/Header';
import Cart from '../../pages/Cart';
import Checkout from '../../pages/Customer/Checkout'
import OrderDetails from '../../pages/Customer/OrderDetails';
import AccountRoutes from '../AccountRoutes/account.routes';

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
      <Screen
        name="OrderDetails"
        component={OrderDetails}
        options={{
          headerShown: true,
          header: () => <Header title="Detalhes do pedido" />,
        }}
      />
      <Screen
        name="AccountRoutes"
        component={AccountRoutes}
        options={{
          headerShown: false
        }}
      />
    </Navigator>
  );
}
