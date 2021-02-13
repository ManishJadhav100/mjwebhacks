import React from 'react';
import {StatusBar, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import {MainStackParamList} from 'navigation/MainStackNavigator';
import {colors, styles} from 'themes';
import Card from 'components/Card';
import {images} from 'assets';

type HomeScreenNavigationProp = StackNavigationProp<MainStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export default function Home({navigation}: Props) {
  return (
    <View style={styles.flexCenter}>
      <StatusBar barStyle="light-content" backgroundColor={colors.darkBlue} />
      <Card
        category={'Live Matches'}
        detailedcategory={'Live Sports Events'}
        backgroundimg={images.livematch}
        icon={images.liveicon}
        url="https://mjwebhacks.com"
        navigation={navigation}
      />
      <Card
        category={'Channels'}
        detailedcategory={'Live TV Channels'}
        backgroundimg={images.channelimg}
        icon={images.channelicon}
        url="http://mjwebhackslive.herokuapp.com/channels"
        navigation={navigation}
      />
      <Card
        category={'Latest Movies and Webseries'}
        detailedcategory={'Movies and Webseries | Live now'}
        backgroundimg={images.latestmoviesimg}
        icon={images.latestmoviesicon}
        url="http://mjwebhackslive.herokuapp.com/movies"
        navigation={navigation}
      />
    </View>
  );
}
