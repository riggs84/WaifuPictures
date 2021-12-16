import React from 'react';
import OptionsMenu from 'react-native-option-menu';
import ManageWallpaper, {TYPE} from 'react-native-manage-wallpaper';
import Icon from 'react-native-vector-icons/FontAwesome';

const HeaderMenu = ({uri}) => {
  const setWallpaper = type => {
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
        setWallpaper(TYPE.HOME),
        setWallpaper(TYPE.LOCK),
        setWallpaper(TYPE.BOTH),
      ]}
    />
  );
};

export default HeaderMenu;
