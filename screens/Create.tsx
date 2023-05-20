import React, { useEffect, useState } from "react";
import { View, Dimensions } from "react-native";
import { Formik } from "formik";
import styled from "styled-components/native";
import { Text, Input, Button } from "../ui";

import MainLayout from "../layout/Main";
import { BackButton } from "../components";
import { colors } from "../styles/theme";

const heightSize = Dimensions.get("screen").height;

export default function Create({ navigation }: any) {
  const [currentForm, setCurrentForm] = useState<number>(0);

  useEffect(() => {
    setCurrentForm(0);
  }, []);

  return (
    <MainLayout
      hideBottomBar
      routeName="CreateScreen"
      navigation={navigation}
    >
      <CreateContainer>
        <BackButton
          title="Crear producto"
          onPress={() => {
            currentForm > 0
              ? setCurrentForm(currentForm - 1)
              : navigation.goBack();
          }}
        />

        <Formik
          initialValues={{
            name: "",
            statusProduct: "",
            category: "",
            description: "",
            tags: [],
            price: 0,
          }}
          onSubmit={() => console.log("")}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
          }) => (
            <FormContainer>
              {currentForm === 0 ? (
                <Input
                  onBlur={handleBlur("name")}
                  label="nombre del producto"
                  value="s"
                  onChangeText={(text) => handleChange("name")}
                />
              ) : currentForm === 1 ? (
                <Input
                  onBlur={handleBlur("name")}
                  label="estado producto"
                  value="s"
                  onChangeText={(text) => handleChange("name")}
                />
              ) : currentForm === 2 ? (
                <Input
                  onBlur={handleBlur("name")}
                  label="categoria"
                  value="s"
                  onChangeText={(text) => handleChange("name")}
                />
              ) : currentForm === 3 ? (
                <Text>Detalle producto</Text>
              ) : (
                <Text>Lista imagenes</Text>
              )}

              <View>
                <Button
                  bgColor={colors.primary}
                  height="55px"
                  color="#fff"
                  onPress={() => setCurrentForm(currentForm + 1)}
                >
                  Siguiente
                </Button>
              </View>
            </FormContainer>
          )}
        </Formik>
      </CreateContainer>
    </MainLayout>
  );
}

const CreateContainer = styled.View`
  flex: 1;
  padding: 20px;
`;

const FormContainer = styled.View`
  margin-top: 20px;
  justify-content: space-between;
  height: ${heightSize - 150}px;
`;
