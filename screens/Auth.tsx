import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";

import { Button, Heading, Text } from "../ui";

const windowHeight = Dimensions.get("window").height;

export default function Auth({ navigation }: any) {
  return (
    <AuthContainer>
      <AuthImage
        source={require("../assets/images/auth-background.png")}
      />
      <AuthInfoContainer>
        <Heading>Empieza a comprar y vender de forma segura</Heading>
        <TextAuth>
          Se prima la experiencia del usuario y la seguridad usando
          nuestro sitio
        </TextAuth>

        <AuthInfoFooter>
          <Button
            onPress={() => navigation.navigate("Register")}
            color="#fff"
            height="55px"
            bgColor="#333"
          >
            Crear cuenta
          </Button>
          <Button
            onPress={() => navigation.navigate("Login")}
            color="#333"
            height="55px"
            bgColor="#fff"
          >
            Inicia sesion
          </Button>
        </AuthInfoFooter>
      </AuthInfoContainer>
    </AuthContainer>
  );
}

const AuthContainer = styled.View`
  flex: 1;
`;

const AuthImage = styled.ImageBackground`
  height: ${windowHeight / 1.5}px;
`;

const AuthInfoContainer = styled.View`
  background-color: #fff;
  flex: 1;
  margin-top: -50px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding: 24px 30px;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const TextAuth = styled(Text)`
  font-size: 20px;
  margin-top: 10px;
`;

const AuthInfoFooter = styled.View`
  flex-direction: row;
  flex: 1;
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
