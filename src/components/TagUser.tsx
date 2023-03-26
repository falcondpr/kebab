import { Box, Flex, Image, Text } from "@chakra-ui/react";

export default function TagUser() {
  return (
    <Flex alignItems="center" mt="2px">
      <Box>
        <Image
          src="https://bit.ly/3LUdITQ"
          w="28px"
          h="28px"
          objectFit="cover"
          rounded="full"
          border="1px solid"
          borderColor="suvap.lightGray"
          alt=""
        />
      </Box>
      <Box ml="8px">
        <Text color="gray.500">Stefan Bass</Text>
      </Box>
    </Flex>
  );
}
