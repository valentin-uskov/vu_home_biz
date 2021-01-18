import React, { useState } from 'react';

const EditForm = () => {

  const [name, setName] = useState('');

    const handleSubmit = (ev) => {
        ev.preventDefault();
        name && console.log(name);
    };


    const handleChange = (ev) => {
        setName(ev.target.value);
        console.log('input has been changed');
    };

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <label>Project Name</label>
                <input onChange={handleChange}></input>
                <button >ADD TO DATA_BASE</button>
            </form>

        </div>
    );
}

export default EditForm;