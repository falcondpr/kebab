import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import Toast from "react-native-toast-message";
import * as yup from "yup";
import { Keyboard, View } from "react-native";
import { Formik } from "formik";

import { BackButton } from "../components";
import { Heading, Input, Text, Button } from "../ui";
// import { registerUser } from "../services";
import { useAuthStore } from "../store";

const registerValidationSchema = yup.object().shape({
  fullname: yup.string().required("El nombre es requerido"),
  username: yup
    .string()
    .required("El nombre de usuario es requerido"),
  email: yup
    .string()
    .email("El email no es valido")
    .required("El email es requerido"),
  password: yup
    .string()
    .min(
      8,
      ({ min }) =>
        `La contrasena debe tener al menos ${min} caracteres`
    )
    .required("La contrasena es requerida"),
});

export default function Register({ navigation }: any) {
  const [stepValue, setStepValue] = useState<number>(0);
  const _login = useAuthStore((state) => state.login);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleRegister = async (values: any) => {
    console.log(values);

    Toast.show({
      type: "success",
      text1: "Cuenta creada",
      text2: "Acabas de iniciar sesion 👋",
    });
    // const response = await registerUser(infoUser);
    // const token = response?.data.token;
    // _login(token);
    // navigation.navigate("HomeScreen");
  };

  useEffect(() => {
    Keyboard.dismiss();
  }, [stepValue]);

  return (
    <Formik
      validationSchema={registerValidationSchema}
      initialValues={{
        fullname: "",
        username: "",
        password: "",
        confirmPassword: "",
        email: "",
      }}
      onSubmit={handleRegister}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        isValid,
        setValues,
      }) => (
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
              <Text textAlign="center">
                una cuenta debes registrarte
              </Text>

              <RegisterContainerForm>
                {stepValue === 0 ? (
                  <>
                    <Input
                      value={values.fullname}
                      onChangeText={handleChange("fullname")}
                      label="nombre"
                      marginBottom="10px"
                      onBlur={handleBlur("fullname")}
                    />
                    {isSubmitting && errors.fullname && (
                      <Text color="#f11">{errors.fullname}</Text>
                    )}
                  </>
                ) : stepValue === 1 ? (
                  <>
                    <Input
                      autoCapitalize="none"
                      value={values.email}
                      onChangeText={handleChange("email")}
                      label="email"
                      marginBottom="10px"
                      onBlur={handleBlur("email")}
                    />
                    {isSubmitting && errors.email && (
                      <Text color="#f11">{errors.email}</Text>
                    )}
                  </>
                ) : stepValue === 2 ? (
                  <>
                    <Input
                      autoCapitalize="none"
                      value={values.username}
                      onChangeText={handleChange("username")}
                      label="username"
                      marginBottom="10px"
                      onBlur={handleBlur("username")}
                    />
                    {isSubmitting && errors.username && (
                      <Text color="#f11">{errors.username}</Text>
                    )}
                  </>
                ) : stepValue === 3 ? (
                  <>
                    <Input
                      autoCapitalize="none"
                      secureTextEntry={true}
                      value={values.password}
                      onChangeText={handleChange("password")}
                      label="contrasena"
                      marginBottom="10px"
                      onBlur={handleBlur("password")}
                    />
                    {isSubmitting && errors.password && (
                      <Text color="#f11">{errors.password}</Text>
                    )}
                  </>
                ) : (
                  stepValue === 4 && (
                    <>
                      <Input
                        autoCapitalize="none"
                        secureTextEntry={true}
                        value={values.confirmPassword!}
                        onChangeText={handleChange("confirmPassword")}
                        label="confirmar contrasena"
                        onBlur={handleBlur("confirmPassword")}
                      />
                      {isSubmitting && errors.confirmPassword && (
                        <Text color="#f11">
                          {errors.confirmPassword}
                        </Text>
                      )}
                    </>
                  )
                )}

                {stepValue !== 4 ? (
                  <Button
                    color="#fff"
                    bgColor="#333"
                    height="55px"
                    marginTop="10px"
                    onPress={() => {
                      setStepValue((v) => v + 1);
                    }}
                  >
                    Siguiente
                  </Button>
                ) : (
                  <Button
                    color="#fff"
                    bgColor="#333"
                    marginTop="20px"
                    height="55px"
                    onPress={() => {
                      setIsSubmitting(true);
                      if (errors.fullname) return setStepValue(0);
                      if (errors.email) return setStepValue(1);
                      if (errors.username) return setStepValue(2);
                      if (errors.password) return setStepValue(3);
                      if (errors.confirmPassword)
                        return setStepValue(4);
                      handleSubmit();
                    }}
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
              <DotStep
                error={!!errors.fullname && isSubmitting}
                active={stepValue === 0}
              />
              <DotStep
                error={!!errors.email && isSubmitting}
                active={stepValue === 1}
              />
              <DotStep
                error={!!errors.username && isSubmitting}
                active={stepValue === 2}
              />
              <DotStep
                error={!!errors.password && isSubmitting}
                active={stepValue === 3}
              />
              <DotStep
                error={!!errors.confirmPassword && isSubmitting}
                active={stepValue === 4}
              />
            </View>
          </View>
        </RegisterContainer>
      )}
    </Formik>
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
  margin-top: 16px;
`;

const DotStep = styled.View<{ active?: boolean; error?: boolean }>`
  width: 10px
  height: 10px;
  background-color: ${(props) =>
    props.active && props.error
      ? "#ff0000"
      : props.active
      ? "#333"
      : "#fff"};
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => (props.error ? "#ff0000" : "#333")};
  margin: 0 4px;
  border-radius: 20px;
`;
