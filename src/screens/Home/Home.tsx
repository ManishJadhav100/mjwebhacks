import React from 'react';
import {Button, View, Text} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import {MainStackParamList} from 'navigation/MainStackNavigator';
import {styles} from 'themes';

type HomeScreenNavigationProp = StackNavigationProp<MainStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export default function Home({navigation}: Props) {
  return (
    <View style={styles.flexCenter}>
      <Text>Home Screen</Text>
      <Button
        onPress={() => navigation.navigate('WebView')}
        title="Open WebView"
      />
    </View>
  );
}
