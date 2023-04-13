import {
  Box,
  FormControl,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";
import * as Yup from "yup";
import { Formik, Form, ErrorMessage } from "formik";

import { BackButton } from "@/components";
import { Button } from "@/ui";

const CreateProductSchema = Yup.object().shape({
  name: Yup.string().min(5, "Es muy corto!").required("Es requerido"),
});

const initialValuesCreateProduct = {
  name: "",
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
