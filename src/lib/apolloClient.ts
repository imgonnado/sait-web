import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  NormalizedCacheObject,
} from "@apollo/client";
import { useMemo } from "react";
import { setContext } from "@apollo/client/link/context";
import merge from "deepmerge";

import { API_URL } from "../api/config";
import { getUserToken } from "../util/user-token";

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

const httpLink = createHttpLink({
  uri: API_URL,
});
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const userAccessToken = getUserToken();
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      // 'X-API-KEY': API_TOKEN!,
      Authorization: userAccessToken ? `Bearer ${userAccessToken}` : "",
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
function initializeApollo(
  initialState: any
): ApolloClient<NormalizedCacheObject> {
  const _apolloClient = apolloClient ?? client;
  // Next.js에서 Apollo Client를 이용해 데이터를 가져오는 함수가 있다면, 초기 상태값이 여기에서 합쳐진다.
  if (initialState) {
    // 클라이언트에서의 받은 데이터인 현재 캐시 데이터를 가져온다.
    const existingCache = _apolloClient.extract();
    // 현재 캐시와 SSR 메소드인 getStaticProps/getServerSideProps로 부터 받은 데이터를 합친다.
    const data = merge(initialState, existingCache);
    // 합쳐진 데이터를 저장한다.
    _apolloClient.cache.restore(data);
  }
  // SSG(Server Side Generation)와 SSR(Server Side Rendering)은 항상 새로운 Apollo Client를 생성한다.
  if (typeof window === "undefined") return _apolloClient;
  // 클라이언트의 Apollo Client는 한 번만 생성한다.
  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}
export function useApollo(initialState?: any) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
