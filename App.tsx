import React from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'

import theme from './src/global/style/theme';
import { Home } from './src/screens/Home';
import Routes from './src/routes/app.routes';

export default function App() {
  
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
      <Routes/>
    </ThemeProvider>
    </NavigationContainer>
    

  )

}
