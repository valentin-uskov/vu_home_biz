import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import styled from 'styled-components';

const StyledSearchForm = styled.form`
    display: flex;
    width: 100%;
    margin-bottom: 2em;

    & > input {
        width: 100%;
        max-width: 100%;
        margin-right: 0.5em;
    }
`;

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
        <StyledSearchForm>
            <Input
                fullWidth={true}
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
        </StyledSearchForm>
    );
}

export default SearchForm;