import React from 'react';
import "./SongItem.css";

function SongItem({songInfo}) {
    return (
        <div className={"song-item"}>
            <div id={"photo"}>{songInfo[0]}</div> {/*will be replaced by an image*/}
            <label title={"title"}>{songInfo[1]}</label>
            <label title={"artist"}>{songInfo[2]}</label>
            <label title={"length"}>{songInfo[3]}</label>
        </div>
    );
}

export default SongItem;