import { View, Text, Image } from 'react-native'
import React from 'react'

const RestaturantInformation = {
  name:"Farmhouse Kitchen Thai Cusine",
  image:"https://www.tamilnadutourism.tn.gov.in/img/pages/medium-desktop/explore-the-regional-cuisine-of-tamil-nadu-1656589481_ebd83b7b837e21659eef.webp",
  price:"₹₹",
  reviews:"1500",
  rating:"4.7",
  categories:[{title:"Thai"}, {title:"Comfort"}],


}

const {name, image,price, reviews, rating,categories} = RestaturantInformation;

const formattedCategories = categories.map((cat)=>cat.title).join(" • ");

const description = `${formattedCategories}  ${price ? "•" + price:""}  •  🎫  •  ${rating}⭐ (${reviews}+)`


export default function About() {
  return (
    <View>
      <RestaurantImage image={image} /> 
      <RestaurantName name = {name} />
      <RestaurantDescription description = {description} />
    </View>
  )
}

const RestaurantImage =(props) =>(
  <Image source={{uri:props.image}} style={{width:"100%", height:180}}/>
)

const RestaurantName = (props) => (
  <Text style={{
    fontSize:29,
    fontWeight:"600",
    margin:10,
    marginHorizontal:15
  }}>{props.name}</Text>
)

const RestaurantDescription = (props) => (
  <Text style={{
    marginTop:10,
    marginHorizontal:15,
    fontWeight:'400',
    fontSize:15.5
  }}>{props.description}</Text>
)