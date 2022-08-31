import React, {createContext, useState} from 'react';

export const PopUpContext = createContext(null);

function PopupProvider({children}) {
    const [popUpUploadVisible, togglePopUpUploadVisible] = useState(false);
    const [popUpLogInVisible, togglePopUpLogInVisible] =useState(false);

    function toggleUploadPopUp(newValue) {
        if (popUpUploadVisible === true && newValue === false) {
            togglePopUpUploadVisible(false);
        } else if (popUpUploadVisible === false && newValue === true) {
            togglePopUpUploadVisible(true);
        }
    }

    function toggleLogInPopUp(newValue) {
        if (popUpLogInVisible === true && newValue === false) {
            togglePopUpLogInVisible(false);
        } else if (popUpLogInVisible === false && newValue === true) {
            togglePopUpLogInVisible(true);
        }
    }

    return (
        <PopUpContext.Provider value={{popUpUploadVisible, toggleUploadPopUp, popUpLogInVisible, toggleLogInPopUp}}>
            {children}
        </PopUpContext.Provider>
    );
}

export default PopupProvider;