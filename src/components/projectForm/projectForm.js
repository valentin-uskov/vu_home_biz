import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { hideModal } from '../../redux/actions';
import { addProject } from '../../redux/actions';


const ProjectForm = ({ formSubmit, hideModal }) => {

    return (
        <form style={{
                display: 'flex',
                flexDirection: 'column',
                height: '220px',
                justifyContent: 'space-between',
                backgroundColor: '#fff',
                padding: '30px'
            }}
            // onSubmit={ (e) => { e.preventDefault() } }
            >
            <button onClick={
                (e) => { /* FIXME :) */
                    e.preventDefault();
                    hideModal()
                }
            }>CLOSE</button>
            <label>Project Name
            <input name="name"></input></label>
            <label>budget
            <input name="budget" type="number"></input></label>
            <label>currency
            <input name="currencyId"></input></label>
            <button onClick={
                (e) => { /* FIXME :) */
                    e.preventDefault();
                    formSubmit();
                }
            }>ADD TO DATA_BASE</button>
        </form>
    );
}

const mapStateToProps = createStructuredSelector({

});


const mapDispatchToProps = dispatch => {
    return {
        formSubmit: () => {
            dispatch(addProject({ 'name': 'TEST', 'budget': 777, 'currencyId': '5fdb4b3821eb2253ba386da9' }));
        },
        hideModal: () => {
            dispatch(hideModal());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);