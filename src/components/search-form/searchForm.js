import React from 'react';

const SearchForm = ({ handleChange, handleSearch }) => {

    return (
        <div>
            <input
                style={{'width': 'calc(100% - 40px)', 'padding': '10px', 'margin': '20px 0' }}
                onChange={ (e) => { handleChange(e) } }
                onKeyPress={(e) => handleSearch(e)}
                placeholder="Input your search query and press ENTER"
            />
            <button onClick={(e) => handleSearch(e)}>SEARCH</button>
        </div>
    );
}

export default SearchForm;