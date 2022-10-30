import React, {useContext} from 'react';
import "./PrevBtn.css";
import {MusicPlayerContext} from "../../../../../../../context/MusicPlayerProvider";

function PrevBtn() {

    const {audioElement, previousSong } = useContext(MusicPlayerContext);

    const resetSongProgress = () => {
        audioElement.current.currentTime = 0.0;
    }

    return (
        <div className={"prev-btn-container"} onClick={resetSongProgress} onDoubleClick={previousSong}>
            <div className={"prev-btn"} />
        </div>
    );
}

export default PrevBtn;