import React from 'react';
import "./PlayList.css";
import SongItem from "./songItem/SongItem";

function PlayList() {
    //just for testing, will be removed
    const playerSongList = [["test", "title", "artist", "length"],
        ["test", "title", "artist", "length"],
        ["test", "title", "artist", "length"],
        ["test", "title", "artist", "length"],
        ["test", "title", "artist", "length"],
        ["test", "title", "artist", "length"],
        ["test", "title", "artist", "length"],
        ["test", "title", "artist", "length"],
        ["test", "title", "artist", "length"],
        ["test", "title", "artist", "length"],
        ["test", "title", "artist", "length"],
        ["test", "title", "artist", "length"],
        ["test", "title", "artist", "length"],
        ["test", "title", "artist", "length"],
        ["test", "title", "artist", "length"],
        ["test", "title", "artist", "length"],
        ["test", "title", "artist", "length"],
        ["test", "title", "artist", "length"],
        ["test", "title", "artist", "length"],
        ["test", "title", "artist", "length"],
        ["test", "title", "artist", "length"],
        ["test", "title", "artist", "length"]];

    return (
        <div className={"playlist"}>
            {playerSongList.map((song) => {
                return <SongItem songInfo={song} />
            })}
        </div>
    );
}

export default PlayList;