import React from 'react';
import styles from './SearchResults.module.css';
import SearchBar from '../SearchBar/SearchBar';
import TrackList from '../TrackList/TrackList';

function SearchResults(props) {
    return (
        <div className={styles.searchresults}>
            <h2>Results</h2>
            <TrackList tracks={props.tracks} onAdd={props.onAdd}/>
        </div>
    )
}

export default SearchResults;