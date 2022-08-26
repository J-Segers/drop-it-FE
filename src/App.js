import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MusicPlayer from "./components/musicPlayer/MusicPlayer";

function App() {
  return (
      <div id="app">
          <Header />
          <MusicPlayer />
          <Footer />
    </div>
  );
}

export default App;
