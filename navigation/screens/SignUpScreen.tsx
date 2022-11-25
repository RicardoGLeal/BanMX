import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import palette from "../../palette";
import BanInput from "../../components/BanInputText";
import { Button } from "react-native-elements";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";

export default function SignUpScreen({ navigation }) {
  const [err, setErr] = React.useState(false);
  const [errText, setErrText] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const [nameInputValue, setNameInputValue] = React.useState("");
  const [usenameInputValue, setUsernameInputValue] = React.useState("");
  const [mailInputValue, setMailInputValue] = React.useState("");
  const [passwordInputValue, setPasswordInputValue] = React.useState("");

  const handleSubmit = async () => {
    setLoading(true);
    if (nameInputValue != null && usenameInputValue != null && mailInputValue != null && passwordInputValue != null) {
      setErr(true);
      setErrText("Porfavor verifica los campos nuevamente");
      return;
    }

    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        mailInputValue,
        passwordInputValue
      );

      await updateProfile(res.user, {
        displayName: usenameInputValue,
      });

      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        email: mailInputValue,
        username: usenameInputValue,
        name: nameInputValue,
        public: true,
      });

      await setDoc(doc(db, "referrals", res.user.uid), {
        uid: res.user.uid,
        referidos: 0,
      });

      navigation.navigate("Root", {});
    } catch (e) {
      setErr(true);
      console.log(e);
      setErrText(e);
      setLoading(false);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        paddingTop: 50,
        backgroundColor: palette.background,
      }}
    >
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 30 }}
      >
        <Image
          style={{
            alignSelf: "flex-start",
            width: 221,
            height: 221,
            marginLeft: -220,
          }}
          source={require("../../assets/icon_signUp.png")}
        ></Image>
        <Text style={styles.title}>Crear Cuenta</Text>
      </View>

      {err && <Text>Error</Text>}
      {loading && <Text>Creando cuenta...</Text>}

      <BanInput
        placeholder="Nombre Completo"
        onChange={setNameInputValue}
        value={nameInputValue}
        containerStyle={{ width: 325, height: 55, marginBottom: 15 }}
        type="default"
      ></BanInput>
      <BanInput
        placeholder="Usuario"
        onChange={setUsernameInputValue}
        value={usenameInputValue}
        containerStyle={{ width: 325, height: 55, marginBottom: 15 }}
        type="default"
      ></BanInput>
      <BanInput
        placeholder="Correo"
        onChange={setMailInputValue}
        value={mailInputValue}
        containerStyle={{ width: 325, height: 55, marginBottom: 15 }}
        type="email-address"
      ></BanInput>
      <BanInput
        placeholder="Contraseña"
        onChange={setPasswordInputValue}
        value={passwordInputValue}
        containerStyle={{ width: 325, height: 55, marginBottom: 40 }}
        secureTextEntry={true}
        type="default"
      ></BanInput>
      <Button
        title={"Crear Cuenta"}
        buttonStyle={styles.button}
        onPress={handleSubmit}
        disabled={loading}
      ></Button>

      <Text style={{ marginBottom: 20 }}>_____________ o _____________</Text>
      <Button
        titleStyle={{ color: palette.black }}
        title={"Crear cuenta con Google"}
        buttonStyle={styles.buttonGoogle}
      ></Button>
      <Button
        title={"Crear cuenta con Facebook"}
        buttonStyle={styles.buttonFacebook}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#3A3A3A",
    alignSelf: "flex-end",
    textAlignVertical: "bottom",
  },
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
  buttonGoogle: {
    backgroundColor: palette.white,
    borderRadius: 14,
    width: 325,
    height: 50,
    marginBottom: 10,
  },
  buttonFacebook: {
    backgroundColor: palette.blueButton,
    borderRadius: 14,
    width: 325,
    height: 50,
    marginBottom: 10,
  },
});
