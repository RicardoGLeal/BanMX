import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import palette from "../palette";

export default function ProfileMap() {
  return (
    <View style={{ marginTop: 7 }}>
      <View style={styles.header_container}>
        <Text style={styles.header_text}>Lugares donde estamos apoyando: </Text>
      </View>
      <Image style={styles.Image} source={require("../assets/map.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  header_container: {
    backgroundColor: palette.yellow,
    padding: 3,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 42,
  },
  header_text: {
    color: "#FFFFFF",
    fontWeight: "400",
    fontSize: 15,
    alignSelf: "center",
  },
  Image: {
    width: 350,
    height: 200,
    borderRadius: 30,
    marginTop: 10,
  },
});
