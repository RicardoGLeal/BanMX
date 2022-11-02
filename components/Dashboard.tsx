import { View, Text,TouchableOpacity, Image, StyleSheet  } from "react-native";
import palette from "../palette";
import React from "react";

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <View>
        
        <View style ={styles.first}>
            <View style={styles.circle}>
          <Text style={styles.number}>3°</Text>
        </View>
        </View>
        <View style ={styles.second}>
            <View style = {{ flex: 1, height: 10, marginTop: 20}}>
                <View style = {styles.trophyAndText}> 
                <View style = {{width: 30, marginRight: 20}}><Image source={require("../assets/trophy.png")} /></View>
                <View style = {{ width : 200}}><Text style = {styles.boldAndBig}> Alex88_Rod </Text></View></View>
                
                
                
            </View>
            <View style = {{ flex: 1, height: 30}}>
            <View style={styles.pill}>
          <Text style={styles.pill_text}>124213</Text>
        </View>
                
            </View>
            </View>
       
            
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    trophyAndText:{
        display: "flex",
        flexDirection: "row",
        width: 200,
        
        
    },
    button_style: {
        backgroundColor: palette.primaryRed,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 100,
    
        alignSelf: "flex-end",
      },
      button_text: {
        color: "#FFFFFF",
        fontWeight: "700",
        fontSize: 18,
      },
    boldAndBig: {
        color: "#FFFFFF",
        fontWeight :"900",
        fontSize: 24,

    },
    first: {
        height: 10,
        width: 350, 
        alignContent: 'center',
        alignItems: "center",
    justifyContent: 'center',
    },
    second: {
        paddingTop: 0, 
        height: 140,
        width: 350, 
        alignItems: "center",
        justifyContent: 'center',
        display: "flex",
        
    flexDirection: "column",
    },
  content: {
     backgroundColor: "#FFFFFF" ,
     height: 20,
     width: 300,
    flex: 2,
    },
  circle: {
    height: 58,
    width: 58,
    borderRadius: 58,
    backgroundColor: palette.secondaryRed,

    
    alignItems: "center",
    justifyContent: "center",
    marginTop : -20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 0.5
  },
  number: {
    color: palette.toggleActive,
    fontWeight: "900",
    fontSize: 15,
    lineHeight: 22,
  },
  container: {
    backgroundColor: palette.secondaryRed,
    width: 400,
    height: 150,
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 20
  },
  text_style: {
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 24,
    color: palette.textColor,
    marginLeft: 40,
  },
  pill_container: {
    display: "flex",
    alignItems: "flex-end",
    flex: 1,
    marginRight: 15,
  },
  pill: {
    backgroundColor: palette.greenColor,
    padding: 5,
    paddingRight: 10,
    paddingLeft: 10,
    borderRadius: 42,
    width: 96, 
    height: 30, 
    justifyContent: 'center',
    alignItems: "center", 
  },
  pill_text: {
      fontSize: 15, 
    color: "#FFFFFF",
  },
});
