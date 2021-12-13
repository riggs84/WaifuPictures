import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import WaifuTabs from './src/waifuTabs';

const Tabs = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={{
          tabBarShowLabel: true,
          tabBarStyle: [
            {
              backgroundColor: 'white',
              borderColor: 'grey',
              position: 'absolute',
              bottom: 15,
              marginHorizontal: 20,
              height: 60,
              borderRadius: 15,
              shadowColor: '#000',
              shadowOpacity: 0.06,
              shadowOffset: {
                width: 10,
                height: 10,
              },
            },
          ],
        }}>
        <Tabs.Screen name={'Home'} component={WaifuTabs} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default App;
