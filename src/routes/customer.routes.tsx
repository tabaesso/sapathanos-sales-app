import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Account from './AccountRoutes/account.routes';
import Cart from '../pages/Cart';
import Categories from '../pages/Categories';
import Shoes from '../pages/Shoes';

const Tab = createMaterialBottomTabNavigator();

export default function CustomerRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Shoes"
      activeColor="#9B51E0"
      inactiveColor="#828282"
      barStyle={{
        backgroundColor: '#fff',
      }}
    >
      <Tab.Screen
        name="Shoes"
        component={Shoes}
        options={{
          tabBarLabel: 'Sapatos',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="shoe-formal"
              color={color}
              size={26}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarLabel: 'Categorias',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="format-list-bulleted"
              color={color}
              size={26}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: 'Carrinho',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="cart-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: 'Conta',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-circle"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
