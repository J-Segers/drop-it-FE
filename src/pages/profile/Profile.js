import React, {useContext, useEffect} from 'react';
import "./Profile.css";
import {MusicPlayerContext} from "../../context/MusicPlayerProvider";
import {Outlet} from "react-router-dom";
import profileImage from "../../assets/JackBlack.jpg";
import Btn from "../../components/globalComponents/btn/Btn";
import {AuthenticationContext} from "../../context/AuthenticationContextProvider";

function Profile() {
    const {togglePlayer} = useContext(MusicPlayerContext);
    const {auth} = useContext(AuthenticationContext);
    useEffect(() => {
        togglePlayer(false);
    })

    return (
        <div id={"profile-container"}>
            <div id={"profile-header"}>
                <div id={"profile-image"}>
                    <img src={profileImage} alt="User profile picture"/>
                </div>
                <div id={"profile-menu"}>
                        <Btn text={"info"} route={"info"} />
                        <Btn text={"songs"} route={"songs"} />
                    {auth.isAuth && auth.roles.includes("ROLE_ARTIST") && <Btn text={"stats"} route={"stats"} />}
                </div>
            </div>
            <div id={"profile-body"}>
                <Outlet />
            </div>
        </div>
    );
}

export default Profile;