import react from 'react';
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
            <li>
                <div>{props.name} | {props.artist}</div>
                <button onClick={removeTrack}>-</button>
            </li>
        )
    } else {
        return (
            <li>
                <div>{props.name} | {props.artist}</div>
                <button onClick={addTrack}>+</button>
            </li>
        )
    }
}

export default Track;