import React, {createContext, useEffect, useState} from 'react';
import axios from "axios";

export const MusicPlayerContext = createContext(null);

function MusicPlayerProvider({children}) {
    const [isLargePlayer, toggleIsLargePlayer] = useState(true);
    const [playList, setPlaylist] = useState([]);
    const [currentSong, setCurrentSong] = useState("");
    const [isPlaying, toggleIsPlaying] = useState(false);
    const [songIndex, setSongIndex] = useState(0);

    useEffect(() => {
        fetchPlaylist();
    }, []);

    useEffect(() => {
        if(currentSong === "") {
            setCurrentSong(playList[0]);
        }
    }, [playList])



    async function fetchPlaylist(){
        try {
            const response = await axios.get("http://localhost:8080/allsongs");
            console.log(response.data)
            setPlaylist(response.data);
        } catch (e) {

        }
    }

    function togglePlayer(newValue) {
        if(isLargePlayer === true && newValue === false) {
            toggleIsLargePlayer(false);
        } else if(isLargePlayer === false && newValue === true) {
            toggleIsLargePlayer(true);
        }
    }

    // function updatePlayList(newList) {
    //     if(!newList.isEmpty && playList.isEmpty) {
    //         console.log(newList);
    //         setPlaylist(newList);
    //         setCurrentSong(playList[0]);
    //     }
    // }

    function startPlaying() {
        if(isPlaying) {
            toggleIsPlaying(false);
        } else {
            toggleIsPlaying(true);
            fetchPlaylist();
        }

    }

    const data = {
        isLargePlayer,
        togglePlayer,
        playList,
        // updatePlayList,
        currentSong,
        setCurrentSong,
        startPlaying
    }

    return (
        <MusicPlayerContext.Provider value={data}>
            {children}
        </MusicPlayerContext.Provider>
    );
}

export default MusicPlayerProvider;