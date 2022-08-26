import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MusicPlayer from "./components/musicPlayer/MusicPlayer";
import Body from "./components/body/Body";

function App() {
  return (
      <div id="app">
          <Header />
          <MusicPlayer />
          <Body />
          <Footer />
    </div>
  );
}

export default App;
