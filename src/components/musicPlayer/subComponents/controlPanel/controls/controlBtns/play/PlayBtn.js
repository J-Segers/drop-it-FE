import React, {useContext, useEffect, useState} from 'react';
import "./PlayBtn.css";
import {MusicPlayerContext} from "../../../../../../../context/MusicPlayerProvider";

function PlayBtn() {
    const {isPlaying, startPlaying} = useContext(MusicPlayerContext);
    const [paused, togglePaused] = useState(false);

    useEffect(() => {
        console.log(isPlaying);
    }, [isPlaying]);

    return (
        <div className={"play-btn-container"} onClick={() => {
            startPlaying();
            togglePaused(!paused)
        }} >
            <div className={paused ? "play-btn-playing" : "play-btn-paused"} onClick={() => startPlaying()} />
        </div>
    );
}

export default PlayBtn;