import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import palette from '../../palette';
import BanInput from '../../components/BanInputText';
import { Button } from 'react-native-elements';
import { Icon } from 'react-native-elements'

export default function SignUpScreen({ navigation }) {
    const [nameInputValue, setNameInputValue] = React.useState('');
    const [usenameInputValue, setUsernameInputValue] = React.useState('');
    const [mailInputValue, setMailInputValue] = React.useState('');
    const [passwordInputValue, setPasswordInputValue] = React.useState('');

    return (
        <View style={{ flex: 1, alignItems: 'center', paddingTop: 50, backgroundColor: palette.background }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 30 }}>
                <Image style={{ alignSelf: 'flex-start', width: 221, height: 221, marginLeft: -220 }} source={require("../../assets/icon_signUp.png")} ></Image>
                <Text style={styles.title}>Crear Cuenta</Text>
            </View>

            <BanInput placeholder='Nombre Completo' onChange={setNameInputValue} value={nameInputValue}
                containerStyle={{ width: 325, height: 55, marginBottom: 15 }} type='email-address'></BanInput>
            <BanInput placeholder='Usuario' onChange={setUsernameInputValue} value={usenameInputValue}
                containerStyle={{ width: 325, height: 55, marginBottom: 15 }} type='email-address'></BanInput>
            <BanInput placeholder='Correo' onChange={setMailInputValue} value={mailInputValue}
                containerStyle={{ width: 325, height: 55, marginBottom: 15 }} type='email-address'></BanInput>
            <BanInput placeholder='Contraseña' onChange={setPasswordInputValue} value={passwordInputValue}
                containerStyle={{ width: 325, height: 55, marginBottom: 40 }} secureTextEntry={true} type='default'></BanInput>
            <Button title={"Crear Cuenta"} buttonStyle={styles.button} ></Button>

            <Text style={{ marginBottom: 20 }}>_____________ o _____________</Text>
            <Button titleStyle={{ color: palette.black }} title={"Crear cuenta con Google"} buttonStyle={styles.buttonGoogle} ></Button>
            <Button title={"Crear cuenta con Facebook"} buttonStyle={styles.buttonFacebook} ></Button>

        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#3A3A3A',
        alignSelf: 'flex-end',
        textAlignVertical: 'bottom',
    },
    container: {
        flex: 1
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
        marginBottom: 10
    },
    buttonFacebook: {
        backgroundColor: palette.blueButton,
        borderRadius: 14,
        width: 325,
        height: 50,
        marginBottom: 10
    }
})