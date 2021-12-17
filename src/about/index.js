import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const About = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.text}>
          You can view, discover and set liked pictures as wallpaper by using
          this application.
        </Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>
          Please, be aware, that application uses open-source API for pictures.
          I do not responsible for it's content.
        </Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Developed by: Viktor Iurkov</Text>
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
  text: {
    margin: 5,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 100,
    borderRadius: 15,
    backgroundColor: 'white',
    borderColor: 'grey',
    elevation: 10,
    margin: 10,
  },
});

export default About;
