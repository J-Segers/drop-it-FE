import React, {useContext} from 'react';
import "./NextBtn.css";
import {MusicPlayerContext} from "../../../../../../../context/MusicPlayerProvider";

function NextBtn() {
    const {nextSong} = useContext(MusicPlayerContext);
    return (
        <div className={"next-container"}>
            <div className={"next-btn"} onClick={nextSong} />
        </div>
    );
}

export default NextBtn;