import React from 'react';
import { FlatList, StatusBar, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { MainStackParamList } from 'navigation/MainStackNavigator';
import { colors, styles } from 'themes';
import Card from 'components/Card';
import { images } from 'assets';

type HomeScreenNavigationProp = StackNavigationProp<MainStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

type itemProps = {
  category: string,
  detailedcategory: string,
  backgroundimg: string,
  icon: string,
  url: string,
  navigation?: any
}

const data = [
  {
    category: 'Live Matches',
    detailedcategory: 'Live Sports Events',
    backgroundimg: images.livematch,
    icon: images.liveicon,
    url: 'https://mjwebhackslive.herokuapp.com/football'
  },
  {
    category: 'Channels',
    detailedcategory: 'Live TV Channels',
    backgroundimg: images.channelimg,
    icon: images.channelicon,
    url: 'https://mjwebhackslive.herokuapp.com/channels'
  },
  {
    category: 'Latest Movies and Web Series',
    detailedcategory: 'Movies and Webseries | Live now',
    backgroundimg: images.latestmoviesimg,
    icon: images.latestmoviesicon,
    url: 'https://mjwebhackslive.herokuapp.com/movies'
  },
  {
    category: 'Courses',
    detailedcategory: 'Online Digital Courses',
    backgroundimg: images.courses,
    icon: images.channelicon,
    url: 'https://mjwebhacks.com/courses'
  },
]

export default function Home({ navigation }: Props) {

  function keyExtractor(item: itemProps) {
    return item.category
  }

  function renderItem({ item }: { item: itemProps }) {
    return (
      <Card
        category={item.category}
        detailedcategory={item.detailedcategory}
        backgroundimg={item.backgroundimg}
        icon={item.icon}
        url={item.url}
        navigation={navigation}
      />
    )
  }

  return (
    <View style={styles.flexCenter}>
      <StatusBar barStyle="light-content" backgroundColor={colors.darkBlue} />
      <FlatList
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  );
}
