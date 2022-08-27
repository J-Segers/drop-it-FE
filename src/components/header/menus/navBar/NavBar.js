import React from 'react';
import "./NavBar.css";
import NavBtn from "./navbtn/NavBtn";
import {NavLink} from "react-router-dom";

function NavBar() {
    return (
        <div id={"nav-bar-container"}>
            <NavLink to={"/"} className={"inActiveClass"} activeClassName={"activeClass"}>
                <NavBtn type={"home"} />
            </NavLink>
            <NavLink to={"/"} className={"inActiveClass"} activeClassName={"activeClass"}>
                <NavBtn type={"competition"} />
            </NavLink>
            <NavLink to={"/"} className={"inActiveClass"} activeClassName={"activeClass"}>
                <NavBtn type={"search"} />
            </NavLink>
        </div>
    );
}

export default NavBar;