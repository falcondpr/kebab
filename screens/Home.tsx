import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

export default function Home({ navigation }: any) {
  return (
    <View>
      <Text>Home</Text>
      <Button>
        <ButtonText
          style={{
            height: 50,
            backgroundColor: "#333",
            color: "#fff",
          }}
          onPress={() => navigation.navigate("Auth")}
        >
          go to auth
        </ButtonText>
      </Button>
    </View>
  );
}

const Button = styled.TouchableOpacity``;
const ButtonText = styled.Text``;
