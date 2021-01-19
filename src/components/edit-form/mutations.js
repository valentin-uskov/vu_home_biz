import { gql } from 'apollo-boost';

export const addCurrencyMutation = gql`
    mutation addCurrency($name: String!,  $sign: String!) {
        addCurrency(name: $name, sign: $sign ) {
            name
        }
    }
`;