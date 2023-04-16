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

const CreateProductSchema = Yup.object().shape({
  name: Yup.string().min(5, "Es muy corto!").required("Es requerido"),
  status: Yup.string().required("Es requerido"),
});

const initialValuesCreateProduct = {
  name: "",
  status: "",
};

export default function CreateProduct() {
  const refFirstButton: any = useRef();
  const refSecondButton: any = useRef();

  const handleCreateProduct = async (
    values: any,
    resetForm: () => void
  ) => {
    console.log(values);
    console.log("sending");
    resetForm();
  };

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

              <Box my="20px">{JSON.stringify(values)}</Box>

              <HStack mt="20px" spacing={5}>
                <Button
                  bgColor={
                    values.status === "1"
                      ? "suvap.darkGray"
                      : "suvap.lightGray"
                  }
                  color={
                    values.status === "1"
                      ? "suvap.lightGray"
                      : "suvap.darkGray"
                  }
                  onClick={() => refFirstButton.current?.click()}
                >
                  First
                </Button>
                <Button
                  bgColor={
                    values.status === "2"
                      ? "suvap.darkGray"
                      : "suvap.lightGray"
                  }
                  color={
                    values.status === "2"
                      ? "suvap.lightGray"
                      : "suvap.darkGray"
                  }
                  onClick={() => refSecondButton.current?.click()}
                >
                  Second
                </Button>
              </HStack>

              <Field name="status">
                {({ field }: FieldProps) => {
                  const { onChange, ...rest } = field;

                  return (
                    <FormControl
                      id="status"
                      isInvalid={!!errors.status && !!touched.status}
                    >
                      <ErrorMessage
                        name="status"
                        component={() => (
                          <FormErrorMessage>
                            {errors.status}
                          </FormErrorMessage>
                        )}
                      />

                      <RadioGroup id="status" {...rest}>
                        <Stack>
                          <Radio
                            name="status"
                            ref={refFirstButton}
                            display="none"
                            onChange={onChange}
                            value="1"
                          >
                            First
                          </Radio>
                        </Stack>
                        <Stack>
                          <Radio
                            name="status"
                            // onBlur={handleBlur}
                            ref={refSecondButton}
                            display="none"
                            onChange={onChange}
                            value="2"
                          >
                            Second
                          </Radio>
                        </Stack>
                      </RadioGroup>
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
