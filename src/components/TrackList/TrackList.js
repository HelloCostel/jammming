import React from 'react';
import styles from './TrackList.module.css';
import Track from '../Track/Track';

function TrackList(props) {
    return (
        <ul>
            {props.tracks.map(track => {
                console.log(track.image)
                return (
                    <Track
                        key={track.id}
                        id={track.id}
                        name={track.name}
                        image={track.image}
                        artist={track.artist}
                        onAdd={props.onAdd}
                        onRemove={props.onRemove}
                        isRemoval={props.isRemoval}
                    />
                )
            })}
        </ul>
    )
}

export default TrackList;