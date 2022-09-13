import React, {useEffect, useState} from 'react';
import "./Song.css";

function Song({song}) {

    return (
        <div className={"song-container"}>
            <div className={"song-img-container"}>
                <img src={song.songImg.url} alt="" />
            </div>
            <span>
                <label title={"title"}>{song.songTitle}</label>
                <label title={"genre"}>{song.songGenre}</label>
            </span>
        </div>
    );
}

export default Song;