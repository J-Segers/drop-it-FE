import React from 'react';
import forbidden from "../../assets/forbidden.jpg";
import "./Forbidden.css";

function Forbidden() {
    return (
        <div id={"forbidden-container"}>
            <div>
                <img id={"forbidden-img"} src={forbidden} alt="lock"/>
            </div>
            <p>You do not have access to this page!</p>
        </div>
    );
}

export default Forbidden;