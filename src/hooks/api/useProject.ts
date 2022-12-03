import { ApolloError, ApolloQueryResult, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

import { IProject } from "../../../../sait-server/libs/shared/interfaces/src/lib/project";
import { QueryProject } from "../../graphql/queries/projects";
import { ResponseData, UseAPIProps } from "./types";

interface UseProjectReturnType {
  data?: { projects: ResponseData<IProject> } | null;
  error?: ApolloError | null;
  loading?: boolean;
  refetch?: (
    variables?: Partial<Record<string, any>> | undefined
  ) => Promise<ApolloQueryResult<any>>;
}

function useProject({
  query,
  variables = {},
  options = {},
}: UseAPIProps): UseProjectReturnType {
  return useQuery(query, {
    ...{ variables: variables },
    ...options,
  });
}

export function useProjectList() {
  const {
    data: projectData,
    error: projectDataIsError,
    loading: projectDataIsloading,
  } = useProject({
    query: QueryProject,
  });
  const [projectList, setProjectList] = useState<IProject[]>([]);

  useEffect(() => {
    const projectsNodes = projectData?.projects?.nodes;
    setProjectList(projectsNodes || []);
  }, [projectData]);

  return {
    projectList,
    projectDataIsError,
    projectDataIsloading,
  };
}
