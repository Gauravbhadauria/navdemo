import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home1 from './home/Home1';
import Home2 from './home/Home2';

const Stack = createStackNavigator();
const Tab1 = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home1"
        component={Home1}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="Home2"
        component={Home2}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Tab1;
