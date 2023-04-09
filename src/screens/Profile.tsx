import { BackButton } from "@/components";
import { Text } from "@/ui";
import { Box, Button, Flex, Image } from "@chakra-ui/react";

export default function Profile() {
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
    </Box>
  );
}
