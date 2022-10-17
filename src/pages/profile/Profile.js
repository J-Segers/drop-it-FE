import React, {useContext, useEffect, useState} from 'react';
import "./Profile.css";
import {MusicPlayerContext} from "../../context/MusicPlayerProvider";
import {Outlet, useParams} from "react-router-dom";
import defaultProfileImg from "../../assets/Portrait_Placeholder.png";
import Btn from "../../components/globalComponents/btn/Btn";
import {AuthenticationContext} from "../../context/AuthenticationContextProvider";
import axios from "axios";

function Profile() {
    const {toggleIsLargePlayer} = useContext(MusicPlayerContext);
    const {auth, user, profile} = useContext(AuthenticationContext);
    const [profileInfo, setProfileInfo] = useState({});
    const {username} = useParams();

    useEffect(() => {
        toggleIsLargePlayer(false);
    },[])

    useEffect(() => {
        async function getProfile() {
            try {
                const response = await axios.get(`http://localhost:8080/profile/${username}`);
                setProfileInfo(response.data);
                console.log(response.data)
            } catch (e) {

            }
        }

        getProfile();

    }, [username]);

    return (
        <div id={"profile-container"}>
            <div id={"profile-header"}>
                <div id={"profile-image"}>
                    <img src={profileInfo && profileInfo.profileImg ? `${profileInfo.profileImg.url}`: defaultProfileImg} alt="User profile picture"/>
                </div>
                <div>{username}</div>
                <div id={"profile-menu"}>
                    <Btn text={"info"} route={`info`} />
                    <Btn text={"songs"} route={"songs"} />
                    {auth.isAuth && user.username === username && user.roles.includes("ROLE_ARTIST") && <Btn text={"stats"} route={"stats"} />}
                </div>
            </div>
            <div id={"profile-body"}>
                <Outlet context={[profileInfo, setProfileInfo]}/>
            </div>
        </div>
    );
}

export default Profile;