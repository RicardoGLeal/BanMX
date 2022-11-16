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
import { collection, getDocs, QuerySnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect, useState } from "react";

var DATA1 : [News?] = [] ;

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

class News {
  id: number
  text: string
  title: string
  uri: string 
  constructor (id: number, text: string, title: string, uri: string ) {
      this.id = id;
      this.text = text;
      this.title = title;
      this.uri = uri;
  }
  toString() {
      return this.id + ', ' + this.text + ', ' + this.title + ', ' + this.uri;
  }
}

// Firestore data converter
const newsConverter = {
  toFirestore: (news: News) => {
      return {
        id: news.id,
        text: news.text,
        title: news.title,
        uri: news.uri
      };
  },
  fromFirestore: (snapshot, options) => {
      const data = snapshot.data(options);
      return new News(data.id, data.text, data.title, data.uri);
  }
};

export default function HomeScreen({ navigation }) {

  const [data, setData] = useState<[News?]>([]);
  const [loading, setLoading] = useState(true);
  
  const myAsyncFunction = async (): Promise<[News?]> => {
    const querySnapshot = await getDocs(collection(db, "news").withConverter(newsConverter));
    const data : [News?] = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      const news : News = new News(doc.get("id"), doc.get("text"), doc.get("title"), doc.get("uri"));
      data.push(news)
    })
    return data
  }

  const renderItem = ({ item }: { item: ItemType }) => (
    <Item id={item.id} title={item.title} text={item.text} uri={item.uri} />
  );

  useEffect(() => {
    setLoading(true);
    const fetchData = async() => {
      const data = await myAsyncFunction();
      setData(data);
      setLoading(false)
    }
    try{
      fetchData()
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }, []);

  if (loading) {
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
          <Text style={styles.title}>Loading...</Text>
        </View>
      </SafeAreaView>
    );
  } else {
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
          <InformacionIconButton screen={"Details"} />
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
          {data.length > 0 ?           
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => String(item.id)}
            /> 
          : <Text style={{
              fontSize: 32,
              fontWeight: "bold",
              justifyContent: "center",
              textAlign: "center",
              alignContent: "center",
              alignItems: "center"
            }}
            >
              No hay noticias para mostrar aún, esperalas pronto!
            </Text> } 
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: palette.background,
  },
  storiesContainer: {
    backgroundColor: "#ffffff",
    height: "87%",
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
