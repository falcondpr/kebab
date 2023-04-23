import React from "react";
import styled from "styled-components/native";

import { Heading, Input, Text, Button } from "../ui";

export default function Login({ navigation }: any) {
  return (
    <LoginContainer>
      <LoginForm>
        <Heading textAlign="center">Hola de nuevo!</Heading>
        <Text textAlign="center">Si ya tienes</Text>
        <Text textAlign="center">una cuenta ahora ingresa</Text>

        <LoginContainerForm>
          <Input label="username o email" marginBottom="20px" />
          <Input label="contrasena" marginBottom="20px" />

          <Button
            color="#fff"
            bgColor="#333"
            marginTop="20px"
            height="55px"
          >
            Crear cuenta
          </Button>
        </LoginContainerForm>
      </LoginForm>

      <LoginFooter>
        <Text color="#999" textAlign="center">
          Aun no tienes una cuenta?
        </Text>
        <Button
          onPress={() => navigation.navigate("Register")}
          color="#333"
        >
          Registrate
        </Button>
      </LoginFooter>
    </LoginContainer>
  );
}

const LoginContainer = styled.View`
  padding: 0 20px;
  padding-top: 60px;
  justify-content: space-between;
  flex: 1;
`;

const LoginContainerForm = styled.View`
  margin-top: 20px;
`;

const LoginForm = styled.View``;

const LoginFooter = styled.View`
  padding: 20px;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;
