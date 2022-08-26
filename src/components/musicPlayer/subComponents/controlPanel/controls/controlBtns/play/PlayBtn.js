import React, {useState} from 'react';
import "./PlayBtn.css";

function PlayBtn() {
    const [isPlaying, toggleIsPlaying] = useState(false);
    return (
        <div className={"play-btn-container"} onClick={() => toggleIsPlaying(!isPlaying)}>
            <div className={isPlaying ? "play-btn-playing" : "play-btn-paused"} />
        </div>
    );
}

export default PlayBtn;