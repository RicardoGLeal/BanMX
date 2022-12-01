import * as React from "react";
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  StyleSheet,
  StatusBar,

} from "react-native";
import Item from "../../components/HomeScreenFeedItem";
import { Item as ItemType } from "../../components/HomeScreenFeedItem";
import InformacionIconButton from "../../components/InformacionIconButton";
import { AuthContext } from "../../context/AuthContext";
import palette from "../../palette";
import { collection, doc, getDoc, getDocs, QuerySnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect, useState } from "react";
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
  const { currentUser } = React.useContext(AuthContext);
  const [name, setName] = React.useState("");
  
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

  const fetchData = async() => {
    const data = await myAsyncFunction();
    setData(data);
    setLoading(false)
  }

  const fetchUser = async () => {
    const docRef = doc(db, "users", currentUser.uid);
    const docSnap = await getDoc(docRef);
    setName(docSnap.data().username);
  };

  useEffect(() => {
    setLoading(true);
    try{
      fetchUser()
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
          <Text style={styles.title}>Hola{name ?  ", " + name : "loading.."} </Text>
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
            refreshing={loading}
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => String(item.id)}
              onRefresh={() => fetchData()}
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
