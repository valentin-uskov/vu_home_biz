import React, { useState } from 'react';
import withHocs from './editFormHoc';

const EditForm = ({ addCurrency }) => {

  const [name, setName] = useState('');

    const handleSubmit = (ev) => {
        ev.preventDefault();
        if (name) {
            console.log(addCurrency);
            addCurrency({ name, sign: 'SIGN' });
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