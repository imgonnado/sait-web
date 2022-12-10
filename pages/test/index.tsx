import { useProjectsQuery } from "../../src/generated/graphql";

function index() {
  const { data, loading, error, fetchMore } = useProjectsQuery();
  console.log(data);

  return <></>;
}

export default index;
