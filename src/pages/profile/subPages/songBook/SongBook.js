import React from 'react';
import "./SongBook.css";
import Song from "./Song/Song";

function Songs() {
    let songList = [["title", "artist", "collabs", "length", "genre", "songwriter", "file"],
                    ["title", "artist", "collabs", "length", "genre", "songwriter", "file"],
                    ["title", "artist", "collabs", "length", "genre", "songwriter", "file"],
                    ["title", "artist", "collabs", "length", "genre", "songwriter", "file"],
                    ["title", "artist", "collabs", "length", "genre", "songwriter", "file"],
                    ["title", "artist", "collabs", "length", "genre", "songwriter", "file"],
                    ["title", "artist", "collabs", "length", "genre", "songwriter", "file"],
                    ["title", "artist", "collabs", "length", "genre", "songwriter", "file"],
                    ["title", "artist", "collabs", "length", "genre", "songwriter", "file"],
                    ["title", "artist", "collabs", "length", "genre", "songwriter", "file"],
                    ["title", "artist", "collabs", "length", "genre", "songwriter", "file"],
                    ["title", "artist", "collabs", "length", "genre", "songwriter", "file"],
                    ["title", "artist", "collabs", "length", "genre", "songwriter", "file"],
                    ["title", "artist", "collabs", "length", "genre", "songwriter", "file"],
                    ["title", "artist", "collabs", "length", "genre", "songwriter", "file"],
                    ["title", "artist", "collabs", "length", "genre", "songwriter", "file"],
                    ["title", "artist", "collabs", "length", "genre", "songwriter", "file"],
                    ["title", "artist", "collabs", "length", "genre", "songwriter", "file"],
                    ["title", "artist", "collabs", "length", "genre", "songwriter", "file"],
                    ["title", "artist", "collabs", "length", "genre", "songwriter", "file"],
                    ["title", "artist", "collabs", "length", "genre", "songwriter", "file"],
                    ["title", "artist", "collabs", "length", "genre", "songwriter", "file"],
                    ["title", "artist", "collabs", "length", "genre", "songwriter", "file"],
                    ["title", "artist", "collabs", "length", "genre", "songwriter", "file"],
                    ["title", "artist", "collabs", "length", "genre", "songwriter", "file"],
                    ["title", "artist", "collabs", "length", "genre", "songwriter", "file"],
                    ["title", "artist", "collabs", "length", "genre", "songwriter", "file"],
                    ["title", "artist", "collabs", "length", "genre", "songwriter", "file"],
                    ["title", "artist", "collabs", "length", "genre", "songwriter", "file"],
                    ["title", "artist", "collabs", "length", "genre", "songwriter", "file"],
                    ["title", "artist", "collabs", "length", "genre", "songwriter", "file"],
                    ["title", "artist", "collabs", "length", "genre", "songwriter", "file"]];
    return (
        <div className={"song-book-container"}>
            <div id={"upload-btn"}>
                <div id={"upload-filler"} />
                <h3>add new song</h3>
            </div>
            {songList.map((songInfo) => {
            return <Song song={songInfo}/>;
        })}</div>
    );
}

export default Songs;