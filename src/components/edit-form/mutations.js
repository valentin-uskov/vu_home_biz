import { gql } from 'apollo-boost';

export const addProjectMutation = gql`
    mutation addProject($name: String!,  $budget: Int, $currencyId: String, $projectStatusId: String) {
        addProject(name: $name, budget: $budget, currencyId: $currencyId, projectStatusId: $projectStatusId ) {
            name,
            budget
        }
    }
`;