import React, {useContext, useEffect, useState} from 'react';
import "./LogIn.css";
import {useForm} from "react-hook-form";
import axios from "axios";
import {AuthenticationContext} from "../../../context/AuthenticationContextProvider";
import {UserContext} from "../../../context/UserContextProvider";

function LogIn() {

    const [errorMessage, setErrorMessage] = useState("");

    const {token, setToken} = useContext(AuthenticationContext);
    const {fillUser, fillProfile} = useContext(UserContext);

    const {register, handleSubmit} = useForm();

    useEffect(() => {
        console.log(token);
    }, [errorMessage, token]);

    async function onFormSubmit(data) {
        try {
            const tokenResult = await axios.post("http://localhost:8080/auth", data).catch(e => {
                throw e;
            });

            setToken(tokenResult.data);

            const userResult = onLoginAttemptSucces(data);

            if(errorMessage !== "") {
                setErrorMessage("");
            }
        } catch (e) {
            if(e.response.status === 403){
                setErrorMessage("Wrong username or password!");
            }
        }
    }

    async function onLoginAttemptSucces(data) {
        try {
            const userResult = await axios.get(`http://localhost:8080/v1/users/?username=${data.username}`, data);
            fillUser(userResult.data[0]);
            console.log(userResult.data[0]);
            const profileResult = await axios.get(`http://localhost:8080/v1/regular_users/${userResult.data[0].regularUserId}`);
            fillProfile(profileResult.data)


            console.log(profileResult.data);
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <form id="log-in" onSubmit={handleSubmit(onFormSubmit)}>
                <div className="log-in-info-username">
                    <label htmlFor={"login-username"}>username</label>
                    <input type="text" id={"login-username"} {...register("username", {required: true})} />
                </div>
                <div className="log-in-info-password">
                    <label>wachtwoord</label>
                    <input type={"password"} {...register("password", {required: true})} />
                </div>
                <label className={"error-message"}>{errorMessage === "" ? "" : errorMessage}</label>
                <input type={"submit"} id={"log-in-btn"} value={"log in"}/>
            </form>
        </>
    );
}

export default LogIn;