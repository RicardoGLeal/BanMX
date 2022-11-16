import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Button,
  Switch,
  TouchableOpacity,
} from "react-native";
import palette from "../../palette";
import StatProfile from "../../components/StatProfile";
import Dashboard from "../../components/Dashboard";
import ProfileMap from "../../components/ProfileMap";

export default function RankingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.top_container}>
        
        <View style = {{marginTop: 10}}>
          <Image source={require("../../assets/icon-little.png")} />
        </View>
        <View>
         
        </View>
      </View>

      <View style={styles.main_container}>
          
        <Text style={styles.light_title_style}> Se parte de la ayuda! </Text>
        <Text style={styles.detailText}>{`Ayuda a BAMX con su mision de terminar con el 
hambre en mexico. Dona y ve nuestro progreso!`}</Text>
<Text style={styles.veryBigText}> 300000 </Text>
<View style = {styles.textContainer}>
        </View> 
        <Dashboard/>
        <View style={styles.button_container_row}>
          <TouchableOpacity style={styles.button_style_row_yellow}>
            <Text style={styles.button_text}>Donaciones</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_style_row_gray}>
            <Text style={styles.button_text}>Referidos</Text>
          </TouchableOpacity>
        </View>
        <View style = {styles.row_with_margin}>
          <StatProfile item = {{place: "1", user: "monty", value: "1"}} />
        </View>

        <View style = {styles.row_with_margin}>
          <StatProfile item = {{place: "1", user: "monty", value: "1"}}/>
        </View>

        <View style = {styles.row_with_margin_and_line}>
          <StatProfile item = {{place: "1", user: "monty", value: "1"}} />
        </View>
        <View style = {styles.row_with_margin}>
          <StatProfile item = {{place: "1", user: "monty", value: "1"}}/>
        </View>
        {/* <ProfileMap /> */}
        <View style={styles.button_container} onTouchEnd={() =>
          navigation.navigate('Donate')
        }>
          <TouchableOpacity style={styles.button_style}>
            <Text style={styles.button_text}>Donar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    veryBigText: {
        fontSize: 36,
        color: "#FBC714",
        fontWeight: "900"
    },
    row_with_margin: {
        marginBottom: 6
    },
    row_with_margin_and_line: {
        paddingBottom: 10,
        borderBottomColor: "#3A3A3A",
        borderBottomWidth: 2,
        marginBottom: 12
    },
  container: {
    backgroundColor: palette.background,
    flex: 1,
  },
  textContainer: {
      marginBottom: 20
  },
  top_container: {
    display: "flex",
    flexDirection: "row-reverse",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    paddingHorizontal: 24,
    paddingTop : 15,
  },
  tiny_logo: {
    alignSelf: "flex-end",
  },
  link_button: {
    alignSelf: "flex-start",
    backgroundColor: palette.secondaryRed,
  },
  circle: {
    height: 42,
    width: 42,
    borderRadius: 42,
    backgroundColor: palette.secondaryRed,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  main_container: {
    display: "flex",
    alignItems: "center",
  },
  detailText : {
      paddingHorizontal: 36,
      textAlign: 'justify',
      fontSize: 13,
      color : palette.textColor,
      marginBottom: 7
  },
  light_title_style: {
    color: palette.textColor,
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 36,
    marginBottom : 7
  },
  title_style: {
    color: palette.blueText,
    fontSize: 24,
    fontWeight: "800",
    lineHeight: 36,
  },
  switch_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  section_title: {
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 24,
    marginTop: 10,
  },
  button_style_row: {
    backgroundColor: palette.primaryRed,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 100,
    marginHorizontal: 20,
    alignSelf: "flex-end",
  },
  button_style_row_gray: {
    backgroundColor: "#B8B8B8",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 100,
    marginHorizontal: 20,
    alignSelf: "flex-end",
  },
  button_style_row_yellow: {
    backgroundColor: "#FCC815",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 100,
    marginHorizontal: 20,
    alignSelf: "flex-end",
  },
  button_style: {
    backgroundColor: palette.primaryRed,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 10,
    width: 300,
    alignSelf: "flex-end",
  },
  button_text: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 18,
  },
  button_container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    marginTop: 10,
  },
  button_container_row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    marginTop: 10,
    marginBottom: 10,
  },
});
