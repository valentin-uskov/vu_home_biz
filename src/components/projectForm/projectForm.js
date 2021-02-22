import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { hideModal } from '../../redux/actions';
import { addProject } from '../../redux/actions';
import useForm from '../../hooks/useForm';

const INITIAL_VALUES = {
    name: '',
    budget: 0,
    currencyId: '5fdb4b3821eb2253ba386da9',
};

const ProjectForm = ({ formSubmit, hideModal }) => {
    const { values, handlers, reset } = useForm(INITIAL_VALUES);

    const handleSubmit = (ev) => {
        ev.preventDefault();
        formSubmit(values);
        reset();
    };

    const handleClose = (ev) => {
        ev.preventDefault();
        hideModal()
        reset();
    }

    return (
        <form style={{
                display: 'flex',
                flexDirection: 'column',
                height: '220px',
                justifyContent: 'space-between',
                backgroundColor: '#fff',
                padding: '30px'
            }}
            onSubmit={ handleSubmit }
            >
            <button onClick={ handleClose }>CLOSE</button>
            <label>Project Name
            <input name="name" { ...handlers.name } /></label>
            <label>budget
            <input name="budget" type="number" { ...handlers.budget } /></label>
            <label>currency
                {/* FIXME >>> */}
            <input name="currencyId" { ...handlers.currencyId } /></label>
            <button>ADD TO DATA_BASE</button>
        </form>
    );
}

const mapStateToProps = createStructuredSelector({

});


const mapDispatchToProps = dispatch => {
    return {
        formSubmit: (values) => {
            dispatch(addProject({ ...values }));
        },
        hideModal: () => {
            dispatch(hideModal());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);