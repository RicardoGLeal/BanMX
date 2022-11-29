import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";
import palette from "../../palette";

import Ionicons from "react-native-vector-icons/Ionicons";
import { sendEmail } from "../../send-email";

export default function AllyFormScreen({ navigation }) {
  const [number, onChangeNumber] = React.useState(null);
  const [mensaje, onChangeMensaje] = React.useState(null);
  const [empresa, onChangeEmpresa] = React.useState(null);

  const sendEmailToBanmx = async () => {
    const email = "comunicacionbamx@bdalimentos.org";
    const subject = "Quiero ser Aliado!";
    const body = `Numero de contacto: ${number}\nEmpresa: ${empresa}\nMensaje:\n${mensaje}`;
    try {
      await sendEmail(email, subject, body);
    } catch (e) {
      console.log("ERROR al mandar correo");
      navigation.goBack();
    }
    console.log("Correo enviado!");
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps='handled'
      >
        <View style={styles.container}>
          <View style={styles.back}>
            <Ionicons
              name={"chevron-back-outline"}
              size={32}
              color={"#000000"}
              onPress={() => navigation.goBack()}
            />
          </View>
          <View style={styles.main_container}>
            <Image
              source={require("../../assets/icon-big_1.png")}
              style={{ marginTop: -30 }}
            />

            <Text style={styles.title}> Ser aliado </Text>
          
            <TextInput
              style={styles.input_telefono}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="Teléfono de Contacto"
              placeholderTextColor={palette.black}
              keyboardType="numeric"
            />

            <TextInput
              style={styles.input_empresa}
              onChangeText={onChangeEmpresa}
              value={empresa}
              placeholder="Empresa"
              placeholderTextColor={palette.black}
            />

            <View>
              <TextInput
                style={styles.input_mensaje}
                onChangeText={(text) => onChangeMensaje(text)}
                value={mensaje}
                placeholder="Mensaje"
                placeholderTextColor={palette.black}
                multiline
                numberOfLines={5}
              />
            </View>

            <View style={styles.button_container}>
              <TouchableOpacity
                style={styles.button_style}
                onPress={() => sendEmailToBanmx()}
              >
                <Text style={styles.button_text}>Enviar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.background,
    flex: 1,
  },
  main_container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  back: {
    marginTop: 40,
    marginLeft: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 32,
    color: palette.textColor,
  },
  button_container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    marginTop: 10,
  },
  button_style: {
    backgroundColor: palette.primaryRed,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 14,

    width: 325,
    height: 50,

    alignSelf: "flex-end",
  },
  button_text: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 14,
  },
  input_telefono: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 15,
    width: 325,

    marginTop: 50,
  },
  input_empresa: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 15,
    width: 325,

    marginTop: 15,
  },
  input_mensaje: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 15,
    width: 325,
    height: 172,

    marginTop: 15,
    textAlignVertical: "top",
  },
});
