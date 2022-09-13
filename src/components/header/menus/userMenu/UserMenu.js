import React, {useContext, useEffect, useRef, useState} from 'react';
import "./UserMenu.css";
import defaultProfile from "../../../../assets/Portrait_Placeholder.png";
import {NavLink} from "react-router-dom";
import {PopUpContext} from "../../../../context/PopupProvider";
import {AuthenticationContext} from "../../../../context/AuthenticationContextProvider";

function UserMenu() {
    const {toggleLogInPopUp, handlePopUpLanding} = useContext(PopUpContext);

    const [menuState, setMenuState] = useState(false);
    const {auth, profile, logout} = useContext(AuthenticationContext);
    const btnRef = useRef();

    useEffect(() => {
        const closeDropdown = e => {
            if(e.path[1] !== btnRef.current){
                setMenuState(false);
            }
        };
        document.body.addEventListener('click', closeDropdown);

        return () => document.body.removeEventListener('click', closeDropdown);
    }, [])


    return (
        <div ref={btnRef} id={"user-menu-container"} onClick={() => {setMenuState(menuState => !menuState)}}>
            <img src={profile && profile.profileImg ? `${profile.profileImg.url}` : defaultProfile} alt={""}/>
            <div  className={menuState ? "user-menu-open" : "user-menu-closed"} />
            <div id={`menu-${menuState ? "open" : "closed"}-container`}>
                {auth.isAuth &&
                    <NavLink to={`profile/${auth.user.username}/info`}><div className={"btn"}>profile</div></NavLink>
                }
                <div className={"btn"} onClick={() => {
                    if(!auth.isAuth){
                        handlePopUpLanding(true);
                        toggleLogInPopUp(true);
                    } else {
                        logout();
                    }
                }}>
                    {auth.isAuth ? <div className={"btn"}>logout</div> : <div className={"btn"}>login</div>}
                </div>
            </div>
        </div>
    );
}

export default UserMenu;