import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import palette from "../../palette";
import Ionicons from "react-native-vector-icons/Ionicons";

async function donate(amount) {
  switch(amount) {
    case 200:
      await Linking.openURL("https://pay.conekta.com/link/74659d73d8af4c419e8e27dd19468e08"); 
      break;
      
    case 400:
      await Linking.openURL("https://pay.conekta.com/link/c503fdcc6bb74a3c991907aea583e60e"); 
      break;

    case 800:
      await Linking.openURL("https://pay.conekta.com/link/d22fc96686104e30a3351dc5eeb29d1a");
      break;

    case 1200:
      await Linking.openURL("https://pay.conekta.com/link/48d0dc0733494452a134c5a77b184784");
      break;

    case 1600:
      await Linking.openURL("https://pay.conekta.com/link/1192db4e88f74f3ca57f080b6bf0fa40");
      break;
  }
}

export default function DonateScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.top_container}>
        <View style={{ marginTop: 10 }}>
          <Image source={require("../../assets/icon-little.png")} />
        </View>
        <View style={styles.back}>
          <Ionicons name={"chevron-back-outline"} size={32} color={"#000000"} />
        </View>
      </View>

      <View style={styles.main_container}>
        <Text style={styles.light_title_style}> Muchas gracias por tu motivación por apoyar!  </Text>
        <Text style={styles.detailText}>Por favor, selecciona la cantidad de dinero que te gustaría donar. Recuerda que por cada $160 se estarás donando 1 despensa a una familia</Text>
      </View>

      <View style={styles.button_container}>
        <TouchableOpacity style={styles.button_style} onPress={() => donate(200)}>
          <Text style={styles.button_text}>200$</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button_style} onPress={() => donate(400)}>
          <Text style={styles.button_text}>400$</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button_style} onPress={() => donate(800)}>
          <Text style={styles.button_text}>800$</Text>
        </TouchableOpacity>

      </View>
      <View style={styles.button_container}>
        <TouchableOpacity style={styles.button_style} onPress={() => donate(1200)}>
          <Text style={styles.button_text}>1200$</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button_style} onPress={() => donate(1600)}>
          <Text style={styles.button_text}>1600$</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    paddingTop: 10,
    textAlign: "center",
    fontSize: 19,
  },
  body: {
    justifyContent: "center",
    paddingHorizontal: 15,
    minHeight: 100,
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    flexDirection: "row",
  },
  image: {
    flex: '1',
    width: undefined, height: undefined
  },
  back: {
    flex: 1,
    marginTop: 40,
    marginLeft: 20,
  },
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
    paddingTop: 15,
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
    marginTop: 20,
    marginBottom: 30,
  },
  detailText: {
    paddingHorizontal: 36,
    textAlign: 'justify',
    fontSize: 16,
    color: palette.textColor,
    marginBottom: 20,
    lineHeight: 36,
  },
  light_title_style: {
    color: palette.textColor,
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 36,
    marginBottom: 25,
    textAlign: "center",
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
    marginHorizontal: 10,
    // flex: 1, 
    width: 100,
  },
  button_style_big: {
    backgroundColor: palette.primaryRed,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 10,
    marginHorizontal: 10,
    // flex: 1, 
    width: 180,

  },
  button_style_yellow: {
    display: "flex",
    flexDirection: "row",
    borderRadius: 10,
    width: 300,
    height: 60,


  },
  button_text: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 18,
  },
  button_container: {
    display: "flex",
    flexDirection: "row",
    alignContent: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginTop: 10,
  },
  button_container_margin: {
    display: "flex",
    flexDirection: "row",
    alignContent: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginTop: 100,
  },
  cantidad_a_donar: {
    display: "flex",
    flexDirection: "row",
    alignContent: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginTop: 60,
  },
  button_container_row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    marginTop: 10,
    marginBottom: 10,
  },
});
