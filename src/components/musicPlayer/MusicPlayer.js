import React, {useContext, useEffect} from 'react';
import "./MusicPlayer.css";
import {MusicPlayerContext} from "../../context/MusicPlayerProvider";
import Visualizer from "./subComponents/visualizer/Visualizer";
import PlayList from "./subComponents/playlist/PlayList";
import ControlPanel from "./subComponents/controlPanel/ControlPanel";
// import liedje from "../../assets/Marc Anthony - Volver a Comenzar (3.0) (Salsa 2013) (Album 2013).mp3";

function MusicPlayer() {
    const {isLargePlayer, audioElement, currentSong, isPlaying} = useContext(MusicPlayerContext);

    useEffect(() => {
        if(isPlaying){
            audioElement.current.play();
        }
    },[currentSong]);

    return (
        <div id={isLargePlayer ? "large-player" : "compact-player"}>
            {isLargePlayer && <Visualizer />}
            {isLargePlayer && <PlayList />}
            <ControlPanel />
            <audio src={currentSong?.song?.url} preload={"metadata"} ref={audioElement} onTimeUpdate={ontimeupdate}/>
        </div>
    );
}

export default MusicPlayer;