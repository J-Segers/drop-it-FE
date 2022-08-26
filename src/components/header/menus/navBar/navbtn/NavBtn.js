import React from 'react';
import './NavBtn.css';
import homeIcon from "../../../../../assets/icons/home-icon.png";
import competitionsIcon from "../../../../../assets/icons/competitions-icon.png";
import searchIcon from "../../../../../assets/icons/search-icon.png";

function NavBtn({type}) {
    let icon;
    switch (type) {
        case "home":
            icon = homeIcon;
            break;
        case "competition":
            icon = competitionsIcon;
            break;
        case "search":
            icon = searchIcon;
            break;
        default:
            break;
    }
    return (
        <div className={"nav-btn"}>
            <img src={icon} alt={`navigation link to ${type}`} className={"icon"} />
        </div>
    );
}

export default NavBtn;