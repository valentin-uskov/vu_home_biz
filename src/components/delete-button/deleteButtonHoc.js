import { compose } from 'recompose';
import { graphql } from 'react-apollo';

import { deleteProjectMutation } from './mutations';
import { projectsQuery } from '../projects-list/queries';

const withGraphqlDelete = graphql(deleteProjectMutation, {
    props: ({ mutate }) => ({
        deleteProject: id => mutate({
            variables: id,
            refetchQueries: [{
                query: projectsQuery,
                variables: { name: '' },
            }]
        }),
    }),
});

export default compose(withGraphqlDelete);