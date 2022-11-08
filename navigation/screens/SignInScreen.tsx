import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import palette from "../../palette";
import BanInput from "../../components/BanInputText";
import { Button } from "react-native-elements";

export default function SignInScreen({ navigation }) {
  const [err, setErr] = React.useState(false);
  const [errText, setErrText] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const [mailInputValue, setMailInputValue] = React.useState("");
  const [passwordInputValue, setPasswordInputValue] = React.useState("");

  const handleSubmit = async () => {
    navigation.navigate("Root", {});
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: palette.background,
      }}
    >
      <Image
        style={{ width: 359, height: 400 }}
        source={require("../../assets/banmx_logo.png")}
      ></Image>

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

      <Text
        style={{
          textAlign: "right",
          alignSelf: "flex-end",
          marginBottom: 57,
          marginRight: 52,
        }}
      >
        ¿Olvidaste tu Contraseña?
      </Text>

      <Button
        title={"Iniciar Sesion"}
        buttonStyle={styles.button}
        onPress={handleSubmit}
        disabled={loading}
      ></Button>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Text>¿No tienes cuenta?</Text>
        <Text
          onPress={() => {
            navigation.navigate("SignUp", {});
          }}
          style={{
            marginLeft: 10,
            fontWeight: "bold",
            textDecorationLine: "underline",
          }}
        >
          Crear Cuenta
        </Text>
      </View>
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
