import {
  Box,
  Button,
  Flex,
  Grid,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { BackButton } from "@/components";
import { MENU_OPTIONS } from "@/data/menu";
import { Text } from "@/ui";
import { toast } from "react-hot-toast";

export default function Profile() {
  const { colorMode } = useColorMode();
  const navigate = useNavigate();

  const handleLogout = async () => {
    toast("Session cerrada", {
      icon: "👀",
    });
    navigate("/login");
  };

  return (
    <Box>
      <Box position="relative">
        <BackButton title="" shadow="dark-lg" />

        <Button
          position="absolute"
          top="20px"
          right="20px"
          h="45px"
          w="45px"
          rounded="2px"
          bgColor="suvap.darkGray"
          shadow="dark-lg"
          p="0"
          onClick={handleLogout}
        >
          <Image src="/icons/logout-icon.svg" alt="" />
        </Button>
      </Box>

      <Box h="150px" position="absolute" top="0" w="full" zIndex="-1">
        <Image
          src="https://bit.ly/3KKPYAh"
          alt=""
          w="full"
          h="full"
          objectFit="cover"
        />

        <Box p="0 20px" position="absolute" bottom="-40px">
          <Image
            border="2px solid"
            borderColor="suvap.lightGray"
            src="https://bit.ly/41dF8Ix"
            alt=""
            w="80px"
            h="80px"
            rounded="full"
            objectFit="cover"
          />
        </Box>
      </Box>

      <Box mt="calc(85px + 15px)" px="20px" py="15px">
        <Flex alignItems="center">
          <Text
            color={
              colorMode === "light"
                ? "suvap.darkGray"
                : "suvap.lightGray"
            }
            fontWeight="semibold"
            fontSize="16px"
          >
            Lucas Lamas
          </Text>
          <Box ml="5px">
            <Image src="/icons/verify-icon.svg" alt="" />
          </Box>
        </Flex>
        <Text
          color={
            colorMode === "light" ? "suvap.text" : "suvap.border"
          }
          fontSize="14px"
        >
          @lucas_lamas
        </Text>
      </Box>

      <Box px="20px" pb="20px">
        {MENU_OPTIONS.map((item) => (
          <Box key={item.id} mb="24px">
            <Text
              color={
                colorMode === "light"
                  ? "suvap.darkGray"
                  : "suvap.lightGray"
              }
              fontSize="20px"
              mb="10px"
              fontWeight="semibold"
            >
              {item.name}
            </Text>

            {item.links.map((link) => (
              <Flex
                alignItems="center"
                key={link.id}
                onClick={() => navigate("/")}
                mb="16px"
              >
                <Grid
                  placeItems="center"
                  bgColor="suvap.darkGray"
                  w="36px"
                  h="36px"
                  rounded="3px"
                  border="1px solid"
                  borderColor={
                    colorMode === "light"
                      ? "transparent"
                      : "suvap.border"
                  }
                >
                  <Image h="16px" src={link.icon} alt="" />
                </Grid>
                <Text
                  ml="10px"
                  color={
                    colorMode === "light"
                      ? "suvap.text"
                      : "suvap.secondaryGray"
                  }
                >
                  {link.name}
                </Text>
              </Flex>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
