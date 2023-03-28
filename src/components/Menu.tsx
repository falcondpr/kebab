import { Box, Button, Flex, Image } from "@chakra-ui/react";

import { Text } from "@/ui";
import { LINKS } from "@/data";

export default function Menu() {
  return (
    <Box
      position="fixed"
      pb="48px"
      top="0"
      bgColor="white"
      zIndex="150"
      left="0"
      w="100vw"
      height="100vh"
      overflowY="auto"
    >
      {/* Profile */}
      <Box pt="90px" px="20px">
        <Flex
          alignItems="center"
          borderBottom="1px solid"
          borderColor="#737373"
          pb="25px"
        >
          <Box>
            <Image
              src="https://bit.ly/3KeJtFC"
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
            <Text fontWeight="semibold">Lucas Lamas</Text>
            <Text mt="2px" fontSize="14px">
              @lucas_lamas
            </Text>
          </Flex>
        </Flex>
      </Box>

      {/* Menu */}
      <Box px="20px" pt="24px">
        {LINKS.map((link) => (
          <Button
            mb="32px"
            key={link.id}
            bgColor="transparent"
            rounded="0"
            p="10px"
            display="flex"
            alignItems="center"
            _focusWithin={{}}
            _hover={{}}
          >
            <Box w="28px">
              <Image h="24px" src={`/icons/${link.icon}`} alt="" />
            </Box>
            <Text ml="16px" fontSize="20px" fontWeight="medium">
              {link.name}
            </Text>
          </Button>
        ))}
      </Box>

      {/* Sub */}
      <Box
        mt="72px"
        px="20px"
        rounded="lg"
        bgColor="suvap.darkGray"
        py="20px"
        mx="20px"
        position="relative"
      >
        <Box h="4.6rem">
          <Box
            position="absolute"
            top="-3rem"
            left="50%"
            transform="translateX(-50%)"
            border="6px solid"
            rounded="full"
            borderColor="white"
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

        <Box mt="5px">
          <Text
            color="white"
            fontSize="20px"
            textAlign="center"
            fontWeight="semibold"
          >
            Obtene premium
          </Text>
          <Text color="white" textAlign="center">
            Precio de la suscripcion
          </Text>
          <Text
            color="white"
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
