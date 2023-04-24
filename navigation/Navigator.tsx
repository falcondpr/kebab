import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { TabBarIcon } from "../components";
import { routes } from "../data/routes";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
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
