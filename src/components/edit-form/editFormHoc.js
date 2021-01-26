// import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';
import { graphql } from 'react-apollo';

import { addProjectMutation, updateProjectMutation } from './mutations';
import { projectsQuery } from '../projects-list/queries';


const withGraphQl = compose(
    graphql(addProjectMutation, {
        props: ({ mutate }) => ({
            addProject: project => mutate({
                variables: project,
                refetchQueries: [{ query: projectsQuery }]
            }),
        }),
    }),
    graphql(updateProjectMutation, {
        props: ({ mutate }) => ({
            updateProject: project => mutate({
                variables: project,
                refetchQueries: [{ query: projectsQuery }]
            }),
        }),
    })
)


export default compose(withGraphQl);