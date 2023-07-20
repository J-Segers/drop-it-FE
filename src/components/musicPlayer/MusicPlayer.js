import React, {useContext, useEffect} from 'react';
import "./MusicPlayer.css";
import {MusicPlayerContext} from "../../context/MusicPlayerProvider";
import Visualizer from "./subComponents/visualizer/Visualizer";
import PlayList from "./subComponents/playlist/PlayList";
import ControlPanel from "./subComponents/controlPanel/ControlPanel";

function MusicPlayer() {
    const {isLargePlayer, audioElement, currentSong, isPlaying, nextSong} = useContext(MusicPlayerContext);

    useEffect(() => {
        if(isPlaying){
            audioElement.current.play();
        }
    },[currentSong]);

    useEffect(() => {
        if(audioElement.current.currentTime > audioElement.current.duration) {
            nextSong();
        }
    })

    return (
        <div id={isLargePlayer ? "large-player" : "compact-player"}>
            {isLargePlayer && <Visualizer />}
            {isLargePlayer && <PlayList />}
            <ControlPanel />
            <audio src={currentSong?.song?.url} preload={"metadata"} ref={audioElement} onTimeUpdate={ontimeupdate} />
        </div>
    );
}

export default MusicPlayer;