import React, {useLayoutEffect} from 'react';
import {StyleSheet} from 'react-native';
import HeaderMenu from './headerMenu';
import FastImage from 'react-native-fast-image';

const WaifuPicture = ({route, navigation}) => {
  const {uri} = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderMenu uri={uri} navigation={navigation} />,
    });
  }, [navigation, uri]);

  return (
    <FastImage
      source={{uri}}
      style={styles.backgroundImage}
      resizeMode={FastImage.resizeMode.contain}
    />
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
});

export default WaifuPicture;
