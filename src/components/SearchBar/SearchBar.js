import React, { useState } from 'react';
import styles from './SearchBar.module.css';

function SearchBar() {
const [value, setValue] = useState('');

const onChangeHandler = (e) => {
    setValue(e.target.value);
}

    return (
        <>
            <input
                type='text'
                placeholder='Search'
                value={value}
                onChange={onChangeHandler}
                className={styles.searchbar}
            />
        </>
    )
};

export default SearchBar;