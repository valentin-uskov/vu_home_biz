import { gql } from 'apollo-boost';

export const deleteProjectMutation = gql`
    mutation deleteProject($id: ID) {
        deleteProject(id: $id) {
            name
        }
    }
`;