import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const About = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text>Developed by: Viktor Iurkov</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 100,
    borderRadius: 15,
    backgroundColor: 'white',
    borderColor: 'grey',
  },
});

export default About;
