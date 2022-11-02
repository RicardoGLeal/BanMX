import * as React from 'react';
import { View, Text,Image, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';
import palette from '../palette';

export type Item = {
    id: number,
    title: string,
    text: string, 
    uri: string,
}

export default function Item(item: Item){
    return (
        <View style={styles.item}>
            <View style={styles.itemText}>
                <Text numberOfLines={1} ellipsizeMode={"tail"} style={styles.title}>{item.title}</Text>
                <Text numberOfLines={5} ellipsizeMode={"tail"} style={styles.bodyText}>{item.text}</Text>
            </View>
            <View style={styles.itemImage}>
                <Image style={{borderRadius: 15, width: '100%', height: '100%'}} source={{uri: item.uri}} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        flex: 1,
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
        flexDirection: 'row'
    },
    itemText: {
      flex:2,
      flexDirection: 'column'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    bodyText: {
        fontSize: 14,
        fontWeight: 'normal',
    },
    itemImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 15,
    }
});
