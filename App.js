import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import ProductDetails from "./screens/ProductDetails";
import BottomTabs from "./components/BottomTabs";
import { StatusBar } from "expo-status-bar";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Intro">
        <Stack.Screen
          name="HomeScreen"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Product"
          component={ProductDetails}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
