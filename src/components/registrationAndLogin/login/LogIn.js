import React, {useState} from 'react';
import "./LogIn.css";
import {useForm} from "react-hook-form";
import axios from "axios";

function LogIn() {
    const [noMatch, toggleNoMatch] = useState(false);

    const errorMessage = "Wrong username or password!";

    const {register, handleSubmit} = useForm();

    async function onFormSubmit(data) {
        try {
            const result = await axios.post("http://localhost:8080/auth", data);
            console.log(result);
        } catch (e) {

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
                {noMatch ? <label className={"error-message"}>{errorMessage}</label> : ""}
                <input type={"submit"} id={"log-in-btn"} value={"log in"}/>
            </form>
        </>
    );
}

export default LogIn;