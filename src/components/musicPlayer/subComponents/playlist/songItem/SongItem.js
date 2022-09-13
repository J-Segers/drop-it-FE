import React, {useEffect} from 'react';
import "./SongItem.css";

function SongItem({song}) {

    useEffect(() => {
        console.log(song);
    })

    return (
        <div className={"song-item"}>
            <img id={"photo"} src={song.songImg.url} alt={""}/>
            <label title={"title"}>{song.songTitle}</label>
            <label title={"artist"}>{song.songArtist}</label>
            <label title={"length"}>{song.songLength}</label>
        </div>
    );
}

export default SongItem;