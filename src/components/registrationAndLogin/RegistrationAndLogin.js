import React, {useContext, useState} from 'react';
import "./RegistrationAndLogin.css";
import LogIn from "./login/LogIn";
import Registration from "./registration/Registration";
import {PopUpContext} from "../../context/PopupProvider";

function RegistrationAndLogin() {
    const {toggleLogInPopUp, landingLogin, handlePopUpLanding} = useContext(PopUpContext);

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
                        id={landingLogin ? "registration-title" : "registration-title-underline"}
                        onClick={() => handlePopUpLanding(false)}
                        value={"Register"}
                    />
                    <input
                        type={"button"}
                        id={landingLogin ? "login-title-underline" : "login-title"}
                        onClick={() => handlePopUpLanding(true)}
                        value={"Log in"}
                    />
                </div>
                <hr />
                <div id="form-container">
                    {landingLogin ? <LogIn /> : <Registration />}
                </div>
            </div>
        </div>
    );
}

export default RegistrationAndLogin;