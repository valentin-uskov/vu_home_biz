// import { withStyles } from '@material-ui/core/styles';
// import { compose } from 'recompose';
import { graphql } from 'react-apollo';

import { addProjectMutation } from './mutations';

const withGraphqlAdd = graphql(addProjectMutation, {
    props: ({ mutate }) => ({
        addProject: project => mutate({
            variables: project,
        }),
    }),
});

export default withGraphqlAdd;