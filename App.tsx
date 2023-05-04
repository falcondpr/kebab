import { useCallback } from "react";
import { View, Dimensions, Text } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Toast, {
  BaseToast,
  ToastConfigParams,
} from "react-native-toast-message";

import { Navigation } from "./navigation";

SplashScreen.preventAutoHideAsync();

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const toastConfig = {
  success: (props: any) => (
    <BaseToast
      {...props}
      style={{
        borderLeftColor: props.type === "success" ? "#2ECC71" : "red",
        marginTop: -20,
      }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 20,
        color: "#333",
      }}
      text2Style={{
        fontSize: 14,
        color: "#999",
      }}
    />
  ),
};

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
      <View
        style={{ flex: 1, backgroundColor: "#fff" }}
        onLayout={onLayoutRootView}
      >
        <Navigation />
        <Toast config={toastConfig} />
      </View>
    </QueryClientProvider>
  );
}
