import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image
} from "react-native";
import palette from "../palette";


export default function StatProfile({item}) {
  const {place, user, value} = item;
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.circle}>
          <Text style={styles.number}>3°</Text>
        </View>
      </View>

      <View>
        <Text style={styles.text_style}> Tú </Text>
      </View>

      <View style={styles.pill_container}>
        <View style={styles.pill}>
          <Text style={styles.pill_text}>$1800</Text>
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
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
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
  },
  pill_text: {
    color: "#FFFFFF",
  },
});
