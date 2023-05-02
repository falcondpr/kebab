import React, { useContext } from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import { UserContext } from "../context/UserContext";

export default function Home({ navigation }: any) {
  const { user } = useContext(UserContext);

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

        <ButtonText
          style={{ margin: 20, padding: 20, backgroundColor: "#3fd" }}
          onPress={() => console.log(user)}
        >
          obtener usuario logueado
        </ButtonText>
      </Button>
    </View>
  );
}

const Button = styled.TouchableOpacity``;
const ButtonText = styled.Text``;
