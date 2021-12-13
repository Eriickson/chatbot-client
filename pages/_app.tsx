import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { OrderProvider, ProductProvider, UserProvider } from "../src/context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <UserProvider>
        <ProductProvider>
          <OrderProvider>
            <Component {...pageProps} />
          </OrderProvider>
        </ProductProvider>
      </UserProvider>
    </ChakraProvider>
  );
}

export default MyApp;
