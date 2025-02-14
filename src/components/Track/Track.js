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
                <div>{props.name} | {props.artist}
                    <img src={props.image} alt='album cover' />
                </div>
                <button onClick={removeTrack}>-</button>
            </li>
        )
    } else {
        return (
            <li>
                <div>{props.name} | {props.artist}
                    <img src={props.image} alt='album cover' />
                </div>
                <button onClick={addTrack}>+</button>
            </li>
        )
    }
}

export default Track;