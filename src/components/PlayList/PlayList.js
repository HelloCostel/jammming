import React, { useState } from 'react';
import styles from './PlayList.module.css';
import TrackList from '../TrackList/TrackList';

function PlayList() {
    const [playlist, setPlaylist] = useState([]);

    return (
        <>
            <TrackList tracks={playlist} />
        </>
    )
}

export default PlayList;