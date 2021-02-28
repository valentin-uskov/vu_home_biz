import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { hideModal } from '../../redux/actions';
import { addProject } from '../../redux/actions';
import useForm from '../../hooks/useForm';
import { currenciesListSelector } from '../../redux/selectors';

const INITIAL_VALUES = {
    name: '',
    budget: 0,
    currencyId: '',
};

const ProjectForm = ({ currencies, formSubmit, onCloseModal }) => {

    const { values, handlers, reset } = useForm(INITIAL_VALUES);

    const handleSubmit = (ev) => {
        ev.preventDefault();
        // FIXME !! newValues >>
        const newValues = { ...values, currencyId: (values.currencyId ? values.currencyId : currencies[0].id) };
        formSubmit(newValues);
        reset();
    };

    const handleClose = (ev) => {
        ev.preventDefault();
        onCloseModal()
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
                <input name="name" type="text" { ...handlers.name } />
            </label>
            <label>budget
                <input name="budget" type="number" { ...handlers.budget } />
            </label>
            <label>currency
                <select name="currencyId" { ...handlers.currencyId } >
                {
                    currencies.map((currency, i) => {
                        return (
                            <option key={ currency.id } value={ currency.id }>
                                { currency.name }
                            </option>
                        );
                    })
                }
                </select>
            </label>
            <button>ADD TO DATA_BASE</button>
        </form>
    );
}


const mapStateToProps = createStructuredSelector({
    currencies: currenciesListSelector,
});

const mapDispatchToProps = dispatch => {
    return {
        formSubmit: (values) => {
            dispatch(addProject({ ...values }));
        },
        onCloseModal: () => {
            dispatch(hideModal());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);