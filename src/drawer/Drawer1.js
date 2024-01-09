import {View, Text, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tab3 from '../bottom/Tab3';
import Tab2 from '../bottom/Tab2';
import Tab1 from '../bottom/Tab1';

const Bottom = createBottomTabNavigator();
const Drawer1 = () => {
  return (
    <Bottom.Navigator screenOptions={{tabBarStyle: {height: 90}}}>
      <Bottom.Screen
        name="Tab1"
        component={Tab1}
        options={{
          headerShown: false,
          title: 'Home',

          tabBarIcon: ({size, color, focused}) => {
            return (
              <Image
                source={require('../../home.png')}
                style={{
                  width: size,
                  height: size,
                  tintColor: focused ? 'orange' : 'gray',
                }}
              />
            );
          },
          tabBarLabel: ({size, color, focused}) => {
            return (
              <Text
                style={{
                  fontSize: 16,
                  color: focused ? 'orange' : 'gray',
                  fontWeight: focused ? '800' : '500',
                }}>
                Home
              </Text>
            );
          },
        }}
      />
      <Bottom.Screen
        name="Tab2"
        component={Tab2}
        options={{
          headerShown: false,
          title: 'Add',
          tabBarIcon: ({size, color, focused}) => {
            return (
              <Image
                source={require('../../addition.png')}
                style={{
                  width: size,
                  height: size,
                  tintColor: focused ? 'orange' : 'gray',
                }}
              />
            );
          },
          tabBarLabel: ({size, color, focused}) => {
            return (
              <Text
                style={{
                  fontSize: 16,
                  color: focused ? 'orange' : 'gray',
                  fontWeight: focused ? '800' : '500',
                }}>
                Add
              </Text>
            );
          },
        }}
      />
      <Bottom.Screen
        name="Tab3"
        component={Tab3}
        options={{
          headerShown: false,
          title: 'User',
          tabBarIcon: ({size, color, focused}) => {
            return (
              <Image
                source={require('../../user1.png')}
                style={{
                  width: size,
                  height: size,
                  tintColor: focused ? 'orange' : 'gray',
                }}
              />
            );
          },
          tabBarLabel: ({size, color, focused}) => {
            return (
              <Text
                style={{
                  fontSize: 16,
                  color: focused ? 'orange' : 'gray',
                  fontWeight: focused ? '800' : '500',
                }}>
                Account
              </Text>
            );
          },
        }}
      />
    </Bottom.Navigator>
  );
};

export default Drawer1;
