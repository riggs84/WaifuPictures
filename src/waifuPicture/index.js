import React, {useState} from 'react';
import {Image, StyleSheet} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import ManageWallpaper, {TYPE} from 'react-native-manage-wallpaper';

const WaifuPicture = ({route}) => {
  const [type, setType] = useState(TYPE.BOTH);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const {uri} = route.params;

  const setWallpaper = () => {
    ManageWallpaper.setWallpaper({uri}, () => {}, type);
  };

  return (
    <Pressable
      style={styles.backgroundImage}
      onLongPress={setIsModalVisible(true)}>
      <Image source={{uri}} style={styles.backgroundImage} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
});

export default WaifuPicture;
