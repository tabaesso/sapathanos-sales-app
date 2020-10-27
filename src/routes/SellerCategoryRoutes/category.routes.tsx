import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../../components/Header';
import ListCategoriesByDepartment from '../../pages/Category/ListCategoriesByDepartment';
import ListiAllDepartment from '../../pages/Category/ListAllDepartments';

const { Navigator, Screen } = createStackNavigator();

export default function CategoryRoutes() {
  return (
    <Navigator
      initialRouteName="ListiAllDepartment"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#f2f3f5' },
      }}
    >
      <Screen name="ListiAllDepartment" component={ListiAllDepartment} />
      <Screen
        name="ListCategoriesByDepartment"
        component={ListCategoriesByDepartment}
        options={{
          headerShown: true,
          header: () => <Header title="Categorias" />,
        }}
      />
    </Navigator>
  );
}
