import React, {useContext} from 'react';
import "./MusicPlayer.css";
import {MusicPlayerContext} from "../../context/MusicPlayerProvider";
import Visualizer from "./subComponents/visualizer/Visualizer";
import PlayList from "./subComponents/playlist/PlayList";
import ControlPanel from "./subComponents/controlPanel/ControlPanel";

function MusicPlayer() {
    const {isLargePlayer} = useContext(MusicPlayerContext);

    return (
        <div id={isLargePlayer ? "large-player" : "compact-player"}>
            {isLargePlayer ? <Visualizer /> : ""}
            {isLargePlayer ? <PlayList /> : ""}
            <ControlPanel />
        </div>
    );
}

export default MusicPlayer;