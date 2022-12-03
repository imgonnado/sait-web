import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { GlobalStyles } from "twin.macro";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { ChakraProvider, theme } from "@chakra-ui/react";

import { useApollo } from "../src/lib/apolloClient";

export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  const getLayout = Component.getLayout || (page => page);

  return (
    <ApolloProvider client={apolloClient}>
      <ChakraProvider theme={theme}>
        <GlobalStyles />
        {getLayout(<Component {...pageProps} />)}
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default App;
