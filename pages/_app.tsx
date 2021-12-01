import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { ProductProvider, UserProvider } from "../src/context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <UserProvider>
        <ProductProvider>
          <Component {...pageProps} />
        </ProductProvider>
      </UserProvider>
    </ChakraProvider>
  );
}

export default MyApp;
