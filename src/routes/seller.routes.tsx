import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import CreateShoeRoutes from './CreateShoeRoutes/createshoe.routes';
import ListActiveShoes from '../pages/Seller/ListActiveShoes';
import Account from './AccountRoutes/account.routes';
import CategoryRoutes from './SellerCategoryRoutes/category.routes';
import EditQuantityRoutes from './EditQuantityRoutes/editquantity.routes';

const Tab = createMaterialBottomTabNavigator();

export default function SellerRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="EditQuantityRoutes"
      activeColor="#9B51E0"
      inactiveColor="#828282"
      barStyle={{
        backgroundColor: '#fff',
      }}
    >
      <Tab.Screen
        name="EditQuantityRoutes"
        component={EditQuantityRoutes}
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
              name="playlist-plus"
              color={color}
              size={26}
            />
          ),
        }}
      />

      <Tab.Screen
        name="CreateShoeRoutes"
        component={CreateShoeRoutes}
        options={{
          tabBarLabel: 'Produto',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cart-plus" color={color} size={26} />
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
