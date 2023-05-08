import { Formik } from "formik";
import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import * as yup from "yup";
import Toast from "react-native-toast-message";

import { BackButton } from "../components";

import { Heading, Input, Text, Button } from "../ui";
import { loginUser } from "../services";
import { useAuthStore } from "../store";

const loginValidationSchema = yup.object().shape({
  emailOrUsername: yup
    .string()
    .email("El email no es valido")
    .required("El nombre de usuario es requerido"),
  password: yup.string().required("La contrasena es requerida"),
});

export default function Login({ navigation }: any) {
  const _login = useAuthStore((state) => state.login);

  const handleLogin = async (values: any) => {
    console.log(values);
    const response = await loginUser(values);
    console.log(response);
    _login(response?.data.token);
    Toast.show({
      type: "success",
      text1: "Sesion iniciada!",
      text2: "Acabas de iniciar sesion 👋",
    });
    navigation.navigate('HomeScreen');
  };

  return (
    <Formik
      validationSchema={loginValidationSchema}
      initialValues={{
        emailOrUsername: "",
        password: "",
      }}
      onSubmit={handleLogin}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        isValid,
      }) => (
        <LoginContainer>
          <View>
            <BackButton onPress={() => navigation.navigate("Auth")} />

            <LoginForm>
              <Heading textAlign="center">Hola de nuevo!</Heading>
              <Text textAlign="center">Si ya tienes</Text>
              <Text textAlign="center">una cuenta ahora ingresa</Text>

              <LoginContainerForm>
                <Input
                  onBlur={handleBlur("emailOrUsername")}
                  value={values.emailOrUsername}
                  onChangeText={handleChange("emailOrUsername")}
                  label="username o email"
                  marginBottom="20px"
                />
                <Input
                  onBlur={handleBlur("password")}
                  value={values.password}
                  onChangeText={handleChange("password")}
                  label="contrasena"
                  marginBottom="20px"
                  secureTextEntry={true}
                />

                <Button
                  color="#fff"
                  bgColor="#333"
                  marginTop="20px"
                  height="55px"
                  onPress={handleSubmit}
                >
                  Ingresar
                </Button>
              </LoginContainerForm>
            </LoginForm>
          </View>

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
      )}
    </Formik>
  );
}

const LoginContainer = styled.View`
  padding: 20px;
  justify-content: space-between;
  flex: 1;
`;

const LoginContainerForm = styled.View`
  margin-top: 20px;
`;

const LoginForm = styled.View`
  margin-top: 20px;
`;

const LoginFooter = styled.View`
  padding: 20px;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;
