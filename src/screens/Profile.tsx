import { Box, Button, Flex, Grid, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { BackButton } from "@/components";
import { MENU_OPTIONS } from "@/data/menu";
import { Text } from "@/ui";

export default function Profile() {
  const navigate = useNavigate();

  const handleLogout = async () => {
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
          <Text fontWeight="semibold" fontSize="16px">
            Lucas Lamas
          </Text>
          <Box ml="5px">
            <Image src="/icons/verify-icon.svg" alt="" />
          </Box>
        </Flex>
        <Text color="suvap.text" fontSize="14px">
          @lucas_lamas
        </Text>
      </Box>

      <Box px="20px">
        {MENU_OPTIONS.map((item) => (
          <Box key={item.id} mb="24px">
            <Text fontSize="20px" mb="10px" fontWeight="semibold">
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
                >
                  <Image h="16px" src={link.icon} alt="" />
                </Grid>
                <Text ml="10px" color="suvap.text">
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
