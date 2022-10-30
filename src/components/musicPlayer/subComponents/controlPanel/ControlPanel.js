import React, {useContext, useEffect, useRef, useState} from 'react';
import "./ControlPanel.css";
import Vote from "../../../globalComponents/vote/Vote";
import Display from "../display/Display";
import Controls from "./controls/Controls";
import {MusicPlayerContext} from "../../../../context/MusicPlayerProvider";

function ControlPanel() {

    const {currentSong} =useContext(MusicPlayerContext);
    // let isFilled= Object.keys(currentSong).length > 0;

    useEffect(() => {
        console.log(currentSong);
    }, [currentSong]);

    return (
        <div id={"control-panel"}>
            <Controls />
            <Display songInfo={currentSong} />
            <div className={"likes"}>
                <Vote type={"up-vote"} />
                <Vote type={"down-vote"} />
            </div>
        </div>
    );
}

export default ControlPanel;