import * as React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import palette from "../../palette";

export default function ProfileScreen({ navigation }) {
  return <View style={styles.container}></View>;
}

/*
      <Text
        onPress={() => navigation.navigate("Home")}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        Profile Screen
      </Text>
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: palette.background,
  },
});
