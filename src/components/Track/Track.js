import react from 'react';
import styles from './Track.module.css';

function Track(props) {
    return (
        <li>{props.title} | {props.artist}</li>
    )
}

export default Track;