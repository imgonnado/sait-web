import { gql } from "@apollo/client";

export const Q_Projects = gql`
  query Projects(
    $filter: ProjectFilter
    $paging: OffsetPaging
    $sorting: [ProjectSort!]
  ) {
    projects(filter: $filter, paging: $paging, sorting: $sorting) {
      nodes {
        id
        projectTitle
        image
        locationCode
        hitCount
        status
      }

      totalCount
    }
  }
`;

export const QueryProject = gql`
  query Projects {
    projects {
      nodes {
        id
        projectTitle
        hitCount
        description
        projectMembers {
          id
          userId
        }
      }
    }
  }
`;
