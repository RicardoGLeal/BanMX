import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Button,
  Switch,
  TouchableOpacity,
  ScrollView,
  FlatList
} from "react-native";
import palette from "../../palette";
import { query, orderBy, limit, collection, getDocs, doc,  getDoc, where} from "firebase/firestore";  
import {auth, db } from "../../firebase";
import StatProfile from "../../components/StatProfile";
import Dashboard from "../../components/Dashboard";
import ProfileMap from "../../components/ProfileMap";
import InformacionIconButton from "../../components/InformacionIconButton";


const You = ({item}) =>{
  return item != undefined ? (
  <View style = {styles.row_with_margin}>
          <StatProfile item = {{place: item.place, user: "Tú", value:item.donations}}/>
        </View> )  :
        (
          <View style = {styles.row_with_margin}>
                  
                </View> ) }

const Item = ({ place, user, value, isYourPosition }) => (
  place !=3 ? 
    isYourPosition? ((
      <You item = {{place: place, donations:value}}/>))
      
        :
  ((
  <View style = {styles.row_with_margin}>
          <StatProfile item = {{place: place, user: user, value:value}}/>
        </View> ) )
        : (
  <View style = {styles.row_with_margin_and_line}>
          <StatProfile item = {{place: place, user: user, value:value}}/>
        </View> )
);
export default function RankingScreen({ navigation }) {

  const [data, setData] = React.useState();
  const [stats, setStats] = React.useState();

  const donations = collection(db, "donations");

    const getData = async () => {
        const snapshot = await getDocs(query(donations, orderBy("total", "desc"), limit(3)))
        let response = []
        let idx = 1;
        let json;
        snapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          json = doc.data()
          json["id"] = doc.id
          json["place"] = idx;
          response.push(json);
          idx ++;
          
        });
        const yourPosition = await getYourPosition();
        console.log("YP L : ", yourPosition.length);
        
        if (yourPosition.length > 0){
          response.push(yourPosition[0]);
        }
        
        console.log(response.length)
        setData(response)
    }
    
    const getStats = async () => {
      const stats = await getDoc(doc(donations, "stats"))
      let response = stats.exists() ? stats.data().total : 0;
      setStats(response)
    
  }
    const getYourPosition = async () => {
      const snapshot = await getDocs(query(donations, where("user", "==", auth["currentUser"]["displayName"]), limit(1)))
        let response = []
        let idx = 1;
        let json;
        snapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          json = doc.data()
          json["id"] = doc.id
          json["place"] = idx;
          json["isYourPosition"] = true
          response.push(json);
          idx ++;
          
        });
        return response;
        // setYourPosition(response)

    }

    React.useEffect(() => {
        getData()
        getStats()
        // getYourPosition()
    }, [])
   
  const renderItem = ({ item }) => {
   
    return <Item place = {item.place} user = {item.user} value = {item.donations} isYourPosition = {item.isYourPosition!= undefined ? item.isYourPosition : false}/>
    
  }
  return (
    <View style={styles.container}>
      <View style={styles.top_container}>
      <View style={{ marginTop: 20 }}>
        <InformacionIconButton screen={"Details"} />
      </View>
    </View>

      <View style={styles.main_container}>
          
        <Text style={styles.light_title_style}> Se parte de la ayuda! </Text>
        <Text style={styles.detailText}>{`Ayuda a BAMX con su mision de terminar con el 
hambre en mexico. Dona y ve nuestro progreso!`}</Text>
<View style = {{marginBottom : 15}}>
  <Text style={styles.veryBigText}> ${stats} </Text>
  </View>

<View style = {styles.textContainer}>
        </View> 
        <View style = {styles.dashboard}><Dashboard item = {data != undefined ? data[0] : {}}/></View>
        
        <View style={styles.button_container_row}>
          <TouchableOpacity style={styles.button_style_row_yellow} onPress = {getData}>
            <Text style={styles.button_text}>Donaciones</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_style_row_gray}>
            <Text style={styles.button_text}>Referidos</Text>
          </TouchableOpacity>
        </View>
    <View style = {styles.leaderboard}>
        <FlatList style = {{marginBottom: 10}}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id + item.place}
      />

        
       {/* <You item = {yourPosition != undefined ? yourPosition[0] : {}}/> */}
       </View>

        <View style={styles.button_container} onTouchEnd={() =>
          navigation.navigate('Donate')
        }>
          <TouchableOpacity style={styles.button_style}>
            <Text style={styles.button_text}>Donar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dashboard : {
    maxHeight: "25%"
  },
  leaderboard:{
    maxHeight: "30%"
    
  },
    veryBigText: {
        fontSize: 36,
        color: "#FBC714",
        fontWeight: "900"
    },
    row_with_margin: {
      paddingRight: 10,
      paddingLeft: 30,
        marginBottom: 6
    },
    row_with_margin_and_line: {
      paddingRight: 10,
      paddingLeft : 30,
        paddingBottom: 10,
        borderBottomColor: "#3A3A3A",
        borderBottomWidth: 2,
        marginBottom: 12
    },
  container: {
    backgroundColor: palette.background,
    flex: 1,
    paddingBottom:"45%",
  },
  textContainer: {
      marginBottom: 30
  },
  top_container: {
    display: "flex",
    flexDirection: "row-reverse",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    paddingHorizontal: 24,
    paddingTop : 15,
  },
  tiny_logo: {
    alignSelf: "flex-end",
  },
  link_button: {
    alignSelf: "flex-start",
    backgroundColor: palette.secondaryRed,
  },
  circle: {
    height: 42,
    width: 42,
    borderRadius: 42,
    backgroundColor: palette.secondaryRed,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  main_container: {
    display: "flex",
    alignItems: "center",
  },
  detailText : {
      paddingHorizontal: 36,
      textAlign: 'justify',
      fontSize: 13,
      color : palette.textColor,
      marginBottom: 7
  },
  light_title_style: {
    color: palette.textColor,
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 36,
    marginBottom : 7
  },
  title_style: {
    color: palette.blueText,
    fontSize: 24,
    fontWeight: "800",
    lineHeight: 36,
  },
  switch_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  section_title: {
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 24,
    marginTop: 10,
  },
  button_style_row: {
    backgroundColor: palette.primaryRed,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 100,
    marginHorizontal: 20,
    alignSelf: "flex-end",
  },
  button_style_row_gray: {
    backgroundColor: "#B8B8B8",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 100,
    marginHorizontal: 20,
    alignSelf: "flex-end",
  },
  button_style_row_yellow: {
    backgroundColor: "#FCC815",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 100,
    marginHorizontal: 20,
    alignSelf: "flex-end",
  },
  button_style: {
    backgroundColor: palette.primaryRed,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 10,
    width: 300,
    alignSelf: "flex-end",
  },
  button_text: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 18,
  },
  button_container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    marginTop: 10,
  },
  button_container_row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    marginTop: 10,
    marginBottom: 10,
  },
});
