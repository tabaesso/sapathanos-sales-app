import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../../components/Header';
import ListCategoriesByDepartmentCustomer from '../../pages/CategoryCustomer/ListCategoriesByDepartmentCustomer';
import ListiAllDepartmentCustomer from '../../pages/CategoryCustomer/ListAllDepartmentsCustomer';
import ShoesByCategory from '../../pages/CategoryCustomer/ShoesByCategory';

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
      <Screen name="ListiAllDepartmentCustomer" component={ListiAllDepartmentCustomer} />
      <Screen name="ShoesByCategory" component={ShoesByCategory} />
      <Screen
        name="ListCategoriesByDepartmentCustomer"
        component={ListCategoriesByDepartmentCustomer}
        options={{
          headerShown: true,
          header: () => <Header title="Categorias" />,
        }}
      />
    </Navigator>
  );
}
