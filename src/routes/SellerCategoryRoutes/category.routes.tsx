import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../../components/Header';
import ListAllCategories from '../../pages/Category/ListAllCategories';
import RegisterNewCategory from '../../pages/Category/RegisterNewCategory';

const { Navigator, Screen } = createStackNavigator();

export default function CategoryRoutes() {
  return (
    <Navigator
      initialRouteName="ListAllCategories"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#f2f3f5' },
      }}
    >
      <Screen name="ListAllCategories" component={ListAllCategories} />
      <Screen
        name="RegisterNewCategory"
        component={RegisterNewCategory}
        options={{
          headerShown: true,
          header: () => <Header title="Adicionar nova categoria" />,
        }}
      />
    </Navigator>
  );
}
