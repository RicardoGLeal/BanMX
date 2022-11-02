import * as React from 'react';
import { View, Text, FlatList, SafeAreaView, StyleSheet, StatusBar, Image, TouchableOpacity } from 'react-native';
import Item from '../../components/HomeScreenFeedItem';
import { Item as ItemType } from '../../components/HomeScreenFeedItem';
import InformacionIconButton from '../../components/InformacionIconButton';
import palette from '../../palette';

const DATA = [
<<<<<<< HEAD
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
  const renderItem = ({ item }: { item: ItemType }) => (
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
        <InformacionIconButton screen={"Profile"} />
      </View>
      <View style={styles.storiesContainer}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
=======
    {
      id: '1',
      title: 'Donaciones directas',
      uri: 'data:image/jpeg;base64,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',
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
    },
    {
      id: '2',
      title: 'Un nuevo mundo',
      uri: 'https://us.123rf.com/450wm/niratpix/niratpix1510/niratpix151000172/46843602-nakhon-ratchasima-tailandia-17-de-octubre-un-ni%C3%B1o-no-identificado-en-%C3%A1reas-rurales-est%C3%A1-jugando-para.jpg?ver=6',
      text: `It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,`
    },
    {
      id: '3',
      title: 'Logros BAMX - Mayo/22',
      uri: 'https://eacnur.org/files/styles/two_columns_photo_info/public/paragraph/two_columns_foto_info/rf2160921_seeds_for_solutions_c_wouter_elsen._vsf-b_6.jpg?itok=FxG1X8Pb',
      text: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here'`
    },
    {
      id: '4',
      title: 'Logros BAMX - Mayo/22',
      uri: 'https://espanol.babycenter.com/ims/2015/05/iStock_63184515_wide.jpg',
      text: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`
    },
];

export default function HomeScreen({ navigation }) {
    const renderItem = ({ item }: {item: ItemType}) => (
        <Item id={item.id} title={item.title} text={item.text} uri={item.uri}/>
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
                <View style={{alignItems: 'center'}}>
                  <Text style={{
                    justifyContent: 'center',
                    textAlign: 'center',
                    alignContent:'center', 
                    alignItems:'center', 
                    fontSize: 22, 
                    fontWeight: 'bold',
                    marginBottom: 10,
                  }}>
                    Esto es lo que ha estado haciendo BAMX:
                  </Text>
                  </View>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </SafeAreaView>
    );
>>>>>>> be64005 (Customizable Figma home screen)
}


const styles = StyleSheet.create({
<<<<<<< HEAD
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
=======
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
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      color: '#3A3A3A'
    },
    title1: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#eaeaea'
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: 66,
      height: 58,
>>>>>>> be64005 (Customizable Figma home screen)
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

