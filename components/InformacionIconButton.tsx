import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default function InformacionIconButton({ screen }: {screen: string}){
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate(screen)}> 
            <View>
                <Image source={require("../assets/icon-little.png")} />
            </View>
        </TouchableOpacity>
    );
};
