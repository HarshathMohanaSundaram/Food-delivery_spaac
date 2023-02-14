import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default function BottomTabs() {
  return (
    <View style={{flexDirection:"row",justifyContent:"space-between", margin:10, marginHorizontal:30, }}>
      <Icons icon="home" text="Home" />
      <Icons icon="search" text="Browse" />
      <Icons icon="shopping-bag" text="Grocery" />
      <Icons icon="receipt" text="Orders" />
      <Icons icon="user" text="Account" />
    </View>
  )
}

const Icons = (props) =>(
  <TouchableOpacity>
    <View>
      <FontAwesome5 name={props.icon} size={25} style={{marginBottom: 5, alignSelf:"center"}} />
      <Text>{props.text}</Text>
    </View>
  </TouchableOpacity>
)