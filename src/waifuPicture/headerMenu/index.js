import React from 'react';
import OptionsMenu from 'react-native-option-menu';
import ManageWallpaper, {TYPE} from 'react-native-manage-wallpaper';
import Icon from 'react-native-vector-icons/FontAwesome';

const HeaderMenu = ({uri}) => {
  const setNewWallpaper = type => () => {
    ManageWallpaper.setWallpaper({uri}, () => {}, type);
  };

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
