import * as React from 'react';
import { View, Text, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';
import palette from '../palette';

export type Item = {
    title: string,
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
      backgroundColor: '#f9c2ff',
      height: 200,
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
});
