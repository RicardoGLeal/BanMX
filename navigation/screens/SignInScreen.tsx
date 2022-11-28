import * as React from "react";
import { View, Text, StyleSheet, Image, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import palette from "../../palette";
import BanInput from "../../components/BanInputText";
import { Button } from "react-native-elements";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { render, fireEvent } from "@testing-library/react-native"

export default function SignInScreen({ navigation }) {
  const [err, setErr] = React.useState(false);
  const [errText, setErrText] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const [mailInputValue, setMailInputValue] = React.useState("");
  const [passwordInputValue, setPasswordInputValue] = React.useState("");

  const handleSubmit = async () => {
    try {
      await signInWithEmailAndPassword(
        auth,
        mailInputValue,
        passwordInputValue
      );
      navigation.navigate("Root", {});
    } catch (e) {
      setErr(true);
      setErrText(e);
      console.log(e);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={{flexGrow: 1}}
      keyboardShouldPersistTaps='handled'
      style={{backgroundColor: palette.background}}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: palette.background,
          }}
        >
          <View style={{paddingBottom: 0}}>
            <Image
              style={{ width: 300, height: 200}}
              source={require("../../assets/logo-2-modified.png")}
            ></Image>
          </View>
          {err && <Text style={{paddingBottom: 10, color: palette.primaryRed}}>Error</Text>}

          <BanInput
            placeholder="Correo"
            onChange={setMailInputValue}
            value={mailInputValue}
            containerStyle={{ width: 325, height: 55, marginBottom: 20 }}
            type="email-address"
            testID="SignIn.emailInput"
          ></BanInput>
          <BanInput
            placeholder="Contraseña"
            onChange={setPasswordInputValue}
            value={passwordInputValue}
            containerStyle={{ width: 325, height: 55, marginBottom: 8 }}
            secureTextEntry={true}
            type="default"
            testID="SignIn.passwordInput"
          ></BanInput>
          <View style={{                
                marginBottom: 57,
                marginRight: 35,
                alignSelf: "flex-end",
          }}>
            <Text
              style={{
                textAlign: "right",
              }}
            >
              ¿Olvidaste tu Contraseña?
            </Text>
          </View>
          <Button
            title={"Iniciar Sesion"}
            buttonStyle={styles.button}
            onPress={handleSubmit}
            disabled={loading}
            testID="SignIn.Button"
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
      </ScrollView>
    </KeyboardAvoidingView>
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
