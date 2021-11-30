import {
  Box,
  Container,
  SimpleGrid,
  GridItem,
  Image,
  Text,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import numeral from "numeral";

const products = [
  {
    title: "",
    color: [""],
    category: "",
    price: 5000,
    available: 10,
    image: "/products/cap-1",
  },
  {
    title: "",
    color: [""],
    category: "",
    price: 5000,
    available: 10,
    image: "/products/cap-2",
  },
  {
    title: "",
    color: [""],
    category: "",
    price: 5000,
    available: 10,
    image: "/products/cap-3",
  },
  {
    title: "",
    color: [""],
    category: "",
    price: 5000,
    available: 10,
    image: "/products/cap-4",
  },
  {
    title: "",
    color: [""],
    category: "",
    price: 5000,
    available: 10,
    image: "/products/cap-5",
  },
  {
    title: "",
    color: [""],
    category: "",
    price: 5000,
    available: 10,
    image: "/products/cap-6",
  },
];

export const IndexTemplate = () => {
  return (
    <Box minHeight={"100vh"} pt="10">
      <Container maxW="container.xl">
        <Box>
          <SimpleGrid columns={12} spacing={10}>
            {products.map((product) => (
              <GridItem colSpan={3} key={product.image}>
                <Box>
                  <Image src={`${product.image}.webp`} alt="" />
                  <Flex justifyContent={"space-between"} alignItems={"center"}>
                    <Text fontWeight={"semibold"} fontSize={"2xl"}>
                      Producto 1
                    </Text>
                    <Text>RD$ {numeral(product.price).format("0,0.00")}</Text>
                  </Flex>
                </Box>
              </GridItem>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
};
