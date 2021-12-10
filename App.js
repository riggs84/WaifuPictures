import React from 'react';

import WaifuList from './src/waifuList';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import WaifuPicture from './src/waifuPicture';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Home'}>
        <Stack.Screen name={'Home'} component={WaifuList} />
        <Stack.Screen name={'Waifu'} component={WaifuPicture} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
