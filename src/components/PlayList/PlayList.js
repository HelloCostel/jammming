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
        <>
            <h2>PlayList</h2>
            <input value={term} onChange={handleChange} />
            <TrackList tracks={props.tracks} isRemoval={true} onRemove={props.onRemove}/>
            <button onClick={savePlaylist} >SAVE PLAYLIST</button>
        </>
    )
}

export default PlayList;