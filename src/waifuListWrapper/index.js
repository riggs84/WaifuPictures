import React from 'react';
import {Provider} from 'react-redux';
import {store} from '../redux/store';
import WaifuList from '../waifuList';

const WaifuListWrapper = ({navigation, category}) => {
  return (
    <Provider store={store}>
      <WaifuList navigation={navigation} category={category} />
    </Provider>
  );
};

export default WaifuListWrapper;
