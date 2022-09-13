import React, {useContext} from 'react';
import "./Display.css";
import {MusicPlayerContext} from "../../../../context/MusicPlayerProvider";

function Display({Song}) {

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