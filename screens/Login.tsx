import React from "react";
import styled from "styled-components/native";

import { Heading, Input, Text } from "../ui";

export default function Login() {
  return (
    <LoginContainer>
      <Heading textAlign="center">Bienvenido!</Heading>
      <Text textAlign="center">Si aun no tienes</Text>
      <Text textAlign="center">una cuenta debes registrarte</Text>

      <LoginContainerForm>
        <Input label="username" marginBottom="20px" />
        <Input label="email" marginBottom="20px" />
        <Input label="contrasena" marginBottom="20px" />
        <Input label="confirmar contrasena" />
      </LoginContainerForm>
    </LoginContainer>
  );
}

const LoginContainer = styled.View`
  padding: 0 20px;
  padding-top: 60px;
`;

const LoginContainerForm = styled.View`
  margin-top: 20px;
`;
