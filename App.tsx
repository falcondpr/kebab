import styled from "styled-components/native";
import { StatusBar } from "react-native";

import BackButton from "./components/BackButton";

const SafeAreaView = styled.SafeAreaView``;

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <BackButton />
    </SafeAreaView>
  );
}
