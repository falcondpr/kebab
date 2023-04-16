import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Stack,
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
import { Button } from "@/ui";
import { useRef } from "react";
import { statusProduct } from "@/data/statusProduct";

const CreateProductSchema = Yup.object().shape({
  name: Yup.string().min(5, "Es muy corto!").required("Es requerido"),
  status: Yup.string().required("Es requerido"),
});

const initialValuesCreateProduct = {
  name: "",
  status: "",
};

export default function CreateProduct() {
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
          <Box p="20px">
            <Form>
              <FormControl
                isInvalid={!!errors.name && !!touched.name}
              >
                <Input
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
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
                    >
                      <RadioGroup
                        display="flex"
                        gap="20px"
                        id="status"
                        {...rest}
                      >
                        {statusProductResponse.map((status) => (
                          <Stack flex="1" key={status.id}>
                            <Radio
                              name="status"
                              ref={status.ref}
                              display="none"
                              onChange={onChange}
                              value={status.value}
                            >
                              {status.name}
                            </Radio>

                            <Button
                              type="button"
                              name={status.value}
                              border="1px solid"
                              borderColor={
                                values.status === status.value
                                  ? "white"
                                  : "suvap.darkGray"
                              }
                              bgColor={
                                values.status === status.value
                                  ? "suvap.darkGray"
                                  : "white"
                              }
                              color={
                                values.status === status.value
                                  ? "white"
                                  : "suvap.darkGray"
                              }
                              onClick={() =>
                                status.ref.current?.click()
                              }
                            >
                              {status.name}
                            </Button>
                          </Stack>
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

              <Button mt="20px" type="submit">
                Crear
              </Button>
            </Form>
          </Box>
        )}
      </Formik>
    </Box>
  );
}
