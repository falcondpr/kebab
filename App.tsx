import styled from "styled-components/native";
import { StatusBar, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TabBarIcon from "./components/TabBarIcon";

const SafeAreaView = styled.SafeAreaView``;

const Stack = createNativeStackNavigator();

const routes = [
  {
    id: 1,
    name: "DetailsScren",
    path: "M9.71875 10.5C9.36458 10.5 9.0675 10.38 8.8275 10.14C8.5875 9.9 8.46792 9.60334 8.46875 9.25C8.46875 8.89584 8.58875 8.59875 8.82875 8.35875C9.06875 8.11875 9.36542 7.99917 9.71875 8H27.2187C27.5729 8 27.87 8.12 28.11 8.36C28.35 8.6 28.4696 8.89667 28.4687 9.25C28.4687 9.60417 28.3487 9.90125 28.1087 10.1413C27.8687 10.3813 27.5721 10.5008 27.2187 10.5H9.71875ZM9.71875 28C9.36458 28 9.0675 27.88 8.8275 27.64C8.5875 27.4 8.46792 27.1033 8.46875 26.75V20.5H8.25C7.85417 20.5 7.53125 20.3487 7.28125 20.0462C7.03125 19.7437 6.94792 19.395 7.03125 19L8.28125 12.75C8.34375 12.4583 8.48958 12.2188 8.71875 12.0313C8.94792 11.8438 9.20833 11.75 9.5 11.75H27.4375C27.7292 11.75 27.9896 11.8438 28.2187 12.0313C28.4479 12.2188 28.5937 12.4583 28.6562 12.75L29.9062 19C29.9896 19.3958 29.9062 19.7446 29.6562 20.0462C29.4062 20.3479 29.0833 20.4992 28.6875 20.5H28.4687V26.75C28.4687 27.1042 28.3487 27.4012 28.1087 27.6412C27.8687 27.8812 27.5721 28.0008 27.2187 28C26.8646 28 26.5675 27.88 26.3275 27.64C26.0875 27.4 25.9679 27.1033 25.9687 26.75V20.5H20.9687V26.75C20.9687 27.1042 20.8487 27.4012 20.6087 27.6412C20.3687 27.8812 20.0721 28.0008 19.7187 28H9.71875ZM10.9687 25.5H18.4687V20.5H10.9687V25.5Z",
    component: DetailsScreen,
  },
  {
    id: 2,
    name: "ProfileScreen",
    path: "M9.71875 10.5C9.36458 10.5 9.0675 10.38 8.8275 10.14C8.5875 9.9 8.46792 9.60334 8.46875 9.25C8.46875 8.89584 8.58875 8.59875 8.82875 8.35875C9.06875 8.11875 9.36542 7.99917 9.71875 8H27.2187C27.5729 8 27.87 8.12 28.11 8.36C28.35 8.6 28.4696 8.89667 28.4687 9.25C28.4687 9.60417 28.3487 9.90125 28.1087 10.1413C27.8687 10.3813 27.5721 10.5008 27.2187 10.5H9.71875ZM9.71875 28C9.36458 28 9.0675 27.88 8.8275 27.64C8.5875 27.4 8.46792 27.1033 8.46875 26.75V20.5H8.25C7.85417 20.5 7.53125 20.3487 7.28125 20.0462C7.03125 19.7437 6.94792 19.395 7.03125 19L8.28125 12.75C8.34375 12.4583 8.48958 12.2188 8.71875 12.0313C8.94792 11.8438 9.20833 11.75 9.5 11.75H27.4375C27.7292 11.75 27.9896 11.8438 28.2187 12.0313C28.4479 12.2188 28.5937 12.4583 28.6562 12.75L29.9062 19C29.9896 19.3958 29.9062 19.7446 29.6562 20.0462C29.4062 20.3479 29.0833 20.4992 28.6875 20.5H28.4687V26.75C28.4687 27.1042 28.3487 27.4012 28.1087 27.6412C27.8687 27.8812 27.5721 28.0008 27.2187 28C26.8646 28 26.5675 27.88 26.3275 27.64C26.0875 27.4 25.9679 27.1033 25.9687 26.75V20.5H20.9687V26.75C20.9687 27.1042 20.8487 27.4012 20.6087 27.6412C20.3687 27.8812 20.0721 28.0008 19.7187 28H9.71875ZM10.9687 25.5H18.4687V20.5H10.9687V25.5Z",
    component: ProfileScreen,
  },
];

function HomeScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
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

function DetailsScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Details Screen</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Profile Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }}>
          {/* <BackButton /> */}

          <StatusBar
            barStyle="dark-content"
            backgroundColor="white"
          />
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              options={{ headerShown: false }}
              name="Home"
              component={HomeScreen}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Details"
              component={DetailsScreen}
            />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </>
  );
}
