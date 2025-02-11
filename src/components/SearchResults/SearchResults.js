import React from 'react';
import styles from './SearchResults.module.css';
import TrackList from '../TrackList/TrackList';

function SearchResults(props) {
    return (
        <div>
            <h2>Results</h2>
            <TrackList tracks={props.tracks}/>
        </div>
    )
}

export default SearchResults;