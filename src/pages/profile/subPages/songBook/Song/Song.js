import React from 'react';
import "./Song.css";
import convertMsToMinAndSec from "../../../../../helperFuncties/convertLengthToTime";

function Song({song}) {

    return (
        <div className={"song-container"}>
            <div className={"song-img-container"}>
                <img src={Object.keys(song).length > 0 ? song.songImg.url : ""} alt="" />
            </div>
            <span>
                <label title={"title"}>{`title: ${song.title}`}</label>
                <label title={"genre"}>{`genre: ${song.genre}`}</label>
                <label title={"length"}>{`length: ${convertMsToMinAndSec(song.length)}`}</label>
            </span>
        </div>
    );
}

export default Song;