import React from "react";
import { Text } from "react-native";

import MainLayout from "../layout/Main";

export default function Search({ navigation }: any) {
  return (
    <MainLayout routeName="SearchScreen" navigation={navigation}>
      <Text>Search</Text>
    </MainLayout>
  );
}
