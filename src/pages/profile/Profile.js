import React, {useContext, useEffect, useState} from 'react';
import "./Profile.css";
import {MusicPlayerContext} from "../../context/MusicPlayerProvider";
import {Outlet, useParams} from "react-router-dom";
import profileImage from "../../assets/profile-default.png";
import Btn from "../../components/globalComponents/btn/Btn";
import {AuthenticationContext} from "../../context/AuthenticationContextProvider";

function Profile() {
    const {togglePlayer} = useContext(MusicPlayerContext);
    const {auth, user, profile} = useContext(AuthenticationContext);
    const [photo, setPhoto] = useState(profileImage);

    useEffect(() => {
        togglePlayer(false);
    },[togglePlayer])

    useEffect(() => {
        if(profile) {
            setPhoto(profile.profileImg.url);
        }
    },[profile]);

    return (
        <div id={"profile-container"}>
            <div id={"profile-header"}>
                <div id={"profile-image"}>
                    <img src={`${photo}`} alt="User profile picture"/>
                </div>
                <div id={"profile-menu"}>
                        <Btn text={"info"} route={`info/${user.username}`} />
                        <Btn text={"songs"} route={"songs"} />
                    {auth.isAuth && user.roles.includes("ROLE_ARTIST") && <Btn text={"stats"} route={"stats"} />}
                </div>
            </div>
            <div id={"profile-body"}>
                <Outlet />
            </div>
        </div>
    );
}

export default Profile;