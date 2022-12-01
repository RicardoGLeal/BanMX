import * as React from 'react';
import { View, Text,Image, SafeAreaView, StatusBar, StyleSheet, TouchableHighlight, TouchableOpacity} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import palette from '../palette';

export type Item = {
    id: number,
    title: string,
    text: string, 
    uri: string,
}

export default function Item(item: Item){
    const [pressed, setPressed] = React.useState<boolean>(false);
    return (
        <TouchableWithoutFeedback onPress={() => setPressed(!pressed)}>
            <View style={[styles.item, {height: pressed ? 500 : 220}]}>
                <View style={styles.itemImage}>
                    <Image style={{flex: 1, borderRadius: 15, width: '100%'}} source={{uri: item.uri}} />
                </View>
                <View style={{flex: 4, flexDirection: 'row'}}>
                    <View style={styles.itemText}>
                        <Text numberOfLines={1} ellipsizeMode={"tail"} style={styles.title}>{item.title}</Text>
                        <Text numberOfLines={pressed ? 20 : 5} ellipsizeMode={"tail"} style={styles.bodyText}>{item.text}</Text>
                    </View>
                </View>
                <View style={{height: 30, justifyContent: 'center', alignContent: 'center', alignSelf: 'center', paddingTop: 10, marginBottom:5}}>
                    <Image style={{width: 20, height: "90%", transform: [{ rotate: pressed ? '90deg' : '-90deg' }]}} source={require('../assets/chevron_left2.png')}/>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    item: {
        flex: 1,
        backgroundColor: '#EAEAEA',
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
        flexDirection: 'column'
    },
    itemText: {
      flex: 5,
      padding: 10,
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
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 15,
    }
});
