import React, {useContext} from 'react';
import "./Body.css";
import {MusicPlayerContext} from "../../context/MusicPlayerProvider";

function Body() {
    const {isLargePlayer} = useContext(MusicPlayerContext);
    return (
        <div id={isLargePlayer ? "page-body-small" : "page-body-large"}>
            &nbsp;
        </div>
    );
}

export default Body;