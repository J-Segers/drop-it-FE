import React, {createContext, useEffect, useState} from 'react';
import jwtDecode from "jwt-decode";
import axios from "axios";
import defaultImg from "../assets/profile-default.png";

export const AuthenticationContext = createContext(null);

function AuthenticationContextProvider({children}) {

    const [auth, setAuth] = useState({
        isAuth: false,
        user: {
            profile: null,
        }
    });

    useEffect(() => {
        console.log(auth);
    }, [auth]);

    useEffect(() => {
        const token = localStorage.getItem("token");

        if(token) {
             getProfileData(token);
             console.log(auth.profile);
        } else {
            setAuth({
                isAuth: false,
                user: {
                    profile: null,
                }
            });
        }

    }, []);

    function localUpdateProfileImg(profile) {
        console.log(profile)
        console.log(auth);
        setAuth({
            ...auth,
            user: {
                ...auth.user,
                profile,
                }
            }

        );
    }

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
                user: {
                    username: decodedToken.sub,
                    email: decodedToken.iss,
                    roles: [...decodedToken.Authorities],
                    profile: {...response.data},
                }
            });

        } catch (e) {

        }
    }

    async function login(token) {
        console.log(`De gebruiker is ingelogd!`);

        getProfileData(token);
    }

    function logout() {
        console.log(`De gebruiker is uitgelogd!`);
        setAuth({
            isAuth: false,
            user: {
                profile: null,
            }
        });
        localStorage.removeItem("token");
    }

    const data = {
        auth,
        user: auth.user,
        profile: auth.user.profile,
        login,
        logout,
        changeProfileImg: localUpdateProfileImg
    };

    return (
        <AuthenticationContext.Provider value={data}>
            {children}
        </AuthenticationContext.Provider>
    );
}

export default AuthenticationContextProvider;