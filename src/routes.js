import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
//Screen Imports
import Home from "./screens/HomeScreen/index";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: "News ",
            headerTintColor: "#FFF",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#3065AC" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
