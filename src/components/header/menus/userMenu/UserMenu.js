import React, {useEffect, useRef, useState} from 'react';
import "./UserMenu.css";
import defaultProfile from "../../../../assets/profile-default.png";
import userProfileImg from "../../../../assets/JackBlack.jpg";
import Btn from "../../../global components/btn/Btn";
import {NavLink} from "react-router-dom";

function UserMenu() {

    const [menuState, setMenuState] = useState(false);
    const [loggedIn, toggleLoggedIn] = useState(true); //will be changed to context
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
            {loggedIn ? <img src={userProfileImg} alt={""} /> : <img src={defaultProfile} alt={""}/> }
            <div  className={menuState ? "user-menu-open" : "user-menu-closed"} />
            <div id={`menu-${menuState ? "open" : "closed"}-container`}>
                <NavLink to={"/profile/info"} className={"inActiveClass"} activeClassName={"activeClass"}>
                    <Btn text={"profile"} />
                </NavLink>
                {/*button will eventually toggle between login and log out*/}
                <Btn text={"log in"} />
            </div>
        </div>
    );
}

export default UserMenu;