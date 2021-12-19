/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, ActivityIndicator} from 'react-native';
import axios from 'axios';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {useSelector, useDispatch} from 'react-redux';
import {setPicture} from '../redux/actions';
import {useNavigation} from '@react-navigation/native';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import {Image} from 'react-native-elements';

const WaifuList = ({category}) => {
  const [isLandscape, setIslandscape] = useState(false);
  const {height, width} = useWindowDimensions();
  const pictures = useSelector(state => state.reducer[category]);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    if (height < width) {
      setIslandscape(true);
    } else {
      setIslandscape(false);
    }
  }, [width]);

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

  const renderItem = ({item}) => {
    return (
      <Pressable
        onPress={() => navigation.navigate('WaifuPicture', {uri: item})}>
        <Image
          source={{uri: item}}
          style={{
            width: isLandscape ? width / 4 - 20 : width / 2 - 20,
            height: 200,
            borderRadius: 10,
            padding: 10,
            margin: 10,
          }}
          transition={true}
          PlaceholderContent={<ActivityIndicator />}
        />
      </Pressable>
    );
  };

  return (
    <FlatList
      key={isLandscape}
      data={pictures}
      renderItem={renderItem}
      horizontal={false}
      numColumns={isLandscape ? 4 : 2}
      onEndReached={fetchWaifu}
      onEndReachedThreshold={2}
      keyExtractor={index => index.toString()}
    />
  );
};

export default WaifuList;
