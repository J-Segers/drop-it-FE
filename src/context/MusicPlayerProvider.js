import React, {createContext, useState} from 'react';
export const MusicPlayerContext = createContext(null);

function MusicPlayerProvider({children}) {
    const [isLargePlayer, toggleIsLargePlayer] = useState(true);

    function togglePlayer(newValue) {
        if(isLargePlayer === true && newValue === false) {
            toggleIsLargePlayer(false);
        } else if(isLargePlayer === false && newValue === true) {
            toggleIsLargePlayer(true);
        }
    }

    return (
        <MusicPlayerContext.Provider value={{isLargePlayer, togglePlayer}}>
            {children}
        </MusicPlayerContext.Provider>
    );
}

export default MusicPlayerProvider;