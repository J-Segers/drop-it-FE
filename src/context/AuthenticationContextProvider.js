import React, {createContext, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import jwtDecode from "jwt-decode";
import axios from "axios";

export const AuthenticationContext = createContext(null);

function AuthenticationContextProvider({children}) {

    const [auth, setAuth] = useState({
        isAuth: false,
        username: "test",
        roles: [],
    });

    const [profile, setProfile] = useState({
        age: 0,
        dob:"1965-01-01",
        firstName: "test",
        lastName: "test2",
        location: "test",
        story: "test",
    });

    useEffect(() => {
        console.log(auth);
        console.log(profile);
    }, [auth,profile]);

    useEffect(() => {
        const token = localStorage.getItem("token");

        if(token) {
             getProfileData(token);
        } else {
            setAuth({
                isAuth: false,
                username: "",
                roles: [],
            });
        }

    }, []);

    async function getProfileData(token) {

        const decodedToken = jwtDecode(token);
        try {
            const response = await axios.get(`http://localhost:8080/profile/${decodedToken.sub}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,}
            })

            setAuth({
                isAuth: true,
                username: decodedToken.sub,
                roles: [...decodedToken.Authorities],
            });

            setProfile({
                ...profile,
                age: response.data.age,
                dob: response.data.dob,
                firstName: response.data.firstName,
                lastName: response.data.lastName,
                location: response.data.location,
                story: response.data.story,
            });

        } catch (e) {

        }
    }

    async function login(token) {
        console.log(`De gebruiker is ingelogd!`);

        getProfileData(token);
        // const decodedToken = jwtDecode(token);
        //
        // localStorage.setItem("token", token);
        //
        // try {
        //     const response = await axios.get(`http://localhost:8080/profile/${decodedToken.sub}`, {
        //         headers: {
        //             "Content-Type": "application/json",
        //             Authorization: `Bearer ${token}`,}
        //     })
        //     setAuth({
        //         isAuth: true,
        //         username: decodedToken.sub,
        //         roles: [...decodedToken.Authorities],
        //     });
        // } catch (e) {
        //
        // }
    }

    function logout() {
        console.log(`De gebruiker is uitgelogd!`);
        setAuth({
            isAuth: false,
            username: "",
            roles: [],
        });
        localStorage.removeItem("token");
    }

    const data = {
        auth,
        profile,
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