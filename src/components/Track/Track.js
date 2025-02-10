import React, { useState } from 'react';
import styles from './Track.module.css';

function Track(track) {
    return (
        <div className={styles.track}>
            <h2>{track.name}</h2>
            <p>{track.artist}</p>
        </div>
    )
}

export default Track;