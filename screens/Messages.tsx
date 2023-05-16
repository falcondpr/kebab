import React from "react";
import { Text } from "react-native";

import MainLayout from "../layout/Main";

export default function Messages({ navigation }: any) {
  return (
    <MainLayout routeName="MessagesScreen" navigation={navigation}>
      <Text>Messages</Text>
    </MainLayout>
  );
}
