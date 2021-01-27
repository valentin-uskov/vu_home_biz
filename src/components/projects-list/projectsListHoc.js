// import { withStyles } from '@material-ui/core/styles';
// import { compose } from 'recompose';
import { graphql } from 'react-apollo';

import { projectsQuery } from './queries';

const withGraphQl = graphql(projectsQuery, {
    options: ({ name = ''}) => ({
        variables: { name },
    }),
})

export default withGraphQl;