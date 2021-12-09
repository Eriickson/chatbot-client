import { Box, Container } from "@chakra-ui/react";
import React, { FC } from "react";
import { Header } from ".";

export const MainTemplate: FC = ({ children }) => {
  return (
    <Box minHeight={"100vh"} bgColor="#f8f8f8">
      <Header />
      <Container maxW="container.xl" mb={6}>
        {children}
      </Container>
    </Box>
  );
};
