import React from "react";
import { View } from "react-native";

import ModalError from "../components/Modal/Error";
import { useAuthStore } from "../store";

export default function MainLayout({
  children,
  navigation,
}: {
  children: React.ReactNode;
  navigation: any;
}) {
  const user = useAuthStore((state) => state.user);

  return (
    <View style={{ flex: 1 }}>
      {!user ? (
        <ModalError
          routeName="Auth"
          title="Error!"
          message="Debes iniciar sesion!"
          navigation={navigation}
        />
      ) : (
        children
      )}
    </View>
  );
}
