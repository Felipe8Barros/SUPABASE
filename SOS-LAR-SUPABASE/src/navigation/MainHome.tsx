import React from "react";
import {  
    View,
    Image,
    ImageBackground,
} from "react-native";
import {
    Layout,
    Button,
} from "react-native-rapi-ui";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/auth/Login";
import HomeAuth from "../screens/HomeAuth";

const MainHome = createNativeStackNavigator();
const Home = () => {
  return (
    <MainHome.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainHome.Screen name="HomeAuth" component={HomeAuth} />
      <MainHome.Screen name="Login" component={Login} />
    </MainHome.Navigator>
  );
};

export default Home;