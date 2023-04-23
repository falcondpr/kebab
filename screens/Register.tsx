import React from "react";
import styled from "styled-components/native";

import { Heading, Input, Text, Button } from "../ui";

export default function Register({ navigation }: any) {
  return (
    <RegisterContainer>
      <RegisterForm>
        <Heading textAlign="center">Bienvenido!</Heading>
        <Text textAlign="center">Si aun no tienes</Text>
        <Text textAlign="center">una cuenta debes registrarte</Text>

        <RegisterContainerForm>
          <Input label="username" marginBottom="20px" />
          <Input label="email" marginBottom="20px" />
          <Input label="contrasena" marginBottom="20px" />
          <Input label="confirmar contrasena" />

          <Button
            color="#fff"
            bgColor="#333"
            marginTop="20px"
            height="55px"
          >
            Crear cuenta
          </Button>
        </RegisterContainerForm>
      </RegisterForm>

      <RegisterFooter>
        <Text color="#999" textAlign="center">
          Ya tienes una cuenta?
        </Text>
        <Button
          color="#333"
          onPress={() => navigation.navigate("Login")}
        >
          Inicia sesion
        </Button>
      </RegisterFooter>
    </RegisterContainer>
  );
}

const RegisterContainer = styled.View`
  padding: 0 20px;
  padding-top: 60px;
  justify-content: space-between;
  flex: 1;
`;

const RegisterContainerForm = styled.View`
  margin-top: 20px;
`;

const RegisterForm = styled.View``;

const RegisterFooter = styled.View`
  padding: 20px;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;
