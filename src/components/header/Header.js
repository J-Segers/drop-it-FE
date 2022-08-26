import React from 'react';
import "./Header.css";
import NavBar from "./menus/navBar/NavBar";
import UserMenu from "./menus/userMenu/UserMenu";

function Header() {
    return (
        <div id={"page-header"}>
            <h1 id={"header-title"}>
                DropIt
            </h1>
            <NavBar />
            <UserMenu />
        </div>
    );
}

export default Header;