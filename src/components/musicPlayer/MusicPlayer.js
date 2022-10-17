import React, {useContext} from 'react';
import "./MusicPlayer.css";
import {MusicPlayerContext} from "../../context/MusicPlayerProvider";
import Visualizer from "./subComponents/visualizer/Visualizer";
import PlayList from "./subComponents/playlist/PlayList";
import ControlPanel from "./subComponents/controlPanel/ControlPanel";
import liedje from "../../assets/Marc Anthony - Volver a Comenzar (3.0) (Salsa 2013) (Album 2013).mp3";

function MusicPlayer() {
    const {isLargePlayer, audioElement} = useContext(MusicPlayerContext);

    return (
        <div id={isLargePlayer ? "large-player" : "compact-player"}>
            {isLargePlayer && <Visualizer />}
            {isLargePlayer && <PlayList />}
            <ControlPanel />
            <audio src={liedje} preload={"metadata"} ref={audioElement} />
        </div>
    );
}

export default MusicPlayer;