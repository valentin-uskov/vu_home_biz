// import { withStyles } from '@material-ui/core/styles';
// import { compose } from 'recompose';
import { graphql } from 'react-apollo';

import { projectsQuery } from './queries';

export default graphql(projectsQuery);