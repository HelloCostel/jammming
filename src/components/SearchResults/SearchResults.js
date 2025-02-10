import React, { useState } from 'react';
import styles from './SearchResults.module.css';
import TrackList from '../TrackList/TrackList';

function SearchResults () {

    return (
        <div>
            <TrackList results={results}/>
        </div>
    )
}

export default SearchResults;