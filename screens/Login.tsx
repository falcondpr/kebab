import React, { useState } from "react";
import { Formik } from "formik";
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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleLogin = async (values: any) => {
    setIsLoading(true);
    const response = await loginUser(values);
    console.log(response);
    _login(response?.data.token);
    Toast.show({
      type: "success",
      text1: "Sesion iniciada!",
      text2: "Acabas de iniciar sesion 👋",
    });
    navigation.navigate("HomeScreen");
    setIsLoading(false);
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
                <View style={{ marginBottom: 20 }}>
                  <Input
                    onBlur={handleBlur("emailOrUsername")}
                    value={values.emailOrUsername}
                    onChangeText={handleChange("emailOrUsername")}
                    label="email"
                  />
                  {isSubmitting && errors.emailOrUsername && (
                    <Text marginTop="7px" color="#f11">
                      {errors.emailOrUsername}
                    </Text>
                  )}
                </View>
                <View style={{ marginBottom: 0 }}>
                  <Input
                    onBlur={handleBlur("password")}
                    value={values.password}
                    onChangeText={handleChange("password")}
                    label="contrasena"
                    secureTextEntry={true}
                  />
                  {isSubmitting && errors.password && (
                    <Text marginTop="7px" color="#f11">
                      {errors.password}
                    </Text>
                  )}
                </View>

                <Button
                  color="#fff"
                  bgColor="#333"
                  marginTop="20px"
                  height="55px"
                  isLoading={isLoading}
                  onPress={() => {
                    handleSubmit();
                    setIsSubmitting(true);
                  }}
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
