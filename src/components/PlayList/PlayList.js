import React, { useState } from 'react';
import styles from './PlayList.module.css';
import TrackList from '../TrackList/TrackList';

function PlayList(props) {
    const [term, setTerm] = useState('');

    const handleChange = (event) => {
        setTerm(event.target.value);
        props.onSave(event.target.value);
    }

    const savePlaylist = () => {
        props.saveToSpotify();
    }

    return (
        <div className={styles.playlist}>
            <input placeholder='Your Playlist' value={term} onChange={handleChange} />
            <TrackList tracks={props.tracks} isRemoval={true} onRemove={props.onRemove}/>
            <button className={styles.button} onClick={savePlaylist} >SAVE PLAYLIST</button>
        </div>
    )
}

export default PlayList;