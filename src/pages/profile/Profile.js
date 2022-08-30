import React, {useContext, useEffect} from 'react';
import "./Profile.css";
import {MusicPlayerContext} from "../../context/MusicPlayerProvider";
import {NavLink, Outlet} from "react-router-dom";
import profileImage from "../../assets/JackBlack.jpg";
import Btn from "../../components/globalComponents/btn/Btn";
import PopupProvider from "../../context/PopupProvider";

function Profile() {
    const {togglePlayer} = useContext(MusicPlayerContext);
    useEffect(() => {
        togglePlayer(false);
    })

    return (
        <PopupProvider>
            <div id={"profile-container"}>
                <div id={"profile-header"}>
                    <div id={"profile-image"}>
                        <img src={profileImage} alt="User profile picture"/>
                    </div>
                    <div id={"profile-menu"}>
                        <NavLink to={"info"} className={"inActiveClass"} activeClassName={"activeClass"}>
                            <Btn text={"info"}/>
                        </NavLink>
                        <NavLink to={"songs"} className={"inActiveClass"} activeClassName={"activeClass"}>
                            <Btn text={"songs"} />
                        </NavLink>
                        <NavLink to={"stats"} className={"inActiveClass"} activeClassName={"activeClass"}>
                            <Btn text={"stats"} />
                        </NavLink>
                    </div>
                </div>
                <div id={"profile-body"}>
                    <Outlet />
                </div>
            </div>
        </PopupProvider>
    );
}

export default Profile;