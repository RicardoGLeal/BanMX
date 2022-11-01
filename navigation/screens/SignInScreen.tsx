import * as React from 'react';
import { View, Text, FlatList, SafeAreaView, StyleSheet, StatusBar, Image, TouchableOpacity } from 'react-native';
import Item from '../../components/HomeScreenFeedItem';
import { Item as ItemType } from '../../components/HomeScreenFeedItem';
import InformacionIconButton from '../../components/InformacionIconButton';
import palette from '../../palette';
import BanInput from '../../components/BanInputText';

export default function HomeScreen({ navigation }) {
    const [mailInputValue, setMailInputValue] = React.useState('');
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: palette.background }}>
            <BanInput placeholder='Correo' onChange={setMailInputValue} value={mailInputValue} containerStyle={{ width: 325, height: 50 }} type='email-address'></BanInput>
            <Text
                onPress={() => alert('This is the "Home" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Home Screen</Text>
            );
        </View>
    );
}