import React, {createContext, useEffect, useRef, useState} from 'react';
import axios from "axios";

export const MusicPlayerContext = createContext(null);

function MusicPlayerProvider({children}) {
    const [isLargePlayer, toggleIsLargePlayer] = useState(true);
    const [playList, setPlaylist] = useState([]);
    const [currentSong, setCurrentSong] = useState({});
    const [isPlaying, toggleIsPlaying] = useState(false);
    const [songIndex, setSongIndex] = useState(0);

    const audioElement = useRef();

    useEffect(() => {
        fetchPlaylist();
    }, []);

    useEffect(() => {
        console.log(currentSong)
    }, [currentSong])

    useEffect(() => {
        if(isPlaying) {
            audioElement.current.play();
        } else {
            audioElement.current.pause();
        }
    },[isPlaying])


    async function fetchPlaylist() {
        try {
            const response = await axios.get("http://localhost:8080/allsongs");
            console.log("response", response.data)
            console.log("response", response.data[0])

            setPlaylist(response.data);
            setCurrentSong(response.data[0]);
        } catch (e) {

        }
    }

    const data = {
        isLargePlayer,
        toggleIsLargePlayer,
        playList,
        // updatePlayList,
        currentSong,
        setCurrentSong,
        isPlaying,
        toggleIsPlaying,
        audioElement
    }

    return (
        <MusicPlayerContext.Provider value={data}>
            {children}
        </MusicPlayerContext.Provider>
    );
}

export default MusicPlayerProvider;