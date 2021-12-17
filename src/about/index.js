import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        This applications allows you to choose picture and set is as wallpaper
      </Text>
      <Text>
        This application uses open source resource for image loading which you
        can set as device wallpaper
      </Text>
      <Text>Developed by Viktor Iurkov</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default About;
