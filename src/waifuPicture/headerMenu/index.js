import React from 'react';
import OptionsMenu from 'react-native-option-menu';
import ManageWallpaper, {TYPE} from 'react-native-manage-wallpaper';
import MoreIcon from '../../sources/moreIcon.png';

const HeaderMenu = ({router}) => {
  const setWallpaper = type => {
    ManageWallpaper.setWallpaper({uri: router.params.uri}, () => {}, type);
  };

  return (
    <OptionsMenu
      button={MoreIcon}
      buttonStyle={{width: 32, height: 20, margin: 7.5, resizeMode: 'contain'}}
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
