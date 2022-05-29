import React from "react"
import {View, Text} from "react-native"
import { css } from "./assets/img/css/css"


export default function App(){ 

return(
  <View style ={css.container}>
    <View style={css.map}></View>

    <View style={css.search}></View>
</View>
)
}
