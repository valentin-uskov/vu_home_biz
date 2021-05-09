import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

const SearchForm = ({ onSearch }) => {

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        onSearch(searchQuery);
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSearch();
        }
    }

    return (
        <form>
            <input
                style={{'width': 'calc(100% - 40px)', 'padding': '10px', 'margin': '20px 0' }}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => handleKeyPress(e)}
                placeholder="Your search query..."
            />
            <Button
                variant="contained"
                color="primary"
                startIcon={<SearchIcon />}
                onClick={() => handleSearch()}
            >
                Search
            </Button>
        </form>
    );
}

export default SearchForm;