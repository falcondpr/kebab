import React from "react";
import styled from "styled-components/native";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Navigator from "./Navigator";
import { Login, Register, Auth } from "../screens";

const SafeAreaView = styled.SafeAreaView``;

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="TabNavigator"
            component={Navigator}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Register"
            component={Register}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={Login}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Auth"
            component={Auth}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}
