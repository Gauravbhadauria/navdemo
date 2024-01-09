import {View, Text, Image} from 'react-native';
import React from 'react';

const CustomDrawer = () => {
  return (
    <View style={{flex: 1}}>
      <Image
        source={require('../../user.png')}
        style={{width: 100, height: 100, marginTop: 100, alignSelf: 'center'}}
      />
      <Text
        style={{
          color: 'black',
          fontSize: 20,
          alignSelf: 'center',
          marginTop: 10,
          fontWeight: '600',
        }}>
        Gaurav
      </Text>
      <Text
        style={{
          color: 'black',
          fontSize: 20,
          alignSelf: 'center',
          marginTop: 5,
          fontWeight: '600',
        }}>
        Gaurav@gmail.com
      </Text>
      
    </View>
  );
};

export default CustomDrawer;
