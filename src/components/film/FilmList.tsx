import { Box, SimpleGrid, Skeleton } from "@chakra-ui/react";
import { Waypoint } from "react-waypoint";

import { Film, useFilmsQuery } from "../../generated/graphql";
import FilmCard from "./FilmCard";

const LIMIT = 6;

export default function FilmList() {
  const { data, loading, error, fetchMore } = useFilmsQuery({
    variables: {
      limit: LIMIT,
      cursor: 1,
    },
  });

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <SimpleGrid columns={[2, null, 3]} spacing={[2, null, 10]}>
      {loading &&
        new Array(6).fill(0).map(x => <Skeleton key={x} height="400px" />)}
      {!loading &&
        data &&
        data.films.films.map((f: Film, i: number) => (
          <Box key={f.id}>
            {data.films.cursor && i === data.films.films.length - LIMIT / 2 && (
              <Waypoint
                onEnter={() => {
                  console.log("onEnter");
                  fetchMore({
                    variables: {
                      limit: LIMIT,
                      cursor: data.films.cursor,
                    },
                  });
                }}
              />
            )}

            <FilmCard film={f} />
          </Box>
        ))}
    </SimpleGrid>
  );
}
