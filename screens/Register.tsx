import { useMutation } from "@tanstack/react-query/build/lib/useMutation";
import React, { useState } from "react";
import { View } from "react-native";
import styled from "styled-components/native";

import { BackButton } from "../components";

import { Heading, Input, Text, Button } from "../ui";
import { registerUser } from "../utils/auth";

export default function Register({ navigation }: any) {
  const data = {
    email: "samu@correo.com",
    username: "samu",
    fullname: "Samuel Villalba",
    password: "123456",
  };

  const [infoUser, setInfoUser] = useState<{
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
  }>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleRegister = async () => {
    // const response = await registerUser(data);
    // console.log("res", response);

    console.log(infoUser);
  };

  return (
    <RegisterContainer>
      <View>
        <BackButton onPress={() => navigation.navigate("Auth")} />

        <RegisterForm>
          <Heading textAlign="center">Bienvenido!</Heading>
          <Text textAlign="center">Si aun no tienes</Text>
          <Text textAlign="center">una cuenta debes registrarte</Text>

          <RegisterContainerForm>
            <Input
              value={infoUser.username}
              onChangeText={(text) =>
                setInfoUser({ ...infoUser, username: text })
              }
              label="username"
              marginBottom="20px"
            />
            <Input
              value={infoUser.email}
              onChangeText={(text) =>
                setInfoUser({ ...infoUser, email: text })
              }
              label="email"
              marginBottom="20px"
            />
            <Input
              value={infoUser.password}
              onChangeText={(text) =>
                setInfoUser({ ...infoUser, password: text })
              }
              label="contrasena"
              marginBottom="20px"
            />
            <Input
              value={infoUser.confirmPassword}
              onChangeText={(text) =>
                setInfoUser({ ...infoUser, confirmPassword: text })
              }
              label="confirmar contrasena"
            />

            <Button
              color="#fff"
              bgColor="#333"
              marginTop="20px"
              height="55px"
              onPress={handleRegister}
            >
              Crear cuenta
            </Button>
          </RegisterContainerForm>
        </RegisterForm>
      </View>

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
  padding: 20px;
  justify-content: space-between;
  flex: 1;
`;

const RegisterContainerForm = styled.View`
  margin-top: 20px;
`;

const RegisterForm = styled.View`
  margin-top: 20px;
`;

const RegisterFooter = styled.View`
  padding: 20px;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;
