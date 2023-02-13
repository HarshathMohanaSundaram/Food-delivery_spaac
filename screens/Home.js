import React, { useEffect, useState } from "react";
import Constants from "expo-constants";
import { Text, StyleSheet, SafeAreaView, View, ScrollView } from "react-native";
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestaurantItems, { localRestaurants } from "../components/RestaurantItems";


export default function Home() {

  const [restuarantData, setRestuarantData] = useState(localRestaurants)


  return (
    <SafeAreaView style={[styles.screen, styles]}>
      <View style={{backgroundColor:'white', padding:15}}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator = {false}>
        <Categories />
        <RestaurantItems restuarantData={restuarantData}/>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
      paddingTop: Constants.statusBarHeight,
      flex: 1,
      backgroundColor:'#eee'
  },

});