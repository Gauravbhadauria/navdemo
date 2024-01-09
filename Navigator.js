import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Screen1 from './src/stack/Screen1'
import Screen2 from './src/stack/Screen2'
import Dashboard from './src/drawer/Dashboard'

const Stack=createStackNavigator()
const Navigator = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Screen1' component={Screen1} />
      <Stack.Screen  name='Screen2' component={Screen2}/>
      <Stack.Screen  name='Dashboard' component={Dashboard} options={{headerShown:false}}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Navigator