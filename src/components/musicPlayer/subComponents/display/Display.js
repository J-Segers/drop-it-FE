import React from 'react';
import "./Display.css";

function Display() {
    const currentSong = "greatest song ever played";
    const currentArtist = "Tenacious D";
    return (
        <div id={"display"}>
            <div className={"song-info"}>
                <label title={"current-song-name"}>{currentSong}</label>
                <label title={"current-artist-name"}>{currentArtist}</label>
            </div>
            <label title={"timestamp"}>2:02 / 4:23</label>
        </div>
    );
}

export default Display;