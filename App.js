import React from "react"
import { StyleSheet, TouchableOpacity, View, SafeAreaView, Text, Alert,Image } from "react-native"



export default function App(){ 
  const signin = ()=>{
    alert('Cliquei')
  }

return(
  <SafeAreaView style={style.container}>
    <View>
  <TouchableOpacity 
  style={style.buttonFacebookStyle}
  activeOpacity={0.5}>
      <Image 
      source={require('./img/face.png')}
      style={style.buttonImageIconStyle} />
      <Text style={style.title}>Login usando facebook</Text>
  </TouchableOpacity>
  </View>
  </SafeAreaView>
)
}
const style = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    marginHorizontal:16,
},
  
  buttonFacebookStyle:{
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#00539F',
    borderWidth:0.5,
    borderColor:'#fff',
    height:40,
    borderRadius:5,
    margin:5,
},
buttonImageIconStyle:{
  padding:10,
  margin:0,
  height:'163%',
  width:'30%',
  resizeMode:'stretch',
  alignContent:'center'
},
buttonTextStyle:{
  color:'#fff',
  marginBottom:4,
  marginLeft:10
},
title:{
  color:'#fff',
  fontSize:16, 
  fontWeight:'bold',
  marginLeft:35
}
})
