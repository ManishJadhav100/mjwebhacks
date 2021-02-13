import React from 'react';
import {Button, StatusBar, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import {MainStackParamList} from 'navigation/MainStackNavigator';
import {colors, styles} from 'themes';

type HomeScreenNavigationProp = StackNavigationProp<MainStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export default function Home({navigation}: Props) {
  return (
    <View style={styles.flexCenter}>
      <StatusBar barStyle="light-content" backgroundColor={colors.darkBlue} />
      <Button
        onPress={() =>
          navigation.navigate('WebView', {
            url: 'http://mjwebhackslive.herokuapp.com/football',
          })
        }
        title="Live Matches"
      />
      <Button
        onPress={() =>
          navigation.navigate('WebView', {
            url: 'http://mjwebhackslive.herokuapp.com/channels',
          })
        }
        title="Channels"
      />
      <Button
        onPress={() =>
          navigation.navigate('WebView', {
            url: 'http://mjwebhackslive.herokuapp.com/movies',
          })
        }
        title="Latest Movies and Web Series"
      />
    </View>
  );
}
