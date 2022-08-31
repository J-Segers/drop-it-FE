import React, {useState} from 'react';
import "./LogIn.css";
import {useForm} from "react-hook-form";

function LogIn() {
    const [noMatch, toggleNoMatch] = useState(true);
    const errorMessage = "Wrong email or password!";

    const {register, handleSubmit} = useForm();

    const onFormSubmit = (data) => {
        toggleNoMatch(!noMatch);
        console.log(data)
    }



    return (
        <>
            <form id="log-in" onSubmit={handleSubmit(onFormSubmit)}>
                <div className="log-in-info-email">
                    <label htmlFor={"login-email"}>email</label>
                    <input type="text" id={"login-email"} {...register("email", {required: true})} />
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