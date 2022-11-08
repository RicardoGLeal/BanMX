import * as React from "react";
import { Platform, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { BlurView } from "expo-blur";
import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import HomeScreen from "./screens/HomeScreen";
import RankingScreen from "./screens/RankingScreen";
import SettingsScreen from "./screens/SettingsScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import VolunteerFormScreen from "./screens/VolunteerFormScreen";
import AllyFormScreen from "./screens/AllyFormScreen";
import DetailsScreen from "./screens/DetailsScreen";
import CreateAccountScreen from "./screens/CreateAccountScreen";

//Screen namesrr
const homeName = "Home";
const detailsName = "Details";
const profileName = "Profile";
const rankingName = "Ranking";

const RootStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Root() {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#FFE500",
        tabBarInactiveTintColor: "#FFF2CB",
        tabBarActiveBackgroundColor: "#F12749",
        tabBarInactiveBackgroundColor: "#F12749",
        tabBarStyle: {
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          borderTopWidth: 0,
          paddingTop: 10,
          position: "absolute",
          backgroundColor: "#F12749",
          elevation: 0,
        },
        tabBarBadgeStyle: {
          padding: 10,
        },
        tabBarLabelStyle: {
          padding: 0,
          fontSize: 10,
        },

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? "home" : "home-outline";
          } else if (rn === rankingName) {
            iconName = focused ? "list" : "list-outline";
          } else if (rn === profileName) {
            iconName = focused ? "person" : "person-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name={homeName} component={HomeScreen} />
      <Tab.Screen name={profileName} component={AllyFormScreen} />
      <Tab.Screen name={rankingName} component={RankingScreen} />
    </Tab.Navigator>
  );
}

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === detailsName) {
              iconName = focused ? "list" : "list-outline";
            } else if (rn === profileName) {
              iconName = focused ? "person" : "person-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#FFE500",
          inactiveTintColor: "#FFF2CB",

          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: {
            backgroundColor: "#F12749",
            padding: 10,
            height: styles.height,
          },
        }}
      >
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={profileName} component={SignUpScreen} />
        <Tab.Screen name={detailsName} component={RankingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  height: Platform.OS === "ios" ? 90 : 70,
});

export default MainContainer;
