import React, {useContext, useEffect, useRef, useState} from 'react';
import "./UserMenu.css";
import defaultProfile from "../../../../assets/profile-default.png";
import userProfileImg from "../../../../assets/JackBlack.jpg";
import {NavLink} from "react-router-dom";
import {PopUpContext} from "../../../../context/PopupProvider";
import {AuthenticationContext} from "../../../../context/AuthenticationContextProvider";

function UserMenu() {
    const {toggleLogInPopUp, handlePopUpLanding} = useContext(PopUpContext);

    const [menuState, setMenuState] = useState(false);
    const {auth, logout} = useContext(AuthenticationContext);
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
            {auth.isAuth ? <img src={userProfileImg} alt={""} /> : <img src={defaultProfile} alt={""}/> }
            <div  className={menuState ? "user-menu-open" : "user-menu-closed"} />
            <div id={`menu-${menuState ? "open" : "closed"}-container`}>
                {auth.isAuth && <div className={"btn"}>
                    <NavLink to={`profile/info/${auth.user.username}`}>profile</NavLink>
                </div>}
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