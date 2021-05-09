import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Button from '@material-ui/core/Button';
import useForm from '../../../hooks/useForm';
import { currenciesListSelector } from '../../../redux/selectors';

const INITIAL_VALUES = currencies => ({
    name: '',
    budget: '',
    currencyId: currencies[0]?.id,
});

const ProjectDataForm = ({ project, onSubmit, onCancel, currencies }) => {

    const { values, handlers, reset } =
        useForm(project
            ? { ...project, currencyId: project.currency.id }
            : INITIAL_VALUES(currencies));

    const handleSubmit = (ev) => {
        ev.preventDefault();
        project ? onSubmit({ ...values, id: project.id }) : onSubmit({ ...values });
        reset();
    };

    return (
        <form style={{
            display: 'flex',
            flexDirection: 'column',
            height: '220px',
            justifyContent: 'space-between',
            backgroundColor: '#fff',
            padding: '30px'
        }}
            onSubmit={handleSubmit}
        >
            <label>Project Name
                <input name="name" type="text" {...handlers.name} />
            </label>
            <label>budget
                <input name="budget" type="number" {...handlers.budget} />
            </label>
            <label>currency
                <select name="currencyId" {...handlers.currencyId} >
                    {
                        currencies.map((currency, i) => {
                            return (
                                <option key={currency.id} value={currency.id}>
                                    { currency.name}
                                </option>
                            );
                        })
                    }
                </select>
            </label>
            <Button
                type="submit"
                variant="contained"
                color="primary"
            >
                save
            </Button>
            <Button
                variant="contained"
                color="secondary"
                onClick={() => { onCancel() }}
            >
                cancel
            </Button>
        </form>
    );
}

const mapStateToProps = createStructuredSelector({
    currencies: currenciesListSelector,
});

export default connect(mapStateToProps)(ProjectDataForm);