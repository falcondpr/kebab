import { useCallback } from "react";
import { View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { Navigation } from "./navigation";
import UserProvider from "./context/UserContext";
import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query/build/lib/QueryClientProvider";

SplashScreen.preventAutoHideAsync();

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

  if (!fontsLoaded) return null;

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
