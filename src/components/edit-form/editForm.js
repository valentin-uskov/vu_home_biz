import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { hideModal } from '../../redux/actions';
import { modalTypeSelector } from '../../redux/selectors';
// import withHocs from './editFormHoc';

const EditForm = ({ modalType, hideModal }) => {

    // const [name, setName] = useState('');
    // const [budget, setBudget] = useState(0);
    // const [currencyId, setCurrencyId] = useState('5fdb4b3821eb2253ba386da9');

    return (
        <div style={{
                display: modalType ? 'flex' : 'none',
                position: 'fixed',
                zIndex: '9',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                backgroundColor: 'rgba(0,0,0,0.7)'  ,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            }}>
            <form style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '220px',
                    justifyContent: 'space-between',
                    backgroundColor: '#fff',
                    padding: '30px'
                }}
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
                <button >ADD TO DATA_BASE</button>
            </form>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    modalType: modalTypeSelector,
});

const mapDispatchToProps = dispatch => {
    return {
        hideModal: () => {
            dispatch(hideModal());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);