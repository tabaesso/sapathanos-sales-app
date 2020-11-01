import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Account from './AccountRoutes/account.routes';
import CategoryRoutes from './CustomerCategoryRoutes/category.routes';
import ProductDetailRoutes from '../routes/ProductDetailRoutes/productdetail.routes'
import CartRotues from './CartRoutes/cart.routes';

const Tab = createMaterialBottomTabNavigator();

export default function CustomerRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="ProductDetailRoutes"
      activeColor="#9B51E0"
      inactiveColor="#828282"
      barStyle={{
        backgroundColor: '#fff',
      }}
    >
      <Tab.Screen
        name="ProductDetailRoutes"
        component={ProductDetailRoutes}
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
        name="CategoryRoutes"
        component={CategoryRoutes}
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
        name="CartRotues"
        component={CartRotues}
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
