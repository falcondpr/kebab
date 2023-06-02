import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components/native";
import { View, Dimensions } from "react-native";
import { Formik } from "formik";
import {
  Radio,
  Select,
  Button as ButtonNativeBase,
  Flex,
  Switch,
} from "native-base";

import MainLayout from "../layout/Main";
import { Text, Input, Button } from "../ui";
import { colors } from "../styles/theme";

interface IFormContainer {
  height: number;
}

const { height: heightSize } = Dimensions.get("screen");
const { width } = Dimensions.get("screen");
const height = heightSize - 26;

const bannerHeightSize = 300;

const images: string[] = [
  "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/6769371/pexels-photo-6769371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3965557/pexels-photo-3965557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3965548/pexels-photo-3965548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

export default function Create({ navigation }: any) {
  const [currentForm, setCurrentForm] = useState<number>(0);

  const refNewButton: any = useRef(null);
  const refOldButton: any = useRef(null);

  useEffect(() => {
    setCurrentForm(1);
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
            statusProduct: false,
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
            resetForm,
            setFormikState,
            errors,
          }) => (
            <FormContainer height={height}>
              {currentForm === 0 ? (
                <Input
                  onBlur={handleBlur("name")}
                  label="nombre del producto"
                  value="s"
                  onChangeText={(text) => handleChange("name")}
                />
              ) : currentForm === 1 ? (
                <View>
                  <Text fontSize="14px">Estado del producto</Text>

                  <Flex flexDir="row" alignItems="center">
                    <Text
                      color={colors.primary}
                      fontSize="18px"
                      marginRight="5px"
                    >
                      Es nuevo?
                    </Text>
                    <Switch
                      defaultIsChecked={values.statusProduct}
                      value={values.statusProduct}
                      // onValueChange={(value) => setState}
                      size="lg"
                    ></Switch>
                  </Flex>
                </View>
              ) : currentForm === 2 ? (
                <CategoryProductContainer>
                  <Select
                    height="56px"
                    rounded="6px"
                    fontSize="16px"
                    borderColor={colors.primary}
                    color={colors.primary}
                    placeholder="Seleccione una categoría"
                    // defaultValue={values.category}
                    selectedValue={values.category}
                    onValueChange={handleChange("category")}
                  >
                    <Select.Item label="Prendas" value="clothe" />
                    <Select.Item label="Tecnologia" value="tech" />
                    <Select.Item label="Mueblería" value="table" />
                  </Select>
                </CategoryProductContainer>
              ) : currentForm === 3 ? (
                <Text>Detalle producto</Text>
              ) : (
                <Text>Lista imagenes</Text>
              )}

              <CreateFooter>
                <Button
                  width={(width / 2).toString()}
                  bgColor="transparent"
                  borderColor={colors.primary}
                  borderWidth="1px"
                  borderStyle="solid"
                  height="60px"
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
                  width={(width / 2).toString()}
                  bgColor={colors.primary}
                  height="60px"
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

const StatusProductContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const StatusProductButton = styled.TouchableOpacity`
  border: 1px solid ${colors.primary};
  padding: 12px;
  border-radius: 4px;
  width: ${width / 2 - 30}px;
`;

const CategoryProductContainer = styled.View``;

const FormContainer = styled.View<IFormContainer>`
  justify-content: space-between;
  height: ${(props) => props.height - bannerHeightSize - 24}px;
  padding: 0 20px;
  padding-bottom: 26px;
  padding-top: 20px;
`;

const CreateBannerImage = styled.Image`
  width: 100%;
  height: ${bannerHeightSize}px;
`;

const CreateFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
