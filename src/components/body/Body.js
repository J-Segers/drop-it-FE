import React, {useContext} from 'react';
import "./Body.css";
import {MusicPlayerContext} from "../../context/MusicPlayerProvider";
import {Route, Routes} from "react-router-dom";
import Home from "../../pages/home/Home";
import Profile from "../../pages/profile/Profile";
import Info from "../../pages/profile/subPages/info/Info";
import SongBook from "../../pages/profile/subPages/songBook/SongBook";
import Stats from "../../pages/profile/subPages/stats/Stats";

function Body() {
    const {isLargePlayer} = useContext(MusicPlayerContext);
    return (
        <div id={isLargePlayer ? "page-body-small" : "page-body-large"}>
            <Routes history={"test"}>
                <Route exact path={"/"} element={<Home />} />
                <Route path={"/profile/*"} element={<Profile />}>
                    <Route path={"info/:username"} element={<Info />} />
                    <Route path={"songs"} element={<SongBook />} />
                    <Route path={"stats"} element={<Stats />} />
                </Route>
                {/*<Route path={"settings"} element={<Settings />} />*/}
            </Routes>
        </div>
    );
}

export default Body;