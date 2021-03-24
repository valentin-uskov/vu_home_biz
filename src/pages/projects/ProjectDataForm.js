import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { hideModal } from '../../redux/actions';
import { addProject, updateProject } from '../../redux/actions';
import useForm from '../../hooks/useForm';
import { currenciesListSelector, projectSelector } from '../../redux/selectors';

const ProjectDataForm = ({ id, project, currencies, addProject, updateProject, onCloseModal }) => {

    const { values, handlers, reset } = useForm(project, currencies);

    const handleSubmit = (ev) => {
        ev.preventDefault();
        id ? updateProject({...values, id}) : addProject(values);
        reset();
    };

    const handleClose = (ev) => {
        ev.preventDefault();
        onCloseModal()
        reset();
    }

    // if (!project) return null;

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
    project: projectSelector,
    currencies: currenciesListSelector,
});

const mapDispatchToProps = dispatch => {
    return {
        addProject: (values) => {
            dispatch(addProject({ ...values }));
        },
        updateProject: (values) => {
            dispatch(updateProject({ ...values }));
        },
        onCloseModal: () => {
            dispatch(hideModal());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDataForm);