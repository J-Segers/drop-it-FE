import React from 'react';
import "./Body.css";
import {Route, Routes} from "react-router-dom";
import Home from "../../pages/home/Home";
import Profile from "../../pages/profile/Profile";
import Info from "../../pages/profile/subPages/info/Info";
import SongBook from "../../pages/profile/subPages/songBook/SongBook";
import Stats from "../../pages/profile/subPages/stats/Stats";
import Settings from "../../pages/settings/Settings";

function Body() {
    return (
        <div id={"page-body"}>
            <Routes history={"test"}>
                <Route exact path={"/"} element={<Home />} />
                <Route path={"/profile/:username/*"} element={<Profile />}>
                    <Route path={"info"} element={<Info />} />
                    <Route path={"songs"} element={<SongBook />} />
                    <Route path={"stats"} element={<Stats />} />
                    <Route path={"settings"} element={<Settings />} />
                </Route>
            </Routes>
        </div>
    );
}

export default Body;