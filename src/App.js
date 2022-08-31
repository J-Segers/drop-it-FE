import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MusicPlayer from "./components/musicPlayer/MusicPlayer";
import Body from "./components/body/Body";
import RegistrationAndLogin from "./components/registrationAndLogin/RegistrationAndLogin";
import {useContext} from "react";
import {PopUpContext} from "./context/PopupProvider";

function App() {
    const {popUpLogInVisible} = useContext(PopUpContext);

  return (
      <div id="app">
          {popUpLogInVisible ? <RegistrationAndLogin /> : null}
          <Header />
          <MusicPlayer />
          <Body />
          <Footer />
    </div>
  );
}

export default App;
