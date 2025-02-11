import React from 'react';
import styles from './TrackList.module.css';
import Track from '../Track/Track';

function TrackList(props) {
    return (
        <ul>
            {props.tracks.map(track => {
                return <Track key={track.title} title={track.title} artist={track.artist} />
            })}
        </ul>
    )
}

export default TrackList;