import {
  DocumentNode,
  QueryOptions,
  useApolloClient,
  useMutation,
  useQuery,
} from "@apollo/client";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

export interface UseAPIProps {
  query: DocumentNode;
  variables?: {
    [key: string]: string | number;
  };
  options?: {
    [key: string]: string | number;
  };
}

export const useAPI = ({
  query,
  variables = {},
  options = {},
}: UseAPIProps) => {
  const { loading, error, data, refetch, ...order } = useQuery(query, {
    ...{ variables: variables },
    ...options,
  });

  return {
    data,
    error,
    loading,
    refetch,
  };
};

export function useLazyAPI(
  query: DocumentNode,
  options?: Omit<QueryOptions, "query">
) {
  const client = useApolloClient();
  const [data, setRes] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const custom_refetch = useCallback(
    async (param: { [key: string]: string | number }) => {
      try {
        setLoading(true);

        const res = await client.query({
          query: query,
          ...param,
          fetchPolicy: "no-cache",
          ...options,
        });

        const keys = Object.keys(res.data);
        if (keys.length == 1) {
          setRes({ ...res.data[keys[0]] });
          setLoading(false);
          return { ...res.data[keys[0]] };
        } else {
          setRes({ ...res.data });
          setLoading(false);
          return { ...res.data };
        }
      } catch (e: unknown) {
        if (e instanceof Error) {
          setError(e);
          toast.error(e.message);
        }
        setLoading(false);
      }
    },
    [query]
  );

  return { data, error, loading, custom_refetch };
}

export const useMutationAPI = (query: DocumentNode) => {
  const [refetch, { loading, data: raw_data, error }] = useMutation(query, {
    // ...{ fetchPolicy: "no-cache" },
    // ...options,
    onError(e) {
      console.log("mutation : error: ", e);
    },
  });

  const [data, setRes] = useState(null);

  useEffect(() => {
    if (raw_data) {
      const keys = Object.keys(raw_data);
      if (keys.length == 1) {
        setRes(raw_data[keys[0]]);
      } else {
        setRes(raw_data);
      }
    }
  }, [raw_data]);

  const custom_refetch = useCallback(
    async (param: { [key: string]: string | number }) => {
      const result = await refetch(param);
      const keys = result?.data ? Object.keys(result?.data) : [];
      return result?.data && keys.length == 1
        ? result?.data[keys[0]]
        : result?.data;
    },
    []
  );

  return { data, error, loading, custom_refetch };
};
