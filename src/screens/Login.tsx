import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Input,
} from "@chakra-ui/react";
import { BiChevronRight } from "react-icons/bi";

import { Text } from "@/ui";

interface IModalIntern {
  setStep: (value: string) => void;
}

export const ModalEmail = ({ setStep }: IModalIntern) => {
  return (
    <Box w="100vw" h="100vh">
      <Flex p="32px" alignItems="center" flexDir="column">
        <Heading fontSize="32px" color="suvap.darkGray">
          Hola de nuevo!
        </Heading>
        <Text textAlign="center" mt="10px">
          Si ya tienes
          <br />
          una cuenta ahora ingresa
        </Text>
      </Flex>

      <Grid gap="14px" px="20px" gridTemplateColumns="1fr 60px">
        <Box>
          <Input
            placeholder="Ingrese su email"
            borderColor="suvap.border"
            rounded="6px"
            h="55px"
          />
        </Box>
        <Button
          w="full"
          rounded="6px"
          h="full"
          bgColor="suvap.darkGray"
          fontSize="22px"
          color="white"
          onClick={() => setStep("2")}
        >
          <BiChevronRight />
        </Button>
      </Grid>
    </Box>
  );
};

export const ModalPassword = ({ setStep }: IModalIntern) => {
  return (
    <Box w="100vw" h="100vh">
      <Flex p="32px" alignItems="center" flexDir="column">
        <Heading fontSize="32px" color="suvap.darkGray">
          Hola de nuevo!
        </Heading>
        <Text textAlign="center" mt="10px">
          Si ya tienes
          <br />
          una cuenta ahora ingresa
        </Text>
      </Flex>

      <Grid gap="14px" px="20px" gridTemplateColumns="1fr 60px">
        <Box>
          <Input
            placeholder="Ingrese su contraseña"
            borderColor="suvap.border"
            rounded="6px"
            h="55px"
          />
        </Box>
        <Button
          w="full"
          rounded="6px"
          h="full"
          bgColor="suvap.darkGray"
          fontSize="22px"
          color="white"
          onClick={() => setStep("1")}
        >
          <BiChevronRight />
        </Button>
      </Grid>
    </Box>
  );
};

export default function Login() {
  const [step, setStep] = useState<string>("1");

  return (
    <Box>
      {step === "1" ? (
        <ModalEmail setStep={setStep} />
      ) : (
        <ModalPassword setStep={setStep} />
      )}
    </Box>
  );
}
