// import { withStyles } from '@material-ui/core/styles';
// import { compose } from 'recompose';
import { graphql } from 'react-apollo';

import { addCurrencyMutation } from './mutations';

const withGraphqlAdd = graphql(addCurrencyMutation, {
    props: ({ mutate }) => ({
        addCurrency: currency => mutate({
            variables: currency,
        }),
    }),
});

export default withGraphqlAdd;