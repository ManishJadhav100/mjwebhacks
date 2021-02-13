import React from 'react';
import {WebView} from 'react-native-webview';
import {StackScreenProps} from '@react-navigation/stack';

import {MainStackParamList} from 'navigation/MainStackNavigator';

type Props = StackScreenProps<MainStackParamList, 'WebView'>;

export default function Webview({route}: Props) {
  return <WebView source={{uri: route.params.url}} />;
}
