import React, {useContext} from 'react';
import "./PlayList.css";
import SongItem from "./songItem/SongItem";
import {MusicPlayerContext} from "../../../../context/MusicPlayerProvider";

function PlayList() {
    //just for testing, will be removed
    const {playList} = useContext(MusicPlayerContext);

    return (
        <div className={"playlist"}>
            {playList.length > 0 && playList.map((song) => {
                return <SongItem key={song.id} song={song} />
            })}
        </div>
    );
}

export default PlayList;