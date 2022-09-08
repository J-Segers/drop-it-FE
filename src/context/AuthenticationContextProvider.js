import React, {createContext, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import jwtDecode from "jwt-decode";
import axios from "axios";

export const AuthenticationContext = createContext(null);

function AuthenticationContextProvider({children}) {

    const [auth, setAuth] = useState({
        isAuth: false,
        user: null,
    });
    const history = useNavigate();

    // useEffect(() => {
    //     if(localStorage.getItem("token")) {
    //
    //     } else {
    //
    //     }
    //
    // }, []);

    async function login(token) {
        console.log(`De gebruiker is ingelogd!`);
        const decodedJwt = jwtDecode(token);
        console.log(decodedJwt);

        localStorage.setItem("token", token);

        try {
            const response = await axios.get(`http://localhost:8080/users?username=${decodedJwt.sub}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,}
            })
            console.log(response)
            // setAuth({
            //     isAuth: true,
            //     user: response.data,
            // });

        } catch (e) {

         }

        console.log(auth);

        // history.push("/profile");
    }

    function logout() {
        console.log(`De gebruiker is uitgelogd!`);
        setAuth({
            isAuth: false,
            user: null,
        });
        history.push("/");
    }

    const data = {
        auth,
        login,
        logout,
    };

    return (
        <AuthenticationContext.Provider value={data}>
            {children}
        </AuthenticationContext.Provider>
    );
}

export default AuthenticationContextProvider;