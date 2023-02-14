import React, { useEffect, useState } from "react";
import Constants from "expo-constants";
import { Text, StyleSheet, SafeAreaView, View, ScrollView } from "react-native";
import HeaderTabs from '../components/home/HeaderTabs'
import Categories from "../components/home/Categories";
import RestaurantItems, { localRestaurants } from "../components/home/RestaurantItems";
import SearchBar from "../components/home/SearchBar";
import { Divider } from "react-native-elements/dist/divider/Divider";
import BottomTabs from "../components/home/BottomTabs";


export default function Home() {

  const [restuarantData, setRestuarantData] = useState(localRestaurants)
  const [city, setCity] = useState("");
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurants = () => {
    return fetch(`http://localhost:3000/search/${city}`)
      .then((res) => res.json())
      .then((json) => console.log(json));
  };

  useEffect(()=>{
    getRestaurants();
  },[city])

  return (
    <SafeAreaView style={[styles.screen, styles]}>
      <View style={{backgroundColor:'white', padding:15}}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar searchPhrase={searchPhrase} setSearchPhrase={setSearchPhrase} city={city} setCity = {setCity} clicked={clicked} setClicked={setClicked} />
        {/* <SearchBar
          placeholder="Search Here..."
          lightTheme
          round
          autoCorrect={false}
        /> */}
      </View>
      <ScrollView showsVerticalScrollIndicator = {false}>
        <Categories />
        <RestaurantItems restuarantData={restuarantData}/>
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
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