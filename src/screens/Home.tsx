import { useState } from "react";
import {
  Box,
  Button as ButtonChakraUI,
  Flex,
  Grid,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";

import { CATEGORIES, PRODUCTS } from "@/data";
import { Layout, ProductCard } from "@/components";
import { Text, Button } from "@/ui";
import { hideMenu, showMenu } from "@/features/menuSlice";
import { RootState } from "@/app/store";

export default function Home() {
  const menuState = useSelector(
    (state: RootState) => state.menu.value
  );

  const dispatch = useDispatch();
  const [productSelect, setProductSelect] = useState<{
    status: boolean;
    id: string | null;
  }>({
    status: false,
    id: null,
  });

  const handleOpenMenu = () =>
    menuState ? dispatch(hideMenu()) : dispatch(showMenu());

  const { colorMode, toggleColorMode } = useColorMode();

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
          color={colorMode === "light" ? "suvap.darkGray" : "white"}
        >
          Suvap
        </Text>

        <ButtonChakraUI
          position="relative"
          zIndex="150"
          onClick={handleOpenMenu}
          w="50px"
          p="0"
          transition="all 300ms ease"
          _focusVisible={{}}
          _focusWithin={{}}
          _hover={{}}
          border="1px solid"
          borderColor="suvap.secondaryGray"
          bgColor={colorMode === "light" ? "white" : "suvap.darkGray"}
        >
          {!menuState ? (
            <Image
              h="16px"
              src={
                colorMode === "light"
                  ? "/icons/bar.svg"
                  : "/icons/bar-light.svg"
              }
              alt=""
            />
          ) : (
            <Image
              h="16px"
              objectFit="contain"
              src={
                colorMode === "light"
                  ? "/icons/times.svg"
                  : "/icons/times-light.svg"
              }
              alt=""
            />
          )}
        </ButtonChakraUI>
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
              bgColor={colorMode === "light" ? "white" : "gray.300"}
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

      <Box position="fixed" top="0" left="50%" zIndex="4000">
        <ButtonChakraUI onClick={toggleColorMode}>
          {colorMode === "light" ? "dark" : "light"}
        </ButtonChakraUI>
      </Box>
    </Layout>
  );
}
