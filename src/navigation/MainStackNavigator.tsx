import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import {HomeScreen, WebViewScreen} from 'screens';
import {colors} from 'themes';
import {images} from 'assets';

export type MainStackParamList = {
  Home: undefined;
  WebView: {url: string};
};

const MainStack = createStackNavigator<MainStackParamList>();

export default function MainStackNavigator() {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.darkBlue,
        },
        headerTintColor: colors.white,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <MainStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: () => <Image style={styles.logo} source={images.logo} />,
        }}
      />
      <MainStack.Screen
        name="WebView"
        component={WebViewScreen}
        options={{headerTitle: ''}}
      />
    </MainStack.Navigator>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 120,
    height: 60,
  },
});
