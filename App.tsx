import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import 'react-native-get-random-values';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useFonts } from 'expo-font';
import {
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_700Bold,
  Quicksand_600SemiBold,
} from '@expo-google-fonts/quicksand';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/hooks/auth';

import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
