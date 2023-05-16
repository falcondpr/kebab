import React from "react";
import { View } from "react-native";
import BottomBar from "../components/BottomBar";

import ModalError from "../components/Modal/Error";
import { useAuthStore } from "../store";

export default function MainLayout({
  children,
  navigation,
  routeName,
  hideBottomBar,
}: {
  children: React.ReactNode;
  navigation: any;
  routeName: string;
  hideBottomBar?: boolean;
}) {
  const user = useAuthStore((state) => state.user);

  return (
    <View style={{ flex: 1 }}>
      {!user && !user?._j ? (
        <ModalError
          routeName="Auth"
          title="Error!"
          message="Debes iniciar sesion!"
          navigation={navigation}
        />
      ) : (
        <>
          {children}
          <BottomBar
            hideBottomBar={hideBottomBar}
            navigation={navigation}
            routeName={routeName}
          />
        </>
      )}
    </View>
  );
}
