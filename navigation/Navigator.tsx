import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { TabBarIcon } from "../components";
import { routes } from "../data/routes";
import { useAuthStore } from "../store";
import { colors } from "../styles/theme";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const user = useAuthStore((state) => state.user);

  return (
    <Tab.Navigator
      initialRouteName={
        !user && !user?._j ? "AuthScreen" : "HomeScreen"
      }
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          backgroundColor: "#fff",
          height: 60,
          display: !user && !user?._j ? "none" : "flex",
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
            tabBarInactiveTintColor: colors.lightPrimary,
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
