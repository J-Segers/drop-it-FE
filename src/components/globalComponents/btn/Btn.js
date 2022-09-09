import React from 'react';
import "./Btn.css";
import {NavLink} from "react-router-dom";

function Btn({text, route}) {
    return (
        <NavLink
            to={route}
            className={({ isActive }) => (isActive ? `btn-active` : "btn")}
        >
                {text}
        </NavLink>
    );
}

export default Btn;