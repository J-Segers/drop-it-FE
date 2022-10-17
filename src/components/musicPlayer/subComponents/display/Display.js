import React, {useContext, useEffect, useState} from 'react';
import "./Display.css";
import {MusicPlayerContext} from "../../../../context/MusicPlayerProvider";

function Display({song}) {

    const {isPlaying} = useContext(MusicPlayerContext);
    const [currentSongInfo, setCurrentSongInfo] = useState("");

    let min = 3;
    let sec = 8;

    // useEffect(() => {
    //     setCurrentSongInfo(`${song.title} - ${song.artist}`);
    // }, [song])

    return (
        <div id={"display"}>
            <label id={"current-song-info"} title={"current-song-info"}>{isPlaying && currentSongInfo}</label>
            <input type={"range"} id={"current-song-slider"} max={100} value={0}/>
            <label id={"current-song-timestamp"} title={"current-song-timestamp"}>{sec < 10 ? `0:00 / ${min}:0${sec}` : `0:00 / ${min}:${sec}`}</label>
        </div>
    );
}

export default Display;