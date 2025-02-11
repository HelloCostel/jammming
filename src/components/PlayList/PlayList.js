import React from 'react';
import styles from './PlayList.module.css';
import TrackList from '../TrackList/TrackList';

function PlayList(props) {

    return (
        <>
            <h2>PlayList</h2>
            <TrackList tracks={props.tracks} isRemoval={true} onRemove={props.onRemove}/>
        </>
    )
}

export default PlayList;