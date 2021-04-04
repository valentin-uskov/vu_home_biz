import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Button } from '@material-ui/core';
import { hideModal } from '../../../redux/actions';
import { addProject, updateProject } from '../../../redux/actions';
import useForm from '../../../hooks/useForm';
import { currenciesListSelector, projectSelector } from '../../../redux/selectors';

// const INITIAL_VALUES = {
//     name: '',
//     budget: 0,
//     currencyId: '5fdb4a5721eb2253ba386da7', /* USD ID */
// }

const ProjectDataForm = ({project, onSubmit, currencies}) => {

    const INITIAL_VALUES = {
        name: project.name,
        budget: project.budget,
        currencyId: project.currency.id,
    }

    const { values, handlers, reset } = useForm(INITIAL_VALUES);

    const handleSubmit = (ev) => {
        // console.log({ ...values, id: project.id });
        ev.preventDefault();
        // id ? updateProject({...values, id}) : addProject(values);
        console.log(values);
        onSubmit({...values, id: project.id});
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
            onSubmit={ handleSubmit }
            >
            {/* <button onClick={ handleClose }>CLOSE</button> */}
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
            <Button
                variant="contained"
                color="primary"
            >
                SAVE
            </Button>
        </form>
    );
}

const mapStateToProps = createStructuredSelector({
    currencies: currenciesListSelector,
});

export default connect(mapStateToProps)(ProjectDataForm);