import React, {useContext} from 'react';
import "./SongBook.css";
import Song from "./Song/Song";
import Upload from "./upload/Upload";
import {PopUpContext} from "../../../../context/PopupProvider";

function Songs() {
    const {popUpUploadVisible, toggleUploadPopUp} = useContext(PopUpContext);
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
            <div id={"upload-btn"} onClick={() => toggleUploadPopUp(true)}>
                <div id={"upload-filler"} />
                <h3>add new song</h3>
            </div>
            {popUpUploadVisible ? <Upload /> : ""}
            {songList.map((songInfo) => {
            return <Song song={songInfo}/>;
        })}</div>
    );
}

export default Songs;