import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Button,
} from "react-native";
import palette from "../../palette";

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.top_container}>
        <View>
          <Image source={require("../../assets/icon-little.png")} />
        </View>
        <View>
          <View style={styles.circle}>
            <Image source={require("../../assets/akar-icons_link-chain.png")} />
          </View>
        </View>
      </View>
    </View>
  );
}

/*
      <Text
        onPress={() => navigation.navigate("Home")}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        Profile Screen
      </Text>
*/

/*
    <View style={styles.container}>
      <View style={styles.top_container}>
        <Image
          source={require("../../assets/icon-little.png")}
          style={styles.tiny_logo}
        />
        <Image
          source={require("../../assets/akar-icons_link-chain.png")}
          style={styles.link_button}
        />
      </View>
    </View>
*/

/*
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        padding: 40,
      }}
    >
      <View style={{ width: "40%" }}>
        <Button title="BUY" />
      </View>
      <View style={{ width: "40%" }}>
        <Image
          source={require("../../assets/icon-little.png")}
          style={styles.tiny_logo}
        />
      </View>
    </View>
*/

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.background,
    flex: 1,
  },
  top_container: {
    display: "flex",
    flexDirection: "row-reverse",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 24,
    padding: 24,
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
});
