import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  Radio,
  RadioGroup,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import * as Yup from "yup";
import {
  Formik,
  Form,
  ErrorMessage,
  Field,
  FieldProps,
} from "formik";

import { BackButton } from "@/components";
import { Button, Input, Select, Textarea } from "@/ui";
import { statusProduct } from "@/data/statusProduct";
import { CATEGORIES } from "@/data";

const CreateProductSchema = Yup.object().shape({
  name: Yup.string().min(5, "Es muy corto!").required("Es requerido"),
  status: Yup.string().required("Es requerido"),
  description: Yup.string()
    .required("Es requerido")
    .min(20, "La descripcion debe ser mas extensa"),
  category: Yup.string()
    .required("Es requerido")
    .min(2, "Es muy corto!"),
});

const initialValuesCreateProduct = {
  name: "",
  status: "",
  category: "",
  description: "",
};

export default function CreateProduct() {
  const { colorMode } = useColorMode();

  const handleCreateProduct = async (
    values: any,
    resetForm: () => void
  ) => {
    console.log(values);
    console.log("sending");
    resetForm();
  };

  const statusProductResponse = statusProduct();

  return (
    <Box>
      <BackButton goBackRoute="/" title="Crear publicacion" />

      <Formik
        validationSchema={CreateProductSchema}
        initialValues={initialValuesCreateProduct}
        onSubmit={(values, { resetForm }) =>
          handleCreateProduct(values, resetForm)
        }
      >
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <Box px="20px">
            <Form>
              <FormControl
                isInvalid={!!errors.name && !!touched.name}
                mb="20px"
              >
                <Input
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Introduce el nombre"
                />
                <ErrorMessage
                  name="name"
                  component={() => (
                    <FormErrorMessage>{errors.name}</FormErrorMessage>
                  )}
                />
              </FormControl>

              <Field name="status">
                {({ field }: FieldProps) => {
                  const { onChange, ...rest } = field;

                  return (
                    <FormControl
                      id="status"
                      isInvalid={!!errors.status && !!touched.status}
                      mb="20px"
                    >
                      <RadioGroup
                        display="flex"
                        gap="0 20px"
                        id="status"
                        {...rest}
                      >
                        {statusProductResponse.map((status) => (
                          <Box flex="1" key={status.id}>
                            <Radio
                              name="status"
                              ref={status.ref}
                              display="none"
                              h="0"
                              w="0"
                              onChange={onChange}
                              value={status.value}
                            >
                              {status.name}
                            </Radio>

                            <Button
                              type="button"
                              name={status.value}
                              display="block"
                              border="1px solid"
                              borderColor={
                                colorMode === "light"
                                  ? values.status === status.value
                                    ? "transparent"
                                    : "suvap.border"
                                  : values.status === status.value
                                  ? "white"
                                  : "suvap.border"
                              }
                              bgColor={
                                colorMode === "light"
                                  ? values.status === status.value
                                    ? "suvap.darkGray"
                                    : "white"
                                  : values.status === status.value
                                  ? "white"
                                  : "suvap.darkGray"
                              }
                              color={
                                colorMode === "light"
                                  ? values.status === status.value
                                    ? "white"
                                    : "suvap.darkGray"
                                  : values.status === status.value
                                  ? "suvap.darkGray"
                                  : "white"
                              }
                              onClick={() =>
                                status.ref.current?.click()
                              }
                            >
                              {status.name}
                            </Button>
                          </Box>
                        ))}
                      </RadioGroup>

                      <ErrorMessage
                        name="status"
                        component={() => (
                          <FormErrorMessage>
                            {errors.status}
                          </FormErrorMessage>
                        )}
                      />
                    </FormControl>
                  );
                }}
              </Field>

              <Field name="category">
                {({ field }: FieldProps) => {
                  const { onChange, ...rest } = field;

                  return (
                    <FormControl
                      id="category"
                      mb="20px"
                      isInvalid={
                        !!errors.category && !!touched.category
                      }
                    >
                      <Select
                        name="category"
                        onChange={onChange}
                        value={values.category}
                        onBlur={handleBlur}
                        id="category"
                      >
                        {CATEGORIES.map((category) => (
                          <option
                            key={category.id}
                            value={category.value}
                            id="category"
                          >
                            {category.name}
                          </option>
                        ))}
                      </Select>

                      <ErrorMessage
                        name="category"
                        component={() => (
                          <FormErrorMessage>
                            {errors.category}
                          </FormErrorMessage>
                        )}
                      />
                    </FormControl>
                  );
                }}
              </Field>

              <FormControl
                mb="20px"
                isInvalid={
                  !!errors.description && !!touched.description
                }
              >
                <Textarea
                  name="description"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.description}
                  placeholder="Detalles del producto"
                />

                <ErrorMessage
                  name="description"
                  component={() => (
                    <FormErrorMessage>
                      {errors.description}
                    </FormErrorMessage>
                  )}
                />
              </FormControl>

              <Button type="submit">Crear</Button>
            </Form>
          </Box>
        )}
      </Formik>
    </Box>
  );
}
