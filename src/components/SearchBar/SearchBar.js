import React, { useState } from 'react';
import styles from './SearchBar.module.css';

function SearchBar(props) {
    const [term, setTerm] = useState('');
    const handleTermChange = (event) => {
        setTerm(event.target.value);
    }

    const search = () => {
        props.onSearch(term);
    }

    return (
        <div id='search-bar'>
            <input placeholder='Enter A Song, Album, or Artist' onChange={handleTermChange}/>
            <button onClick={search} >SEARCH</button>
        </div>
    )
}

export default SearchBar;