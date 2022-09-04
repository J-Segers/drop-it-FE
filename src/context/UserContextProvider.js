import React, {createContext, useState} from 'react';

export const UserContext = createContext(null);

function UserContextProvider({children}) {

    const [user, setUser] = useState({initial: "value"});
    const [profile, setProfile] = useState({initial: "value"});
    const [isLoggedIn, toggleIsLoggedIn] = useState(false);

    function fillUser(profileObj) {
        setUser(profileObj);
    }

    function fillProfile(profileObj) {
        setProfile(profileObj);
    }

    return (
        <UserContext.Provider value={{user, isLoggedIn, toggleIsLoggedIn, profile, fillUser, fillProfile}}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;