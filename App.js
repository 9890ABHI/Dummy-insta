import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Iconic from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Activity,
  Home,
  Profile,
  Reels,
  Search,
} from "./src/components/screens";
import Status from "./src/components/screens/screenComponents/Status";
import FriendProfile from "./src/components/screens/screenComponents/FriendProfile";
import EditProfile from "./src/components/screens/screenComponents/EditProfile";

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const BottomTabScreen = () => (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarHideOnKeyboard: true,
          tabBarShowLable: false,
          headerShown: false,
          tabBarStyle: {
            height: 70, // 50
          },
          tabBarIcon: ({ focused, size, colour }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home-sharp" : "home-outline";
              size = focused ? size + 8 : size + 2;
            } else if (route.name === "Search") {
              iconName = focused ? "search" : "ios-search-outline";
              size = focused ? size + 8 : size + 2;
            } else if (route.name === "Reels") {
              iconName = focused
                ? "caret-forward-circle"
                : "caret-forward-circle-outline";
              size = focused ? size + 8 : size + 2;
            } else if (route.name === "Activity") {
              iconName = focused ? "ios-heart" : "ios-heart-outline";
              size = focused ? size + 8 : size + 2;
            } else if (route.name === "Profile") {
              iconName = focused
                ? "ios-person-circle"
                : "ios-person-circle-outline";
              size = focused ? size + 8 : size + 2;
            }

            return <Iconic name={iconName} size={size} color={colour} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Reels" component={Reels} />
        <Tab.Screen name="Activity" component={Activity} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </>
  );
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Bottom" component={BottomTabScreen} />
        <Stack.Screen name="Status" component={Status} />
        <Stack.Screen name="FriendProfile" component={FriendProfile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// expo publish to launch project on expo
