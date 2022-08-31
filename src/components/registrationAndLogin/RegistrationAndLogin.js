import React, {useContext, useState} from 'react';
import "./RegistrationAndLogin.css";
import LogIn from "./login/LogIn";
import Registration from "./registration/Registration";
import {PopUpContext} from "../../context/PopupProvider";

function RegistrationAndLogin() {
    const {toggleLogInPopUp} = useContext(PopUpContext)
    const [isLogIn, toggleLogIn] = useState(true);

    function handleFormToggle(newValue) {
        if(isLogIn && newValue === false) {
            toggleLogIn(false);
        } else if(!isLogIn && newValue === true) {
            toggleLogIn(true);
        }
    }

    return (
        <div id={"registration-login-popup-backdrop"}>
            <div id="registration-login-popup">
                <input
                    type={"button"}
                    onClick={() => toggleLogInPopUp(false)}
                    value={"✖"}
                    id={"popup-close-btn"}
                />
                <div id="registration-login-header">
                    <input
                        type={"button"}
                        id={isLogIn ? "registration-title" : "registration-title-underline"}
                        onClick={() => handleFormToggle(false)}
                        value={"Register"}
                    />
                    <input
                        type={"button"}
                        id={isLogIn ? "login-title-underline" : "login-title"}
                        onClick={() => handleFormToggle(true)}
                        value={"Log in"}
                    />
                </div>
                <hr />
                <div id="form-container">
                    {isLogIn ? <LogIn /> : <Registration />}
                </div>
            </div>
        </div>
    );
}

export default RegistrationAndLogin;