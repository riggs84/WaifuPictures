import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import WaifuTabs from './src/waifuTabs';
import About from './src/about';

const Tabs = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'maroon',
          tabBarShowLabel: false,
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
        }}
        initialRouteName="Home">
        <Tabs.Screen
          name={'Home'}
          component={WaifuTabs}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name={'home'} size={30} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name={'About'}
          component={About}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name={'info'} size={30} color={color} />
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default App;
