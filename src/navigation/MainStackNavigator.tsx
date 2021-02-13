import React, {useEffect} from 'react';
import {Image, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';

import {HomeScreen, WebViewScreen} from 'screens';
import {colors} from 'themes';
import {images} from 'assets';

export type MainStackParamList = {
  Home: undefined;
  WebView: {url: string};
};

const MainStack = createStackNavigator<MainStackParamList>();

export default function MainStackNavigator() {
  useEffect(() => {
    const timer = setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

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
