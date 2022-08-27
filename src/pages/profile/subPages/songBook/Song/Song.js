import React from 'react';
import "./Song.css";
import songImg from "../../../../../assets/JackBlack.jpg";

function Song({song}) {
    return (
        <div className={"song-container"}>
            <div className={"song-img-container"}>
                <img src={songImg} alt="" />
            </div>
            <span>
                <label title={"title"}>{song[0]}</label>
                <label title={"genre"}>{song[4]}</label>
            </span>
        </div>
    );
}

export default Song;