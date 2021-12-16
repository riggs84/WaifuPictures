import React from 'react';
import {Provider} from 'react-redux';
import {store} from '../redux/store';
import WaifuList from '../waifuList';

const WaifuListWrapper = ({category}) => {
  return (
    <Provider store={store}>
      <WaifuList category={category} />
    </Provider>
  );
};

export default WaifuListWrapper;
