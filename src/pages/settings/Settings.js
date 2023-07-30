import React, {useContext, useEffect, useState} from 'react';
import {AuthenticationContext} from "../../context/AuthenticationContextProvider";
import "./Settings.css";
import {useParams} from "react-router-dom";
import Forbidden from "../../components/forbidden/Forbidden";
import {useForm} from "react-hook-form";
import validateEmail from "../../helperFuncties/validateEmail";
import axios from "axios";
import loading from "../../assets/Loading_icon.gif";

function Settings() {

    const [changeEmail, toggleChangeEmail] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [processing, setProcessing] = useState(false);

    const {register: registerEmail, handleSubmit: handleEmailSubmit} = useForm();

    const {register: registerPassword, handleSubmit: handlePasswordSubmit} = useForm();

    const {auth, profile} = useContext(AuthenticationContext);

    const {username} = useParams();

    const client = axios.create({baseURL: "http://localhost:8080/users/"});

    useEffect(() => {

    }, [changeEmail, emailError]);

    function onEmailSubmit(data) {
        
        let isValid = validateEmail(data.email);
        
        setEmailError(isValid);
        
        if(isValid) {

            const formData = {
                username: "",
                email: data.email,
                password: ""
            }

            updateEmail(formData);
            toggleChangeEmail(false);

        }

    }

    async function updateEmail(data) {
                
        try {

            setProcessing(true);
            
            await client.put(`update/${auth.user.username}`, data);
            
            setProcessing(false);

            auth.user.email = data.email;

        } catch (e) {
            
            console.log(e);
            
        }

    }

    return (
        <div id={"settings-container"}>
            {auth.user.username === username ?
            <>
                <div id={"settings-header"}>
                    <h2>Settings</h2>
                </div>
                <form id={"settings-body"}>
                    <fieldset>
                        <legend>User info</legend>
                        <div className={"settings-item"}>
                            <label htmlFor="username">Username:</label>
                            <label htmlFor="username">{auth?.user?.username}</label>
                        </div>
                        <div className={"settings-item"}>
                            <label htmlFor="first-name">First name:</label>
                            <label htmlFor="first-name">{profile?.firstName}</label>
                        </div>
                        <div className={"settings-item"}>
                            <label htmlFor="last-name">Last name:</label>
                            <label htmlFor="last-name">{profile?.lastName}</label>
                        </div>
                    </fieldset>
                </form>
                <form id={"email-form"} onSubmit={handleEmailSubmit(onEmailSubmit)}>
                    <fieldset>
                        <legend>Email</legend>
                        <div className={"settings-item"}>
                            <label htmlFor="email">Email:</label><br />
                            {changeEmail ?
                            <>
                            <input
                                type="email"
                                name={"email"}
                                placeholder={auth?.user?.email}
                                {...registerEmail("email")}
                            />
                            {!emailError && "email is not valid"}
                            </>
                                 : <>{!processing ? <label htmlFor="email">{auth?.user?.email}</label> : <img src={loading} alt='' />}</>}
                        </div>
                        <div className={"edit-email-btn"}>
                            <input type={"button"} className={"btn"} value={changeEmail ? "cancel" : "change"} onClick={() => {toggleChangeEmail(!changeEmail)}}/>
                            {changeEmail && <input type={"submit"} className={"btn"} value={"submit"}/>}
                        </div>
                    </fieldset>
                </form>
                <form onSubmit={handlePasswordSubmit}>
                    <fieldset>
                        <legend>Reset password</legend>
                        <div className={"settings-item"}>
                            <label htmlFor={"old-password"}>Password:</label>
                            <input
                                type={"password"}
                                name={"oldPassword"}
                                id={"old-password"}
                                {...registerPassword}
                            />
                        </div>
                        <div className={"settings-item"}>
                            <label htmlFor={"new-password"}>New password:</label>
                            <input
                                type={"password"}
                                name={"newPassword"}
                                id={"new-password"}
                                {...registerEmail}
                            />
                        </div>
                        <div className={"settings-item"}>
                            <label htmlFor={"check-password"}>Check password</label>
                            <input
                                type={"password"}
                                name={"passwordCheck"}
                                id={"check-password"}
                                {...registerPassword}
                            />
                        </div>
                        <input type={"button"} className={"btn"} value={"check & submit"}/>
                    </fieldset>
                </form>
            </> : <Forbidden />}
        </div>
    );
}

export default Settings;