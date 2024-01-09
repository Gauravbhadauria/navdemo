import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Home1 = () => {
const navigation=useNavigation()
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{padding:10,borderWidth:1}} onPress={()=>{
        navigation.navigate("Home2")
      }}>Go to Home 2 Screen</Text>
    </View>
  )
}

export default Home1