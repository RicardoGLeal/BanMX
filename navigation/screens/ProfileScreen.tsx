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
import ProfileMap from "../../components/ProfileMap";

export default function ProfileScreen({ navigation }) {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

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

      <View style={styles.main_container}>
        <Text style={styles.title_style}> Carlo Lujan </Text>
        <Text> @carlolj </Text>
        <View style={styles.switch_container}>
          <Text> Cuenta publica </Text>
          <Switch
            onValueChange={toggleSwitch}
            value={isEnabled}
            trackColor={{ false: "#767577", true: "#2CC9AC" }}
            thumbColor={isEnabled ? "#229C86" : "#f4f3f4"}
          />
        </View>

        <View>
          <Text style={styles.section_title}> Donaciones directas </Text>
          <StatProfile />
        </View>

        <View>
          <Text style={styles.section_title}> Numero de referidos </Text>
          <StatProfile />
        </View>

        <View>
          <Text style={styles.section_title}> Puntos Totales </Text>
          <StatProfile />
        </View>

        <ProfileMap />
        <View style={styles.button_container}>
          <TouchableOpacity style={styles.button_style}>
            <Text style={styles.button_text}>Cerrar sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

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
  main_container: {
    display: "flex",
    alignItems: "center",
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
  button_container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    marginTop: 10,
  },
});
