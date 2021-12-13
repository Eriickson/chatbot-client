import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Heading,
  Box,
} from "@chakra-ui/react";
import { MainTemplate } from "../../components";

export const OrdersTemplate = () => {
  return (
    <MainTemplate>
      <Heading mb={10}>Lista de ordenes</Heading>
      <Box bgColor={"white"} p={2} shadow={"md"}>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>Nombre</Th>
              <Th>Apellido</Th>
              <Th>Producto</Th>
              <Th>Precio</Th>
              <Th>Cantidad</Th>
              <Th>Fecha</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Erickson Manuel</Td>
              <Td>Holguín</Td>
              <Td>Gorra Original</Td>
              <Td>$25.00</Td>
              <Td>5</Td>
              <Td>{String(new Date())}</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </MainTemplate>
  );
};
