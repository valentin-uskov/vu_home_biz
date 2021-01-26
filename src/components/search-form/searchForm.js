import React from 'react';

const SearchForm = ({ handleChange, handleSearch }) => {

    return (
        <div>
            <input
                style={{'width': 'calc(100% - 60px)', 'padding': '10px', 'margin': '20px' }}
                onChange={ (e) => { handleChange(e) } }
                onKeyPress={(e) => handleSearch(e)}
                placeholder="Input your search query and press ENTER"
            />
        </div>
    );
}

export default SearchForm;