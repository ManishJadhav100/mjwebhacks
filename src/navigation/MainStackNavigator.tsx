import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen, WebViewScreen } from 'screens';

export type MainStackParamList = {
  Home: undefined;
  WebView: undefined;
};

const MainStack = createStackNavigator<MainStackParamList>();

export default function MainStackNavigator() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={HomeScreen} />
      <MainStack.Screen name="WebView" component={WebViewScreen} />
    </MainStack.Navigator>
  );
}
