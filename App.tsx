import styled from "styled-components/native";
import { useCallback } from "react";
import { StatusBar, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TabBarIcon from "./components/TabBarIcon";
import { routes } from "./data/routes";
import Login from "./screens/Login";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Home } from "./screens";

SplashScreen.preventAutoHideAsync();

const SafeAreaView = styled.SafeAreaView``;

const Stack = createNativeStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarActiveTintColor: "#333",
        tabBarStyle: {
          backgroundColor: "#fff",
          height: 60,
        },
      }}
    >
      {routes.map((route) => (
        <Tab.Screen
          key={route.id}
          name={route.name}
          component={route.component}
          options={{
            headerShown: false,
            tabBarInactiveTintColor: "#c2c2c2",
            tabBarIcon: ({ color }) => (
              <TabBarIcon color={color} path={route.path} />
            ),
            tabBarShowLabel: false,
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppins-Semibold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="white"
          />
          <Stack.Navigator>
            <Stack.Screen
              options={{ headerShown: false }}
              name="TabNavigator"
              component={TabNavigator}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Login"
              component={Login}
            />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </View>
  );
}
