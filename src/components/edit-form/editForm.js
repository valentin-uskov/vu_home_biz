import React, { useState } from 'react';
import withHocs from './editFormHoc';

const EditForm = ({ addProject }) => {

  const [name, setName] = useState('');

    const handleSubmit = (ev) => {
        ev.preventDefault();
        if (name) {
            addProject({ name, budget: 111, currencyId: '5fdb4b3821eb2253ba386da9', projectStatusId: 'pohui' });
        }
    };

    const handleChange = (ev) => {
        setName(ev.target.value);
        // console.log('input has been changed');
    };

    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <label>Project Name</label>
                <input onChange={ handleChange }></input>
                <button >ADD TO DATA_BASE</button>
            </form>
        </div>
    );
}

export default withHocs( EditForm );