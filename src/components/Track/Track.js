import react from 'react';
import styles from './Track.module.css';

function Track(props) {

    const addTrack = () => {
        props.onAdd(props.id);
    }

    return (
        <li>
            <div>{props.name} | {props.artist}</div>
            <button onClick={addTrack}>+</button>
        </li>
    )
}

export default Track;