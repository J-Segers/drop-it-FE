import React, {useContext, useEffect, useState} from 'react';
import "./LogIn.css";
import {useForm} from "react-hook-form";
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import {AuthenticationContext} from "../../../context/AuthenticationContextProvider";
import {PopUpContext} from "../../../context/PopupProvider";

function LogIn() {

    const [errorMessage, setErrorMessage] = useState("");

    const {login} = useContext(AuthenticationContext);
    const {toggleLogInPopUp} = useContext(PopUpContext);

    const {register, handleSubmit} = useForm() ;
    const history = useNavigate();
    const location = useLocation();

    async function onLoginRequest(data) {
        console.log(data)
        try {
            const response = await axios.post("http://localhost:8080/auth", data)
                .catch(e => e);

            localStorage.setItem("token", response.data);

            login(response.data);

            history(location);

            if(errorMessage !== "") {
                setErrorMessage("");
            }
            toggleLogInPopUp(false);
        } catch (e) {
            if(e.response.status === 403){
                setErrorMessage("Wrong username or password!");
            }
        }

    }

    return (
        <>
            <form id="log-in" onSubmit={handleSubmit(onLoginRequest)}>
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