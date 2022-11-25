import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default function InformacionIconButton({ screen }: {screen: string}){
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate(screen)}> 
            <View>
                <Image style={{width: 75, height:50}} source={require("../assets/logo-2-modified.png")} />
            </View>
        </TouchableOpacity>
    );
};
