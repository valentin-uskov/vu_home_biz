import { gql } from 'apollo-boost';

export const addProjectMutation = gql`
    mutation addProject($name: String!,  $budget: Int, $currencyId: String) {
        addProject(name: $name, budget: $budget, currencyId: $currencyId) {
            name,
            budget
        }
    }
`;

export const updateProjectMutation = gql`
    mutation updateProject($id: ID, $name: String!,  $budget: Int, $currencyId: String) {
        updateProject(id: $id, name: $name, budget: $budget, currencyId: $currencyId) {
            name,
            budget
        }
    }
`;