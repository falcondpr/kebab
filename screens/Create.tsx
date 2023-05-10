import React from "react";
import { Text } from "react-native";

import MainLayout from "../layout/Main";

export default function Create({ navigation }: any) {
  return (
    <MainLayout navigation={navigation}>
      <Text>Create</Text>
    </MainLayout>
  );
}
