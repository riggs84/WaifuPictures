import React, {useLayoutEffect} from 'react';
import {Image, StyleSheet} from 'react-native';
import HeaderMenu from './headerMenu';

const WaifuPicture = ({route, navigation}) => {
  const {uri} = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderMenu uri={uri} navigation={navigation} />,
    });
  }, [navigation, uri]);

  return (
    <Image
      source={{uri}}
      style={styles.backgroundImage}
      resizeMode={'contain'}
    />
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
});

export default WaifuPicture;
