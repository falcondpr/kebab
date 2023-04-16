import {
  Box,
  FormControl,
  FormErrorMessage,
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

const CreateProductSchema = Yup.object().shape({
  name: Yup.string().min(5, "Es muy corto!").required("Es requerido"),
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
                {({ field, form }: FieldProps) => {
                  const { onChange, ...rest } = field;

                  return (
                    <FormControl
                      id="status"
                      isInvalid={!!form.status && !!form.status}
                    >
                      <RadioGroup id="status" {...rest}>
                        <Stack>
                          <Radio onChange={onChange} value="1">
                            First
                          </Radio>
                        </Stack>
                        <Stack>
                          <Radio onChange={onChange} value="2">
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
