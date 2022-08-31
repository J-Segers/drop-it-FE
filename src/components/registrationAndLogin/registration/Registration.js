import React, {useEffect, useState} from 'react';
import "./Registration.css";
import {useForm} from "react-hook-form";
import checkEmailValidity from "../../../helperFuncties/validateEmail";
import getPasswordErrors from "../../../helperFuncties/validatePassword";
import axios from "axios";

function Registration() {
    const [email, setEmail] = useState("");
    const [isValidEmail, toggleIsValidEmail] = useState(false);
    const [password, setPassword] = useState("");
    const [checkDuplicatePassword, setCheckDuplicatePassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [passed, togglePassed] = useState(false);
    const [isEqual, toggleIsEqual] = useState(false);
    const {register, handleSubmit} = useForm();

    useEffect(() => {
        toggleIsValidEmail(checkEmailValidity(email));
    }, [email]);

    useEffect(() => {
        const result = getPasswordErrors(password);

        if(result === "") {
            setErrorMessage(result)
            togglePassed(true);
        } else {
            setErrorMessage(result);
            togglePassed(false);
        }
        console.log(password);
    }, [password]);

    useEffect(() => {
        if(password === checkDuplicatePassword && passed) {
            toggleIsEqual(true);
        } else {
            toggleIsEqual(false);
        }
        console.log(checkDuplicatePassword);
    }, [password, checkDuplicatePassword, passed]);

    function onFormSubmitRegistration(data) {
        console.log(data);
    }

    return (
        <>
            <form onSubmit={handleSubmit(onFormSubmitRegistration)} id="registration">
                <div className="new-user-info-username">
                    <label htmlFor={"new-user-username"}>Username</label>
                    <input type="text" id={"new-user-username"} {...register("username",{required: true})} />
                </div>
                <div className="new-user-info-email">
                    <label htmlFor={"new-user-email"}>Email</label>
                    <input type="text" id={"new-user-email"} onInput={(e) => setEmail(e.target.value)} {...register("email",{required: true})} />
                    {!isValidEmail ? <label className={"error-message"}>{email !== "" ? "email not valid" : ""}</label> : ""}
                </div>
                <div className="new-user-info-password">
                    <div className="new-user-info-password-item">
                        <label>Password</label>
                        <input
                            type="password"
                            className={"new-user-password"}
                            onInput={(e) => setPassword(e.target.value)}
                            {...register("password",{required: true})}
                        />
                        {passed ? "" : <label className={"error-message"}>{errorMessage}</label>}

                    </div>
                    <div className="new-user-info-password-item">
                        <label>Confirm password</label>
                        <input
                            type="password"
                            className={"new-user-password"}
                            onChange={(e) => setCheckDuplicatePassword(e.target.value)}
                        />
                        {isEqual ? "" : <label className={"error-message"}>{checkDuplicatePassword === "" ? "" : "passwords don't match!"}</label>}
                    </div>
                </div>
                <input type={"submit"} id={"registration-btn"} value={"register"} disabled={!isEqual} />
            </form>
        </>
    );
}

export default Registration;