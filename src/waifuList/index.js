/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {FlatList, Image, StyleSheet} from 'react-native';
import axios from 'axios';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {useSelector, useDispatch} from 'react-redux';
import {setPicture} from '../redux/actions';
import {useNavigation} from '@react-navigation/native';

const WaifuList = ({category}) => {
  const pictures = useSelector(state => state.reducer[category]);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const fetchWaifu = async () => {
    try {
      const response = await axios.post(
        `https://api.waifu.pics/many/sfw/${category}`,
        {exclude: pictures},
      );

      dispatch(setPicture(response.data.files, category));
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (pictures.length <= 0) {
      fetchWaifu();
    }
  }, []);

  const renderItem = ({item, index}) => {
    return (
      <Pressable
        onPress={() => navigation.navigate('WaifuPicture', {uri: item})}>
        <Image
          source={{uri: item}}
          key={index}
          style={styles.img}
          blurRadius={2}
          fadeDuration={1000}
        />
      </Pressable>
    );
  };

  return (
    <FlatList
      data={pictures}
      renderItem={renderItem}
      horizontal={false}
      numColumns={2}
      onEndReached={fetchWaifu}
      onEndReachedThreshold={2}
      keyExtractor={index => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  img: {
    height: 200,
    width: 200,
    borderRadius: 10,
    margin: 10,
  },
});

export default WaifuList;
