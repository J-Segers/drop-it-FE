import React, {useContext} from 'react';
import "./Body.css";
import {MusicPlayerContext} from "../../context/MusicPlayerProvider";
import {Route, Routes} from "react-router-dom";
import Home from "../../pages/home/Home";

function Body() {
    const {isLargePlayer} = useContext(MusicPlayerContext);
    return (
        <div id={isLargePlayer ? "page-body-small" : "page-body-large"}>
            <Routes history={"test"}>
                <Route exact path={"/"} element={<Home />} />
            </Routes>
        </div>
    );
}

export default Body;