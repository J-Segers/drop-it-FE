import React, {createContext, useEffect, useRef, useState} from 'react';
import axios from "axios";

export const MusicPlayerContext = createContext(null);

function MusicPlayerProvider({children}) {
    const [isLargePlayer, toggleIsLargePlayer] = useState(true);
    const [playList, setPlaylist] = useState([]);
    const [currentSong, setCurrentSong] = useState({});
    const [isPlaying, toggleIsPlaying] = useState(false);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);

    const audioElement = useRef();

    useEffect(() => {
        fetchPlaylist();
    }, []);

    useEffect(() => {
        setCurrentSong(playList[currentSongIndex]);
    }, [currentSongIndex])

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

    function nextSong() {
        if(currentSongIndex < playList.length - 1) {
            setCurrentSongIndex(currentSongIndex + 1);
        }
    }

    function previousSong() {
        console.log("double click")

        if (currentSongIndex != 0) {
            console.log(currentSongIndex)
            setCurrentSongIndex(currentSongIndex - 1);
        }

    }


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
        audioElement,
        previousSong,
        nextSong
    }

    return (
        <MusicPlayerContext.Provider value={data}>
            {children}
        </MusicPlayerContext.Provider>
    );
}

export default MusicPlayerProvider;