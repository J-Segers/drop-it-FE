import React, {createContext, useEffect, useState} from 'react';
import jwtDecode from "jwt-decode";
import axios from "axios";

export const AuthenticationContext = createContext(null);

function AuthenticationContextProvider({children}) {

    const client = axios.create({
        baseURL: "http://localhost:8080/"
    });

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
        } else {
            setAuth({
                isAuth: false,
                user: {
                    profile: null,
                }
            });
        }
        console.log("test");
    }, []);

    function localUpdateProfileImg(profile) {
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

        client.get(`profile/${decodedToken.sub}`).then((response) => {
            setAuth({
                isAuth: true,
                user: {
                    username: decodedToken.sub,
                    email: decodedToken.iss,
                    roles: [...decodedToken.Authorities],
                    profile: {...response.data},
                }
            });
        })
    }

    async function login(data) {
        console.log(`De gebruiker is ingelogd!`);
        console.log(data);
        getProfileData(data);
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