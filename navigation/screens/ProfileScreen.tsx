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
} from "react-native";
import * as Clipboard from "expo-clipboard";
import palette from "../../palette";
import StatProfile from "../../components/StatProfile";
import ProfileMap from "../../components/ProfileMap";
import { signOut } from "firebase/auth";
import { query, orderBy, collection, getDocs} from "firebase/firestore";  
import { auth, db } from "../../firebase";
import { AuthContext } from "../../context/AuthContext";
import InformacionIconButton from "../../components/InformacionIconButton";
import {
  doc,
  DocumentReference,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";

export default function ProfileScreen({ navigation }) {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const [donatePosition, setDonatePosition] = React.useState(false);
  const [numeroReferidos, setNumeroReferidos] = React.useState(false);
  const [puntosTotales, setPuntosTotales] = React.useState(false);

  const { currentUser } = React.useContext(AuthContext);
  const [name, setName] = React.useState("");

  const getDonatePosition = async () => {
    const donations = collection(db, "donations");
    const snapshot = await getDocs(query(donations, orderBy("donations", "desc")))
        let response = {place: -1, user: "Carlo", donations: 0}; 
        let idx = 1;
        let json;
        
        snapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          json = doc.data()
          if (json["user"] == "Carlo")
          {
            response["place"] = idx;
            response["user"] = "Carlo"
            response["donations"] = json["donations"]
          }
          
          idx ++;

          
        });
        setDonatePosition(response);
  }

  const getNumeroReferidos = async () => {

  }

  const getPuntosTotales = async () => {
    
  }

  const toggleSwitch = async () => {
    const docRef = doc(db, "users", currentUser.uid);
    setIsEnabled((previousState) => !previousState);
    await updateDoc(docRef, {
      public: !isEnabled,
    });
  };

  const signOutAccount = () => {
    signOut(auth);
    navigation.navigate("SignIn", {});
  };

  const getReferralLink = async () => {
    let baseUrl: string = "http://localhost:8080/descargar/referral/?id=";
    await Clipboard.setStringAsync(baseUrl.concat(currentUser.uid));
    console.log("Copied to clipboard!");
  };

  React.useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "users", currentUser.uid);
      const docSnap = await getDoc(docRef);
      const donatePosition = await getDonatePosition();
      setName(docSnap.data().name);
      setIsEnabled(docSnap.data().public);
    };

    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [currentUser]);

  return (
    <View style={styles.container}>
      <View style={styles.top_container}>
        <View>
          <InformacionIconButton screen={"Details"} />
        </View>
        <View>
          <TouchableOpacity style={styles.circle} onPress={getReferralLink}>
            <Image source={require("../../assets/akar-icons_link-chain.png")} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.main_container}>
        <Text style={styles.title_style}> {name} </Text>
        <Text> @{currentUser.displayName} </Text>
        <View style={styles.switch_container}>
          <Text> Cuenta publica </Text>
          <Switch
            onValueChange={toggleSwitch}
            value={isEnabled}
            trackColor={{ false: "#767577", true: "#2CC9AC" }}
            thumbColor={isEnabled ? "#229C86" : "#f4f3f4"}
          />
        </View>

        <View>
          <Text style={styles.section_title}> Donaciones directas </Text>
          <StatProfile item={{ place: donatePosition["place"], 
                               user: donatePosition["user"], 
                               value: donatePosition["donations"]}} />
        </View>

        <View>
          <Text style={styles.section_title}> Numero de referidos </Text>
          <StatProfile item={{ place: "1", user: "Tu", value: "1" }} />
        </View>

        <View>
          <Text style={styles.section_title}> Puntos Totales </Text>
          <StatProfile item={{ place: "1", user: "Tu", value: "1" }} />
        </View>

        <ProfileMap />
        <View style={styles.button_container}>
          <TouchableOpacity
            style={styles.button_style}
            onPress={signOutAccount}
          >
            <Text style={styles.button_text}>Cerrar sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.background,
    flex: 1,
  },
  top_container: {
    display: "flex",
    flexDirection: "row-reverse",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 24,
    padding: 24,
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
  button_style: {
    backgroundColor: palette.primaryRed,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 100,

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
});
