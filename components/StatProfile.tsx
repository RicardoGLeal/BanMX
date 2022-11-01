import { View, Text, StyleSheet } from "react-native";
import palette from "../palette";
import React from "react";

export default function StatProfile() {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.circle}>
          <Text style={styles.number}>3°</Text>
        </View>
        <View>
          <Text> Tu </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    height: 42,
    width: 42,
    borderRadius: 42,
    backgroundColor: palette.secondaryRed,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4,
    marginLeft: -21,
  },
  number: {
    color: palette.toggleActive,
    fontWeight: "900",
    fontSize: 15,
    lineHeight: 22,
  },
  container: {
    backgroundColor: "#FFFFFF",
    width: 300,
    height: 50,
    borderRadius: 10,
  },
});
