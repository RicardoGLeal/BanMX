import { collection, getDocs } from "firebase/firestore";
import * as React from "react";
import { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  Image,
  FlatList,
  Linking,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { db } from "../../firebase";
import palette from "../../palette";
import Ionicons from "react-native-vector-icons/Ionicons";

class Ally {
  id: number;
  src: string;
  link: string;
  constructor(id: number, src: string, link: string) {
    this.id = id;
    this.src = src;
    this.link = link;
  }
  toString() {
    return this.id + ", " + this.id + ", " + this.src + ", " + this.link;
  }
}

// Firestore data converter
const allyConverter = {
  toFirestore: (news: Ally) => {
    return {
      id: news.id,
      src: news.src,
      link: news.link,
    };
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return new Ally(data.id, data.src, data.link);
  },
};

export default function DetailsScreen({ navigation }) {
  const [dataSource, setDataSource] = useState([]);

  const [data, setData] = useState<[Ally?]>([]);
  const [loading, setLoading] = useState(true);

  const myAsyncFunction = async (): Promise<[Ally?]> => {
    const querySnapshot = await getDocs(
      collection(db, "allies").withConverter(allyConverter)
    );
    const data: [Ally?] = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      const ally: Ally = new Ally(
        doc.get("id"),
        doc.get("src"),
        doc.get("link")
      );
      data.push(ally);
    });
    return data;
  };

  function handleClick(url: string) {
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        alert("Don't know how to open URI: " + url);
      }
    });
  }

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const data = await myAsyncFunction();
      setData(data);
      setLoading(false);
    };
    try {
      fetchData();
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={[
            {
              alignSelf: "flex-start",
              flex: 0.5,
              paddingTop: 20,
              paddingLeft: 20,
            },
          ]}
        >
          <View style={styles.back}>
            <Ionicons
              name={"chevron-back-outline"}
              size={32}
              color={"#000000"}
              onPress={() => navigation.goBack()}
            />
          </View>
        </View>
        <View
          style={{
            flex: 7,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            paddingBottom: 10
          }}
        >
          <Image
            style={{ width:200, height: 150}}
            source={require("../../assets/logo-2-modified.png")}
          />
          <Text
            style={[
              styles.title1,
              {
                marginBottom: "5%",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
              },
            ]}
          >
            BAMX nace con un solo objetivo. LLevar comida a las familias y
            personas que lo necesitan
          </Text>
          <Text
            style={{
              fontSize: 13,
              fontWeight: "bold",
              marginBottom: 10,
              textAlign: "center",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              paddingHorizontal: 15,
            }}
          >
            BAMX Agradece infinitamente a las siguientes empresas por su alianza
            y apoyo directo
          </Text>
        </View>
        <View style={{ flex: 9, marginBottom: 15 }}>
          {loading ? (
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
          ) : data.length > 0 ? (
            <FlatList
              columnWrapperStyle={{ justifyContent: "space-between" }}
              style={{ width: "100%" }}
              data={data}
              renderItem={({ item }) => (
                <View
                  style={{
                    flexDirection: "column",
                    margin: 4,
                  }}
                >
                  <TouchableOpacity onPress={() => handleClick(item.link)}>
                    <Image
                      style={{ width: 110, height: 110, resizeMode: "contain" }}
                      source={{ uri: item.src }}
                    />
                  </TouchableOpacity>
                </View>
              )}
              //Setting the number of column
              numColumns={3}
              keyExtractor={(item, index) => String(index)}
            />
          ) : (
            <Text
              style={{
                fontSize: 32,
                fontWeight: "bold",
                justifyContent: "center",
                textAlign: "center",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              No hay aliados para mostrar aún, unete!
            </Text>
          )}
        </View>
        <View
          style={[{ flexDirection: "row", flex: 1.5 }, styles.button_container]}
        >
          <TouchableOpacity
            style={styles.button_style}
            onPress={() => navigation.navigate("AllyForm", {})}
          >
            <Text style={styles.button_text}>Ser aliado</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button_style}
            onPress={() => navigation.navigate("VolunteerForm", {})}
          >
            <Text style={styles.button_text}>Ser voluntario</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  hello: { flex: 1, alignItems: "center", justifyContent: "center" },
  container: {
    flex: 1,
    backgroundColor: palette.background,
    alignItems: "center",
    justifyContent: "center",
  },
  title1: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
    textAlign: "center",
  },
  imageThumbnail: {
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },
  button_style: {
    flex: 1,
    width: 180,
    backgroundColor: palette.primaryRed,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginHorizontal: 5,
  },
  button_text: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 18,
  },
  button_container: {
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#3A3A3A",
  },
  back: { height: 50 },
});
