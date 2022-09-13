import React, {createContext, useState} from 'react';

export const PopUpContext = createContext(null);

function PopupProvider({children}) {
    const [popUpUploadVisible, togglePopUpUploadVisible] = useState(false);
    const [popUpLogInVisible, togglePopUpLogInVisible] =useState(false);
    const [landingLogin, toggleLandingLogin] = useState(true);

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

    function handlePopUpLanding(newValue) {
        if (landingLogin === true && newValue === false) {
            toggleLandingLogin(false);
        } else if (landingLogin === false && newValue === true) {
            toggleLandingLogin(true);
        }
    }
    const data = {popUpUploadVisible,
        toggleUploadPopUp,
        popUpLogInVisible,
        toggleLogInPopUp,
        landingLogin,
        handlePopUpLanding};

    return (
        <PopUpContext.Provider value={data}>
            {children}
        </PopUpContext.Provider>
    );
}

export default PopupProvider;