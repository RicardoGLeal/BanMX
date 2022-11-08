import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import palette from "../../palette";
import BanInput from "../../components/BanInputText";
import { Button } from "react-native-elements";

export default function CreateAccountScreen({ navigation }) {
  const [nombreInputValue, setNombreInputValue] = React.useState("");
  const [usuarioInputValue, setUsuarioInputValue] = React.useState("");
  const [mailInputValue, setMailInputValue] = React.useState("");
  const [passwordInputValue, setPasswordInputValue] = React.useState("");

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: palette.background,
      }}
    >
      <BanInput
        placeholder="Nombre completo"
        onChange={setNombreInputValue}
        value={nombreInputValue}
        containerStyle={{ width: 325, height: 55, marginBottom: 20 }}
      ></BanInput>
      <BanInput
        placeholder="Usuario"
        onChange={setUsuarioInputValue}
        value={usuarioInputValue}
        containerStyle={{ width: 325, height: 55, marginBottom: 20 }}
      ></BanInput>
      <BanInput
        placeholder="Correo"
        onChange={setMailInputValue}
        value={mailInputValue}
        containerStyle={{ width: 325, height: 55, marginBottom: 20 }}
        type="email-address"
      ></BanInput>
      <BanInput
        placeholder="Contraseña"
        onChange={setPasswordInputValue}
        value={passwordInputValue}
        containerStyle={{ width: 325, height: 55, marginBottom: 8 }}
        secureTextEntry={true}
        type="default"
      ></BanInput>

      <Button title={"Crear cuenta"} buttonStyle={styles.button}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: palette.primaryRed,
    borderRadius: 14,
    width: 325,
    height: 50,
    marginBottom: 10,
  },
});
