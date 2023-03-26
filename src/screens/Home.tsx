import {
  Box,
  Button,
  Flex,
  Grid,
  Image,
  Text,
} from "@chakra-ui/react";
import Layout from "../components/Layout";
import { CATEGORIES } from "../../data/categories";

export default function Home() {
  return (
    <Layout>
      {/* Header */}
      <Flex
        p="20px"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text
          fontWeight="medium"
          fontSize="24px"
          textTransform="uppercase"
          color="suvap.darkGray"
        >
          Suvap
        </Text>
        <Button bgColor="transparent">
          <Image w="28px" src="/icons/bar.svg" alt="" />
        </Button>
      </Flex>

      <Box px="20px">
        <Image
          src="https://bit.ly/40ClPs9"
          alt=""
          w="full"
          h="250px"
          objectFit="cover"
        />
      </Box>

      <Box pt="20px">
        <Grid
          px="20px"
          className="hide-scrollbar"
          overflowX="auto"
          gap="15px"
          gridTemplateColumns="repeat(2, max-content)"
          gridAutoFlow="column"
          gridAutoColumns="max-content"
        >
          {CATEGORIES.map((category) => (
            <Button
              color="suvap.darkGray"
              rounded="3px"
              bgColor="white"
              _focusWithin={{}}
              _hover={{}}
              fontWeight="regular"
              border="1px solid"
              p="11px 15px"
              h="auto"
              minW="initial"
              borderColor="suvap.darkGray"
              textTransform="uppercase"
            >
              {category.name}
            </Button>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
}
