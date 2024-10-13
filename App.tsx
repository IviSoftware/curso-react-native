import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {SideMenuNavigation} from './src/presentation/routes/SideMenuNavigation';
import {enableScreens} from 'react-native-screens';

enableScreens();

export const App = () => {
  return (
    <NavigationContainer>
      <SideMenuNavigation />
    </NavigationContainer>
  );
};
