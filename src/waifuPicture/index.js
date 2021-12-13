import React from 'react';
import {Image, StyleSheet} from 'react-native';

const WaifuPicture = ({route}) => {
  const {uri} = route.params;

  return <Image source={{uri}} style={styles.backgroundImage} />;
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
});

export default WaifuPicture;
