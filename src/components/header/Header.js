import React from 'react';
import "./Header.css";
import NavBar from "./menus/navBar/NavBar";
import UserMenu from "./menus/userMenu/UserMenu";
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <div id={"page-header"}>
            <NavLink to={"/"} className={"inActiveClass"} activeClassName={"activeClass"}>
                <h1 id={"header-title"}>
                    DropIt
                </h1>
            </NavLink>
            <NavBar />
            <UserMenu />
        </div>
    );
}

export default Header;