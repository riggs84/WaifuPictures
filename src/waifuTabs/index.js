import React from 'react';
import WaifuList from '../waifuList';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {TabsContext} from './context';

const Tabs = createMaterialTopTabNavigator();

const WaifuTabs = () => {
  return (
    <TabsContext>
      <Tabs.Navigator
        screenOptions={{
          tabBarAllowFontScaling: true,
          tabBarScrollEnabled: true,
        }}>
        <Tabs.Screen
          name={'Waifu'}
          children={() => <WaifuList category={'waifu'} />}
        />
        <Tabs.Screen
          name={'Neko'}
          children={() => <WaifuList category={'neko'} />}
        />
        <Tabs.Screen
          name={'Shinobu'}
          children={() => <WaifuList category={'shinobu'} />}
        />
        <Tabs.Screen
          name={'Megumin'}
          children={() => <WaifuList category={'megumin'} />}
        />
        <Tabs.Screen
          name={'Bully'}
          children={() => <WaifuList category={'bully'} />}
        />
        <Tabs.Screen
          name={'Cuddle'}
          children={() => <WaifuList category={'cuddle'} />}
        />
      </Tabs.Navigator>
    </TabsContext>
  );
};

export default WaifuTabs;
