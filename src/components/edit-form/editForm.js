import React, { useState, useEffect } from 'react';
import withHocs from './editFormHoc';

const EditForm = ({ addProject, isModalOpen, handleCloseModal }) => {

    const [name, setName] = useState('');
    const [budget, setBudget] = useState(0);
    const [currencyId, setCurrencyId] = useState('5fdb4b3821eb2253ba386da9');
    const [projectStatusId, setProjectStatusId] = useState('FUCKING STATUS');

    const handleSubmit = (ev) => {
        ev.preventDefault();
        if (name) {
            addProject({ name, budget: Number(budget), currencyId, projectStatusId });
        }
    };

    return (
        <div style={{
                display: isModalOpen ? 'flex' : 'none',
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
                onSubmit={ handleSubmit }>
                <button onClick={ () => { handleCloseModal() } }>CLOSE</button>
                <label>Project Name
                <input name="name" onChange={ (ev) => { setName(ev.target.value) } }></input></label>
                <label>budget
                <input name="budget" type="number" onChange={ (ev) => { setBudget(ev.target.value) } }></input></label>
                <label>currency
                <input name="currencyId" onChange={ (ev) => { setCurrencyId(ev.target.value) } }></input></label>
                <label>projStat(TEMPORARY)
                <input name="projectStatusId" onChange={ (ev) => { setProjectStatusId(ev.target.value) } }></input></label>
                <button >ADD TO DATA_BASE</button>
            </form>
        </div>
    );
}

export default withHocs( EditForm );