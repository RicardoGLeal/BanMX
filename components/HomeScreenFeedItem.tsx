import * as React from 'react';
import { View, Text, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';
import palette from '../palette';

export type Item = {
    title: string,
    text: string, 
    uri: string,
}

export default function Item({ title }: {title: string}){
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#EAEAEA',
        height: 144,
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 4,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
      fontSize: 22,
    },
});
