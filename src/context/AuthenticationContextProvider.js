import React, {createContext, useState} from 'react';

export const AuthenticationContext = createContext(null);

function AuthenticationContextProvider({children}) {

    const [token, setToken] = useState(null);
    const [hasToken, toggleHasToken] = useState(false);
    const [user, setUser] = useState(null);


    return (
        <AuthenticationContext.Provider value={{hasToken, toggleHasToken, token, setToken, user, setUser}}>
            {children}
        </AuthenticationContext.Provider>
    );
}

export default AuthenticationContextProvider;