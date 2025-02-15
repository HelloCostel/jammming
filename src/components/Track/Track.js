import React from 'react';
import styles from './Track.module.css';

function Track(props) {

    const addTrack = () => {
        props.onAdd(props.id);
    }

    const removeTrack = () => {
        props.onRemove(props.id);
    }

    if (props.isRemoval) {
        return (
            <li className={styles.track}>
                <div>
                    <img src={props.image} alt='album cover' />
                    <p>{props.name} | {props.artist}</p>
                </div>
                <button onClick={removeTrack}>-</button>
            </li>
        )
    } else {
        return (
            <li className={styles.track}>
                <div>
                    <img src={props.image} alt='album cover' />
                    <p>{props.name} | {props.artist}</p>
                </div>
                <button onClick={addTrack}>+</button>
            </li>
        )
    }
}

export default Track;