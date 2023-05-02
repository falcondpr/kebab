import { useCallback } from "react";
import { View, Dimensions, Text } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import { Navigation } from "./navigation";
import { UserProvider } from "./context";

SplashScreen.preventAutoHideAsync();

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function App() {
  const queryClient = new QueryClient();

  const [fontsLoaded] = useFonts({
    "Poppins-Semibold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  // TODO: usar luego un componente loader para reutilizar
  if (!fontsLoaded)
    return (
      <View style={{ height: windowHeight, width: windowWidth }}>
        <Text style={{ fontSize: 24 }}>Cargando..</Text>
      </View>
    );

  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <View
          style={{ flex: 1, backgroundColor: "#fff" }}
          onLayout={onLayoutRootView}
        >
          <Navigation />
        </View>
      </UserProvider>
    </QueryClientProvider>
  );
}
