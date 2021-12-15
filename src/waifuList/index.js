/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Image, StyleSheet} from 'react-native';
import axios from 'axios';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {useTabsContext} from '../waifuTabs/context';

const WaifuList = ({navigation, category}) => {
  const {data, add} = useTabsContext();
  const [loading, setLoading] = useState(true);

  const fetchWaifu = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `https://api.waifu.pics/many/sfw/${category}`,
        {exclude: data[category]},
      );

      add(category, response.data.files);
      setLoading(false);
    } catch (e) {
      console.error(e);
      setLoading(true);
    }
  };

  useEffect(() => {
    if (!data[category]) {
      fetchWaifu();
    }
  }, []);

  const renderItem = ({item, index}) => {
    return (
      <Pressable onPress={() => navigation.navigate('Waifu', {uri: item})}>
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

  console.log('AZAZAZA', data);

  return loading ? (
    <ActivityIndicator size={'large'} />
  ) : (
    <FlatList
      data={data[category]}
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
