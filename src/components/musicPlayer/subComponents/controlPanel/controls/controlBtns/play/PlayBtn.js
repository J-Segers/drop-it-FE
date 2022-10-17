import React, {useContext, useEffect, useState} from 'react';
import "./PlayBtn.css";
import {MusicPlayerContext} from "../../../../../../../context/MusicPlayerProvider";

function PlayBtn() {
    const {isPlaying, toggleIsPlaying} = useContext(MusicPlayerContext);

    return (
        <div className={"play-btn-container"} onClick={() => toggleIsPlaying(!isPlaying)}>
            <div className={isPlaying ? "play-btn-playing" : "play-btn-paused"} />
        </div>
    );
}

export default PlayBtn;