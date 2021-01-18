import { gql } from 'apollo-boost';

export const projectsQuery = gql`
    query projectsQuery {
        projects {
            id
            name
            budget
            currency {
                name
                sign
            }
        }
    }
`;
