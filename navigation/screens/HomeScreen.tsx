import * as React from "react";
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import Item from "../../components/HomeScreenFeedItem";
import { Item as ItemType } from "../../components/HomeScreenFeedItem";
import InformacionIconButton from "../../components/InformacionIconButton";
import { AuthContext } from "../../context/AuthContext";
import palette from "../../palette";

const DATA = [
  {
    id: "1",
    title: "Donaciones directas",
    uri: "https://www.gob.mx/cms/uploads/article/main_image/17642/UNI177015_Richter_2_con-700.jpg",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
  },
  {
    id: "2",
    title: "Un nuevo mundo",
    uri: "https://us.123rf.com/450wm/niratpix/niratpix1510/niratpix151000172/46843602-nakhon-ratchasima-tailandia-17-de-octubre-un-ni%C3%B1o-no-identificado-en-%C3%A1reas-rurales-est%C3%A1-jugando-para.jpg?ver=6",
    text: `It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,`,
  },
  {
    id: "3",
    title: "Logros BAMX - Mayo/22",
    uri: "https://eacnur.org/files/styles/two_columns_photo_info/public/paragraph/two_columns_foto_info/rf2160921_seeds_for_solutions_c_wouter_elsen._vsf-b_6.jpg?itok=FxG1X8Pb",
    text: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here'`,
  },
  {
    id: "4",
    title: "Logros BAMX - Mayo/22",
    uri: "https://espanol.babycenter.com/ims/2015/05/iStock_63184515_wide.jpg",
    text: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
  },
];

export default function HomeScreen({ navigation }) {
  const renderItem = ({ item }: { item: ItemType }) => (
    <Item id={item.id} title={item.title} text={item.text} uri={item.uri} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          paddingLeft: "10%",
          alignItems: "center",
          justifyContent: "space-between",
          alignContent: "space-between",
          flexDirection: "row",
          paddingRight: "10%",
        }}
      >
        <Text style={styles.title}>Hola, Carlo </Text>
        <InformacionIconButton screen={"Profile"} />
      </View>
      <View style={styles.storiesContainer}>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              justifyContent: "center",
              textAlign: "center",
              alignContent: "center",
              alignItems: "center",
              fontSize: 22,
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            Esto es lo que ha estado haciendo BAMX:
          </Text>
        </View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: palette.background,
  },
  storiesContainer: {
    backgroundColor: "#ffffff",
    height: "95%",
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
    fontWeight: "bold",
    color: "#3A3A3A",
  },
  title1: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#eaeaea",
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
