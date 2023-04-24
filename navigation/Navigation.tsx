import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import styled from "styled-components/native";

import { Login, Register, Auth } from "../screens";
import { Navigator } from "./";

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
