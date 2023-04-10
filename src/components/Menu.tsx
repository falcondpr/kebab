import {
  Box,
  Button,
  Flex,
  Image,
  useColorMode,
} from "@chakra-ui/react";

import { Text } from "@/ui";
import { LINKS } from "@/data";
import { useNavigate } from "react-router-dom";

interface IMenu {
  show: boolean;
}

export default function Menu({ show }: IMenu) {
  const navigate = useNavigate();
  const { colorMode } = useColorMode();

  return (
    <Box
      display={show ? "block" : "none"}
      position="fixed"
      top="0"
      bgColor={colorMode === "light" ? "white" : "suvap.darkGray"}
      zIndex="150"
      left="0"
      w="100vw"
      height="100vh"
      overflowY="auto"
    >
      {/* Profile */}
      <Box onClick={() => navigate("/profile")} pt="90px" px="20px">
        <Flex
          alignItems="center"
          borderBottom="1px solid"
          borderColor="#737373"
          pb="25px"
        >
          <Box>
            <Image
              src="https://bit.ly/41dF8Ix"
              w="70px"
              h="70px"
              objectFit="cover"
              rounded="full"
              alt=""
              border="2px solid"
              borderColor="#D3D3D3"
            />
          </Box>
          <Flex flexDir="column" ml="15px">
            <Text
              fontWeight="semibold"
              color={
                colorMode === "light" ? "suvap.darkGray" : "white"
              }
            >
              Lucas Lamas
            </Text>
            <Text
              mt="2px"
              fontSize="14px"
              color={
                colorMode === "light" ? "suvap.darkGray" : "white"
              }
            >
              @lucas_lamas
            </Text>
          </Flex>
        </Flex>
      </Box>

      {/* Menu */}
      <Box px="20px" pt="24px">
        {LINKS.map((link) => (
          <Button
            w="full"
            mb="24px"
            key={link.id}
            bgColor="transparent"
            rounded="0"
            p="10px"
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
            _focusWithin={{}}
            _hover={{}}
          >
            <Box w="28px">
              <Image
                h="20px"
                src={`/icons/${
                  colorMode === "light"
                    ? `${link.icon}.svg`
                    : `${link.icon}-white.svg`
                }`}
                alt=""
              />
            </Box>
            <Text
              color={
                colorMode === "light" ? "suvap.darkGray" : "white"
              }
              ml="10px"
              fontSize="18px"
              fontWeight="medium"
            >
              {link.name}
            </Text>
          </Button>
        ))}
      </Box>

      {/* Sub */}
      <Box
        mx="20px"
        my="48px"
        mt="84px"
        bgColor={
          colorMode === "light" ? "suvap.darkGray" : "suvap.border"
        }
        rounded="lg"
        pb="32px"
      >
        <Box mt="72px">
          <Box h="4rem" position="relative">
            <Box
              position="absolute"
              top="-4rem"
              left="50%"
              transform="translateX(-50%)"
              border="6px solid"
              rounded="full"
              borderColor={
                colorMode === "light" ? "white" : "suvap.darkGray"
              }
            >
              <Image
                src="https://bit.ly/42OQbcL"
                w="120px"
                h="120px"
                rounded="full"
                objectFit="cover"
                alt=""
              />
            </Box>
          </Box>
        </Box>

        <Box mt="20px">
          <Text
            fontSize="20px"
            textAlign="center"
            fontWeight="semibold"
            color={colorMode === "light" ? "white" : "suvap.darkGray"}
          >
            Obtene premium
          </Text>
          <Text
            color={colorMode === "light" ? "white" : "suvap.darkGray"}
            textAlign="center"
          >
            Precio de la suscripcion
          </Text>
          <Text
            color={colorMode === "light" ? "white" : "suvap.darkGray"}
            textAlign="center"
            fontSize="24px"
            fontWeight="semibold"
          >
            Gs. 15.000
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
