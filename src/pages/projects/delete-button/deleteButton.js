import React from 'react';
import { connect } from 'react-redux';

import { deleteProject } from '../../../redux/actions';

// import { projectSelector } from '../../redux/selectors';

const DeleteButton = ({ id, deleteButtonClick }) => {

    return (
        <button onClick={ deleteButtonClick }>DELETE - { id }</button>
    );
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteButtonClick: () => dispatch(deleteProject(ownProps.id))
});

export default connect(null, mapDispatchToProps)(DeleteButton);