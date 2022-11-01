import * as React from 'react';
import { View, Text, FlatList, SafeAreaView, StyleSheet, StatusBar, Image, TouchableOpacity } from 'react-native';
import Item from '../../components/HomeScreenFeedItem';
import {Item as ItemType} from '../../components/HomeScreenFeedItem';
import InformacionIconButton from '../../components/InformacionIconButton';
import palette from '../../palette';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
];

export default function HomeScreen({ navigation }) {
    const renderItem = ({ item }: {item: ItemType}) => (
        <Item title={item.title} />
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={
              { 
                paddingLeft: '10%', 
                alignItems: 'center',
                justifyContent: 'space-between', 
                alignContent: 'space-between', 
                flexDirection: 'row', 
                paddingRight: '10%'
              }
            }>
                <Text style={styles.title}>Hola, Carlo </Text>
                <InformacionIconButton screen={"Profile"}/>
            </View>
            <View style={styles.storiesContainer}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </SafeAreaView>
import BanInput from '../../components/BanInputText';
export default function HomeScreen({ navigation }) {
    const [mailInputValue, setMailInputValue] = React.useState('');

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: palette.background }}>
            <BanInput placeholder='Correo' onChange={setMailInputValue} value={mailInputValue} containerStyle={{ width: 325, height: 50 }} type='email-address'></BanInput>
            <Text
                onPress={() => alert('This is the "Home" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Home Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
      backgroundColor: palette.background
    },
    storiesContainer: {
      backgroundColor: '#ffffff',
      height: '100%',
      padding: 20,
      borderRadius: 18,
      margin: 10,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      color: '#3A3A3A'
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: 66,
      height: 58,
    },
});

