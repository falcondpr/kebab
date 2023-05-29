import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { View, Dimensions } from "react-native";
import { Formik } from "formik";

import { Text, Input, Button } from "../ui";
import MainLayout from "../layout/Main";
import { colors } from "../styles/theme";

const heightSize = Dimensions.get("screen").height;
const widthSize = Dimensions.get("screen").width;
const bannerHeightSize = 300;

const images: string[] = [
  "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/6769371/pexels-photo-6769371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3965557/pexels-photo-3965557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3965548/pexels-photo-3965548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

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
        <View>
          <CreateBannerImage
            source={{
              uri: images[currentForm],
            }}
          />
        </View>

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

              <CreateFooter>
                <Button
                  width={widthSize / 2}
                  bgColor="transparent"
                  borderColor={colors.primary}
                  borderWidth="1px"
                  borderStyle="solid"
                  height="55px"
                  color={colors.primary}
                  onPress={() => {
                    if (currentForm === 0) {
                      return navigation.goBack();
                    }

                    setCurrentForm(currentForm - 1);
                  }}
                  marginRight="10px"
                >
                  Volver
                </Button>
                <Button
                  marginLeft="10px"
                  width={widthSize / 2}
                  bgColor={colors.primary}
                  height="55px"
                  color="#fff"
                  onPress={() => setCurrentForm(currentForm + 1)}
                >
                  Siguiente
                </Button>
              </CreateFooter>
            </FormContainer>
          )}
        </Formik>
      </CreateContainer>
    </MainLayout>
  );
}

const CreateContainer = styled.View`
  flex: 1;
`;

const FormContainer = styled.View`
  justify-content: space-between;
  height: ${heightSize - bannerHeightSize - 50}px;
  padding: 20px;
  padding-bottom: 0;
`;

const CreateBannerImage = styled.Image`
  width: 100%;
  height: ${bannerHeightSize}px;
`;

const CreateFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
