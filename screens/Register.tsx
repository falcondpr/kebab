import React, { useEffect, useState } from "react";
import { Keyboard, View } from "react-native";
import styled from "styled-components/native";

import { BackButton } from "../components";
import { Heading, Input, Text, Button } from "../ui";

interface IDotStep {
  active: boolean;
}

export default function Register({ navigation }: any) {
  const data = {
    email: "samu@correo.com",
    username: "samu",
    fullname: "Samuel Villalba",
    password: "123456",
  };

  const [stepValue, setStepValue] = useState<number>(0);

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

  useEffect(() => {
    Keyboard.dismiss();
  }, [stepValue]);

  return (
    <RegisterContainer>
      <View>
        <BackButton
          onPress={() =>
            stepValue
              ? setStepValue((v) => v - 1)
              : navigation.navigate("Auth")
          }
        />

        <RegisterForm>
          <Heading textAlign="center">Bienvenido!</Heading>
          <Text textAlign="center">Si aun no tienes</Text>
          <Text textAlign="center">una cuenta debes registrarte</Text>

          <RegisterContainerForm>
            {stepValue === 0 ? (
              <Input
                autoCapitalize="none"
                value={infoUser.email}
                onChangeText={(text) =>
                  setInfoUser({ ...infoUser, email: text })
                }
                label="email"
                marginBottom="20px"
              />
            ) : stepValue === 1 ? (
              <Input
                autoCapitalize="none"
                value={infoUser.username}
                onChangeText={(text) =>
                  setInfoUser({ ...infoUser, username: text })
                }
                label="username"
                marginBottom="20px"
              />
            ) : stepValue === 2 ? (
              <Input
                autoCapitalize="none"
                secureTextEntry={true}
                value={infoUser.password}
                onChangeText={(text) =>
                  setInfoUser({ ...infoUser, password: text })
                }
                label="contrasena"
                marginBottom="20px"
              />
            ) : (
              stepValue === 3 && (
                <Input
                  autoCapitalize="none"
                  secureTextEntry={true}
                  value={infoUser.confirmPassword}
                  onChangeText={(text) =>
                    setInfoUser({
                      ...infoUser,
                      confirmPassword: text,
                    })
                  }
                  label="confirmar contrasena"
                />
              )
            )}

            {stepValue !== 3 ? (
              <Button
                color="#fff"
                bgColor="#333"
                height="55px"
                onPress={() => setStepValue((v) => v + 1)}
              >
                Siguiente
              </Button>
            ) : (
              <Button
                color="#fff"
                bgColor="#333"
                marginTop="20px"
                height="55px"
                onPress={handleRegister}
              >
                Crear cuenta
              </Button>
            )}
          </RegisterContainerForm>
        </RegisterForm>
      </View>

      <View>
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

        <View
          style={{
            flexDirection: "row",
            marginTop: 15,
            marginBottom: 20,
            justifyContent: "center",
          }}
        >
          <DotStep active={stepValue === 0} />
          <DotStep active={stepValue === 1} />
          <DotStep active={stepValue === 2} />
          <DotStep active={stepValue === 3} />
        </View>
      </View>
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
  padding: 0 20px;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

const DotStep = styled.View<{ active?: boolean }>`
  width: 10px
  height: 10px;
  background-color: ${(props) => (props.active ? "#333" : "#fff")};
  border-width: 1px;
  border-style: solid;
  border-color: #333;
  margin: 0 4px;
  border-radius: 20px;
`;
