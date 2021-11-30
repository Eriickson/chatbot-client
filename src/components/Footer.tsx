import { Box, Container, Flex, Text } from "@chakra-ui/react";
import React from "react";

export const Footer = () => {
  return (
    <Box bgColor={"blue.500"} py={8}>
      <Container maxW="container.xl">
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Text color="white" fontSize={"4xl"} fontWeight={"semibold"}>
            Shopping Online
          </Text>
          <Box display={"flex"} alignItems={"flex-end"} flexDir={"column"}>
            <Text fontSize={"sm"} color={"blue.100"}>
              Create and Design By:
            </Text>
            <Text color={"white"}>Erickson Manuel Holguín</Text>
            <Text color={"white"}>2-17-1266</Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
