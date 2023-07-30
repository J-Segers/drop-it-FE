import React, {useContext, useEffect, useState} from 'react';
import "./UserMenu.css";
import defaultProfile from "../../../../assets/Portrait_Placeholder.png";
import {NavLink} from "react-router-dom";
import {PopUpContext} from "../../../../context/PopupProvider";
import {AuthenticationContext} from "../../../../context/AuthenticationContextProvider";

function UserMenu() {

    const [menuOpen, setMenuOpen] = useState(false);

    const {auth, profile, logout} = useContext(AuthenticationContext);
    const {toggleLogInPopUp, handlePopUpLanding} = useContext(PopUpContext);

    function logInOut() {
        if(!auth.isAuth){
            handlePopUpLanding(true);
            toggleLogInPopUp(true);
        } else {
            logout();
        }
    }

    useEffect(() => {
        console.log(profile);
    }, [profile]);

    
    return (
        <div id={"user-menu-container"} onClick={() => {setMenuOpen(!menuOpen)}}>
            <img src={auth.isAuth && profile?.profileImg ? `${profile?.profileImg?.url}` : defaultProfile} alt={""}/>
            <div  className={menuOpen ? "user-menu-open" : "user-menu-closed"} />
            <div id={`menu-${menuOpen ? "open" : "closed"}-container`}>
                {auth.isAuth && <>
                        <NavLink to={`profile/${auth.user.username}/info`}>
                            <div className={"btn"}>profile</div>
                        </NavLink>
                        <NavLink to={`profile/${auth.user.username}/settings`}>
                            <div className={"btn"}>settings</div>
                        </NavLink>
                    </>
                }

                <div className={"btn"} onClick={() => logInOut() }>
                    {auth.isAuth ? <div className={"btn"}>logout</div> : <div className={"btn"}>login</div>}
                </div>
            </div>
        </div>
    );
}

export default UserMenu;