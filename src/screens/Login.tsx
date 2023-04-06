import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Input,
} from "@chakra-ui/react";
import { BiChevronRight } from "react-icons/bi";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import { Text } from "@/ui";
import { useNavigate } from "react-router-dom";

interface IModalIntern {
  setStep: (value: string) => void;
}

interface IModalEmail extends IModalIntern {
  email: string;
  setEmail: (value: string) => void;
}

interface IModalPassword extends IModalIntern {
  password: string;
  setPassword: (value: string) => void;
}

export const ModalEmail = ({
  email,
  setEmail,
  setStep,
}: IModalEmail) => {
  const handleGoToNextSlide = () => {
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (!email) return toast.error("El email es requerido");
    if (!regexEmail.test(email))
      return toast.error("El email no es valido");

    setStep("2");
  };

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

      <Grid
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.8 } }}
        gap="14px"
        px="20px"
        gridTemplateColumns="1fr 60px"
      >
        <Box>
          <Input
            placeholder="Ingrese su email"
            borderColor="suvap.border"
            rounded="6px"
            h="55px"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
        <Button
          w="full"
          rounded="6px"
          h="full"
          bgColor="suvap.darkGray"
          fontSize="22px"
          color="white"
          onClick={handleGoToNextSlide}
        >
          <BiChevronRight />
        </Button>
      </Grid>
    </Box>
  );
};

export const ModalPassword = ({
  password,
  setPassword,
  setStep,
}: IModalPassword) => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!password) return toast.success("La contrasena es requerida");

    toast.success("Sesion iniciada!");
    navigate("/");
  };

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

      <Grid
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.8 } }}
        gap="14px"
        px="20px"
        gridTemplateColumns="1fr 60px"
      >
        <Box>
          <Input
            type="password"
            placeholder="Ingrese su contraseña"
            borderColor="suvap.border"
            rounded="6px"
            h="55px"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        <Button
          w="full"
          rounded="6px"
          h="full"
          bgColor="suvap.darkGray"
          fontSize="22px"
          color="white"
          onClick={handleLogin}
        >
          <BiChevronRight />
        </Button>
      </Grid>
    </Box>
  );
};

export default function Login() {
  const [step, setStep] = useState<string>("1");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    setStep("1");
  }, []);

  return (
    <Box>
      {step === "1" ? (
        <ModalEmail
          email={email}
          setEmail={setEmail}
          setStep={setStep}
        />
      ) : (
        <ModalPassword
          setPassword={setPassword}
          password={password}
          setStep={setStep}
        />
      )}
    </Box>
  );
}
