import React, {useContext, useEffect, useState} from 'react';
import "./Registration.css";
import {useForm} from "react-hook-form";
import checkEmailValidity from "../../../helperFuncties/validateEmail";
import getPasswordErrors from "../../../helperFuncties/validatePassword";
import axios from "axios";

function Registration() {
    //validation
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [isValidEmail, toggleIsValidEmail] = useState(false);
    const [password, setPassword] = useState("");
    const [checkPassword, setCheckPassword] = useState("");
    const [isEqual, toggleIsEqual] = useState(false);
    const [passed, togglePassed] = useState(false);
    const [validationCheck, toggleValidationCheck] = useState(false);

    //errors
    const [emailError, setEmailError] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const {register, handleSubmit} = useForm();

    useEffect(() => {
        if(password !== "" && isValidEmail && isEqual && passed) {
            toggleValidationCheck(true)
        } else {
            toggleValidationCheck(false);
        }
    },[isValidEmail, isEqual, passed, password]);

    useEffect(() => {
        let result = checkEmailValidity(email)
        console.log(result);
        if(result) {
            setEmailError("");
            toggleIsValidEmail(true);
         } else if(!result){
            toggleIsValidEmail(false);
            setEmailError("Not a valid email address")
        }
    }, [email, isValidEmail]);

    function handleEmailUpdate(response) {
        setEmail(response.value);
    }

    useEffect(() => {
        const result = getPasswordErrors(password);

        if(result === "") {
            setPasswordError(result)
            togglePassed(true);
        } else {
            setPasswordError(result);
            togglePassed(false);
        }
    }, [password]);

    function handlePasswordUpdate(response) {
        setPassword(response.value);
    }

    useEffect(() => {
        if(password === checkPassword && passed) {
            toggleIsEqual(true);
        } else {
            toggleIsEqual(false);
        }
    }, [password, checkPassword, passed]);

    async function onFormSubmitRegistration(data) {
        const BAD_REQUEST = 400;
        try {
            const result = await axios.post(`http://localhost:8080/v1/users`, data).catch(err => {
                console.log(err);
                    if(err.status === BAD_REQUEST){
                        throw new Error(`${err.response}`);
                    }
                    throw err;
                });
            console.log(result);
            // toggleLogInPopUp(false);
        } catch (e) {
            // if(e.response.data.toLowerCase().includes("email")) {
            //     setEmailError(e.response.data);
            // } else if(e.response.data.toLowerCase().includes("username")) {
            //     setUsernameError(e.response.data);
            // }
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(onFormSubmitRegistration)} id="registration">
                <div className="new-user-info-username">
                    <label htmlFor={"new-user-username"}>Username</label>
                    <input type="text" id={"new-user-username"} {...register("username",{required: true})} />
                    <label className={"error-message"}>{username !== "" ? emailError : ""}</label>
                </div>
                <div className="new-user-info-email">
                    <label htmlFor={"new-user-email"}>Email</label>
                    <input type="text" id={"new-user-email"} onInput={(e) => handleEmailUpdate(e.target)} {...register("email",{required: true})} />
                    <label className={"error-message"}>{email !== "" ? emailError : ""}</label>
                </div>
                <div className="new-user-info-password">
                    <div className="new-user-info-password-item">
                        <label>Password</label>
                        <input
                            type="password"
                            className={"new-user-password"}
                            onInput={(e) => handlePasswordUpdate(e.target)}
                            {...register("password",{required: true})}
                        />
                        <label className={"error-message"}>{passed ? "" : passwordError}</label>

                    </div>
                    <div className="new-user-info-password-item">
                        <label>Confirm password</label>
                        <input
                            type="password"
                            className={"new-user-password"}
                            onChange={(e) => setCheckPassword(e.target.value)}
                        />
                        {isEqual ? "" : <label className={"error-message"}>{checkPassword === "" ? "" : "passwords don't match!"}</label>}
                    </div>
                </div>
                <input type={"submit"} id={"registration-btn"} value={"register"} disabled={!validationCheck} />
            </form>
        </>
    );
}

export default Registration;