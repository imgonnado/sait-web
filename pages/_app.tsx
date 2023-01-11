import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { GlobalStyles } from "twin.macro";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";

import { useApollo } from "../src/lib/apolloClient";

import "../styles/globals.css";
import "../styles/reset.css";

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
      <GlobalStyles />
      {getLayout(<Component {...pageProps} />)}
    </ApolloProvider>
  );
}

export default App;
