import React, {useEffect, useState} from 'react';
import OptionsMenu from 'react-native-option-menu';
import ManageWallpaper, {TYPE} from 'react-native-manage-wallpaper';
import Icon from 'react-native-vector-icons/FontAwesome';

const HeaderMenu = ({uri, navigation}) => {
  const [isDone, setIsDone] = useState(false);
  const setNewWallpaper = type => () => {
    ManageWallpaper.setWallpaper(
      {uri},
      () => {
        setIsDone(true);
      },
      type,
    );
  };

  useEffect(() => {
    if (isDone) {
      navigation.setOptions({
        headerTitle: 'Wallpaper updated!',
        headerRight: () => null,
      });
    }
  }, [isDone, navigation]);

  return (
    <OptionsMenu
      customButton={
        <Icon name={'ellipsis-v'} size={30} style={{marginRight: 10}} />
      }
      destructiveIndex={1}
      options={['Save as Home', 'Save as Lock', 'Save as Home and Lock']}
      actions={[
        setNewWallpaper(TYPE.HOME),
        setNewWallpaper(TYPE.LOCK),
        setNewWallpaper(TYPE.BOTH),
      ]}
    />
  );
};

export default HeaderMenu;
