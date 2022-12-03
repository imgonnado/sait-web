import { DocumentNode } from "graphql";

export interface UseAPIProps {
  query: DocumentNode;
  variables?: {
    [key: string]: string | number;
  };
  options?: {
    [key: string]: string | number;
  };
}

export interface ResponseData<T> {
  nodes: T[];
  __typename: string;
}
