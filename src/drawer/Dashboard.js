import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Drawer1 from './Drawer1';
import Drawer2 from './Drawer2';
import CustomDrawer from './CustomDrawer';
const Drawer = createDrawerNavigator();
const Dashboard = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Drawer1" component={Drawer1} />
      {/* <Drawer.Screen name="Drawer2" component={Drawer2} /> */}
    </Drawer.Navigator>
  );
};

export default Dashboard;
