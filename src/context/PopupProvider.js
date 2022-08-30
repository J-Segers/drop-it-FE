import React, {createContext, useState} from 'react';

export const PopUpContext = createContext(null);

function PopupProvider({children}) {
    const [popUpVisible, togglePopUpVisible] = useState(false);

    function togglePopUp(newValue) {
        if (popUpVisible === true && newValue === false) {
            togglePopUpVisible(false);
        } else if (popUpVisible === false && newValue === true) {
            togglePopUpVisible(true);
        }
    }

    return (
        <PopUpContext.Provider value={{popUpVisible, togglePopUp}}>
            {children}
        </PopUpContext.Provider>
    );
}

export default PopupProvider;