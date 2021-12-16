import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WaifuPicture from './src/waifuPicture';
import TabListNavigation from './src/TabListNavigation';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'TabList'}>
        <Stack.Screen
          name={'WaifuPicture'}
          component={WaifuPicture}
          options={{title: ''}}
        />
        <Stack.Screen
          name={'TabList'}
          component={TabListNavigation}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
