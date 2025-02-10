import React from 'react';
import styles from './TrackList.module.css';
import Track from '../Track/Track';

function TrackList (results) {
    return (
        <div>
            {results.map(result => {
                rerurn (
                    <Track track={result}/>
                )
            })}
        </div>
    )
}

export default TrackList;