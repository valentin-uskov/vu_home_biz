// import { withStyles } from '@material-ui/core/styles';
// import { compose } from 'recompose';
import { graphql } from 'react-apollo';

import { addProjectMutation } from './mutations';
import { projectsQuery } from '../projects-list/queries';

const withGraphqlAdd = graphql(addProjectMutation, {
    props: ({ mutate }) => ({
        addProject: project => mutate({
            variables: project,
            refetchQueries: [{ query: projectsQuery }]
        }),
    }),
});

export default withGraphqlAdd;