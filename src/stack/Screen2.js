import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Screen2 = () => {
    const navigation=useNavigation()
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <Text style={{padding:10,borderWidth:1}}
    onPress={()=>{
      navigation.navigate("Dashboard")
    }}>Got to Dashboard</Text>
  </View>
  )
}

export default Screen2