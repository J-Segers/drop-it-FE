import React, {createContext, useEffect, useState} from 'react';

export const UserContext = createContext(null);

function UserContextProvider({children}) {

    const [user, setUser] = useState({initial: "value"});
    const [userProfile, setUserProfile] = useState({initial: "value"});
    const [artist, setArtist] = useState({initial: "value"})
    const [isLoggedIn, toggleIsLoggedIn] = useState(false);

    function fillUser(profileObj) {
        setUser(profileObj);
    }

    function fillUserProfile(profileObj) {
        setUserProfile(profileObj);
    }

    const data = {
        user,
        isLoggedIn,
        toggleIsLoggedIn,
        userProfile,
        fillUser,
        fillUserProfile

    }

    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;