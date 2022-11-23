import * as React from "react";
import { Platform, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AuthContext } from "../context/AuthContext";

// Screens
import DonateScreen from "./screens/DonateScreen";
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
const donateName = "Donate";

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
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          borderTopWidth: 0,
          paddingTop: 10,
          position: "absolute",
          backgroundColor: "#F12749",
          elevation: 0,
          height: Platform.OS === "ios" ? 90 : 60,
        },
        tabBarBadgeStyle: {
          padding: 10,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          paddingBottom: 10,
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
      <Tab.Screen name={rankingName} component={RankingScreen} />
      <Tab.Screen name={profileName} component={ProfileScreen} />
    </Tab.Navigator>
  );
}

function MainContainer() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen
          name={"SignIn"}
          component={SignInScreen}
          screenOptions={{ headerShown: false }}
        />
        <RootStack.Screen
          name={"SignUp"}
          component={SignUpScreen}
          screenOptions={{ headerShown: false }}
        />
        <RootStack.Screen
          name="Root"
          component={Root}
          screenOptions={{ headerShown: false }}
        />
        <RootStack.Screen
          name="Details"
          component={DetailsScreen}
          screenOptions={{ headerShown: false }}
        />
        <RootStack.Screen
          name="Donate"
          component={DonateScreen}
          screenOptions={{ headerShown: false }}
        />
        <RootStack.Screen
          name="VolunteerForm"
          component={VolunteerFormScreen}
          screenOptions={{ headerShown: false }}
        />
        <RootStack.Screen
          name="AllyForm"
          component={AllyFormScreen}
          screenOptions={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  height: Platform.OS === "ios" ? 90 : 120,
});

export default MainContainer;
