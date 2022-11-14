import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import palette from "../palette";

import MapView, { Polyline, Marker } from "react-native-maps";

export default function ProfileMap() {
  return (
    <View style={{ marginTop: 7 }}>
      <View style={styles.header_container}>
        <Text style={styles.header_text}>Lugares donde estamos apoyando: </Text>
      </View>

      <MapView
        style={styles.mapa}
        initialRegion={{
          latitude: 20.655886,
          longitude: -103.355201,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          coordinate={{
            latitude: 20.655886,
            longitude: -103.355201,
          }}
          title="BANMX Guadalajara"
          description="Oficinas BANMS Gdl"
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  header_container: {
    backgroundColor: palette.yellow,
    padding: 3,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 42,
  },
  header_text: {
    color: "#FFFFFF",
    fontWeight: "400",
    fontSize: 15,
    alignSelf: "center",
  },
  Image: {
    width: 350,
    height: 200,
    borderRadius: 30,
    marginTop: 10,
  },
  mapa: {
    width: 350,
    height: 200,
    borderRadius: 30,
  },
});
