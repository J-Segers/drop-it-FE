import React, {useContext} from 'react';
import "./SongBook.css";
import Song from "./Song/Song";
import Upload from "./upload/Upload";
import {PopUpContext} from "../../../../context/PopupProvider";

function Songs() {
    const {popUpVisible, togglePopUp} = useContext(PopUpContext);
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
            <div id={"upload-btn"} onClick={() => togglePopUp(true)}>
                <div id={"upload-filler"} />
                <h3>add new song</h3>
            </div>
            {popUpVisible ? <Upload /> : ""}
            {songList.map((songInfo) => {
            return <Song song={songInfo}/>;
        })}</div>
    );
}

export default Songs;