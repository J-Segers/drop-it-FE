import React from 'react';
import "./NavBar.css";
import NavBtn from "./navbtn/NavBtn";

function NavBar() {
    return (
        <div id={"nav-bar-container"}>
            <NavBtn type={"home"} />
            <NavBtn type={"competition"} />
            <NavBtn type={"search"} />
        </div>
    );
}

export default NavBar;