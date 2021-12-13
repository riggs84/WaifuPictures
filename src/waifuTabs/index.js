import React from 'react';
import WaifuList from '../waifuList';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tabs = createMaterialTopTabNavigator();

const WaifuTabs = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name={'Waifu'}
        component={() => <WaifuList category={'waifu'} />}
      />
      <Tabs.Screen
        name={'Neko'}
        component={() => <WaifuList category={'neko'} />}
      />
      <Tabs.Screen
        name={'Shinobu'}
        component={() => <WaifuList category={'shinobu'} />}
      />
      <Tabs.Screen
        name={'Megumin'}
        component={() => <WaifuList category={'megumin'} />}
      />
      <Tabs.Screen
        name={'Bully'}
        component={() => <WaifuList category={'bully'} />}
      />
      <Tabs.Screen
        name={'Cuddle'}
        component={() => <WaifuList category={'cuddle'} />}
      />
    </Tabs.Navigator>
  );
};

export default WaifuTabs;
