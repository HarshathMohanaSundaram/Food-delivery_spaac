import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from 'react'  
import { Divider } from 'react-native-elements/dist/divider/Divider';


const styles = StyleSheet.create({
    menuItemsStyle:{
        flexDirection:"row",
        justifyContent:"space-between",
        margin:20
    },
    titleStyle: {
        fontSize:19,
        fontWeight:'600'
    }  
  });

export default function MenuItem({foods}) {
  return (
    <ScrollView>
        {foods.map((food,index)=>(
            <View key={index}>
                <View style={styles.menuItemsStyle}>
                    <FoodInfo food = {food} />
                    <FoodImage food = {food}/>
                </View>
                <Divider width={0.5} orientation = "vertical" />
            </View>
        ))}
    </ScrollView>
  )
}

const FoodInfo = (props) => (
    <View style={{width:240, justifyContent:"space-evenly"}}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
)

const FoodImage = (props) =>(
    <Image source={{uri:props.food.image}} style = {{width:100, height:100, borderRadius:8}} />
)