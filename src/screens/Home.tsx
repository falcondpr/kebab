import { useState } from "react";
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
import { PRODUCTS } from "../../data/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [productSelect, setProductSelect] = useState<{
    status: boolean;
    id: string | null;
  }>({
    status: false,
    id: null,
  });

  console.log(productSelect);

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

      {/* Categories */}
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
              key={category.id}
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

      {/* List of products */}
      <Box p="20px" pb="32px">
        <Grid gridTemplateColumns="repeat(2, 1fr)" gap="28px 15px">
          {PRODUCTS.map((product) => (
            <ProductCard
              productSelect={productSelect}
              setProductSelect={setProductSelect}
              product={product}
              key={product.id}
            />
          ))}
        </Grid>
      </Box>
    </Layout>
  );
}
