import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainStackNavigator } from 'navigation';

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
}
