import {
  Box,
  Container,
  SimpleGrid,
  GridItem,
  Image,
  Text,
  Flex,
  Button,
} from "@chakra-ui/react";
import React from "react";
import numeral from "numeral";
import { useProduct } from "../../context";
import { Footer } from "../../components";

export const IndexTemplate = () => {
  const { products } = useProduct();

  return (
    <Box minHeight={"100vh"} pt="10" bgColor="#f8f8f8">
      <Container maxW="container.xl" mb={6}>
        <Text fontWeight={"semibold"} mb="2" fontSize={"2xl"}>
          {products.length} Products
        </Text>
        <Box>
          <SimpleGrid columns={12} spacing={4}>
            {products?.map((product) => (
              <GridItem
                pos={"relative"}
                bgColor={"white"}
                shadow={"sm"}
                colSpan={3}
                key={product._id}
                pb={6}
              >
                <Box px={6}>
                  <Image mx="auto" w="36" src={product.image} alt="" />
                  <Box my="8">
                    <Text
                      lineHeight={"none"}
                      textAlign={"center"}
                      fontWeight={"semibold"}
                      fontSize={"lg"}
                    >
                      {product.title}
                    </Text>
                    <Text textAlign={"center"}>
                      ${numeral(product.price).format("0,0.00")}
                    </Text>
                  </Box>
                </Box>
                <Button
                  bottom={0}
                  position={"absolute"}
                  colorScheme={"blue"}
                  rounded="sm"
                  w="full"
                >
                  Add to cart
                </Button>
              </GridItem>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};
