import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import CloseIcon from '@material-ui/icons/Close';
import SaveIcon from '@material-ui/icons/Save';
import Box from '@material-ui/core/Box';
import useForm from '../../../hooks/useForm';
import { currenciesListSelector } from '../../../redux/selectors';
import styled from 'styled-components';

const StyledProjectDataForm = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background: #FFFFFF;
    padding: 2em;
    margin: 1em;
    border-radius: .5em;
    max-width: 420px;

    & > *:nth-child(1) {
        width: 100%;
    }

    & > * {
        width: calc(50% - 0.4em);
    }
`;

const INITIAL_VALUES = currencies => ({
    name: '',
    budget: 0,
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
        <StyledProjectDataForm onSubmit={handleSubmit}>
            <Box mb={2}>
                <TextField
                    label="Project Name"
                    variant="outlined"
                    name="name"
                    type="text"
                    margin="none"
                    fullWidth={true}
                    {...handlers.name}
                />
            </Box>
            <Box mb={2}>
                <TextField
                    label="Budget"
                    variant="outlined"
                    name="budget"
                    type="number"
                    margin="none"
                    fullWidth={true}
                    {...handlers.budget}
                />
            </Box>
            <Box mb={2}>
                <TextField
                    select
                    name="currencyId"
                    variant="outlined"
                    margin="none"
                    {...handlers.currencyId}
                    fullWidth={true}
                >
                    {
                        currencies.map((currency, i) => {
                            return (
                                <MenuItem key={currency.id} value={currency.id}>
                                    { currency.name}
                                </MenuItem>
                            );
                        })
                    }
                </TextField>
            </Box>
            <Button
                type="submit"
                variant="contained"
                color="primary"
                startIcon={<SaveIcon />}
            >
                save
            </Button>
            <Button
                variant="contained"
                color="secondary"
                startIcon={<CloseIcon />}
                onClick={() => { onCancel() }}
            >
                cancel
            </Button>
        </StyledProjectDataForm>
    );
}

const mapStateToProps = createStructuredSelector({
    currencies: currenciesListSelector,
});

export default connect(mapStateToProps)(ProjectDataForm);