import React, {useEffect} from 'react';
import "./SongItem.css";

function SongItem({song}) {

    useEffect(() => {
        console.log(song);
    })

    return (
        <div className={"song-item"}>
            <img id={"photo"} src={song.songImg.url !== '' ? song.songImg.url : ''} alt={""}/>
            <label title={"title"}>{song.title}</label>
            <label title={"artist"}>{song.artist}</label>
            <label title={"length"}>{song.length}</label>
        </div>
    );
}

export default SongItem;