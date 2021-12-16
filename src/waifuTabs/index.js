import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import WaifuListWrapper from '../waifuListWrapper';
import {bully, cuddle, megumin, neko, shinobu, waifu} from '../constants';

const Tabs = createMaterialTopTabNavigator();

const WaifuTabs = () => {
  return (
      <Tabs.Navigator
        screenOptions={{
          tabBarAllowFontScaling: true,
          tabBarScrollEnabled: true,
        }}>
        <Tabs.Screen
          name={'Waifu'}
          children={() => <WaifuListWrapper category={waifu} />}
        />
        <Tabs.Screen
          name={'Neko'}
          children={() => <WaifuListWrapper category={neko} />}
        />
        <Tabs.Screen
          name={'Shinobu'}
          children={() => <WaifuListWrapper category={shinobu} />}
        />
        <Tabs.Screen
          name={'Megumin'}
          children={() => <WaifuListWrapper category={megumin} />}
        />
        <Tabs.Screen
          name={'Bully'}
          children={() => <WaifuListWrapper category={bully} />}
        />
        <Tabs.Screen
          name={'Cuddle'}
          children={() => <WaifuListWrapper category={cuddle} />}
        />
      </Tabs.Navigator>
  );
};

export default WaifuTabs;
