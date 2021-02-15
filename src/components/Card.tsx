import React from 'react';
import { Image, Pressable, Text, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from 'themes';
import { hp, wp } from '../components/Common.functions';

type Props = {
  category: string;
  detailedcategory: string;
  backgroundimg: any;
  icon: any;
  url: string;
  navigation: any;
};

const Card = (props: Props) => {

  function openWebView() {
    props.navigation.navigate('WebView', { url: props.url });
  }

  return (
    <Pressable onPress={openWebView}>
      <View style={styles.mainview}>
        <Image style={styles.imagebig} source={props.backgroundimg} resizeMode='stretch' />
        <View style={styles.subview}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={['#6610f2', '#6f42c1', '#2b2d5c']}
            style={{ height: hp(8) }}>
            <Text style={styles.category}> {props.category} </Text>
            <Text style={styles.detailedcategory}>
              {' '}
              {props.detailedcategory}{' '}
            </Text>
            <View style={styles.subviewsecond}>
              <Image style={styles.icon} source={props.icon} />
            </View>
          </LinearGradient>
        </View>
      </View>
    </Pressable>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    marginTop: hp(3),
  },
  mainview: {
    width: wp(80),
    backgroundColor: 'white',
    height: hp(26),
    alignSelf: 'center',
    marginTop: hp(2),
    borderRadius: 16,
    overflow: 'hidden'
  },
  imagebig: {
    width: wp(80),
    height: hp(18),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    opacity: 0.6,
    backgroundColor: 'darkblue',
  },
  subview: {
    backgroundColor: 'lightblue',
    width: wp(80),
    height: hp(8),
    position: 'absolute',
    bottom: 0,
  },
  subviewsecond: {
    backgroundColor: colors.darkBlue,
    height: hp(7),
    width: wp(13),
    borderRadius: 60,
    right: 0,
    position: 'absolute',
    marginRight: wp(5),
    marginTop: hp(-3),
    justifyContent: 'center',
  },
  icon: {
    width: wp(8),
    height: hp(3),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  category: {
    marginLeft: wp(5),
    marginTop: hp(1),
    color: 'white',
    fontWeight: 'bold',
  },
  detailedcategory: {
    marginLeft: wp(5),
    color: 'white',
  },
});
