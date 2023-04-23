import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

const Button = styled.TouchableOpacity``;
const ButtonText = styled.Text``;

export default function Home({ navigation }: any) {
  return (
    <View>
      <Text>Home</Text>
      <Button>
        <ButtonText onPress={() => navigation.navigate("Login")}>
          go to login
        </ButtonText>
      </Button>
    </View>
  );
}
