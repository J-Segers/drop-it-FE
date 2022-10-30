import React, {useContext, useEffect, useRef, useState} from 'react';
import "./Display.css";
import {MusicPlayerContext} from "../../../../context/MusicPlayerProvider";

function Display() {

    const {isPlaying, currentSong, audioElement} = useContext(MusicPlayerContext);
    const [currentSongInfo, setCurrentSongInfo] = useState("test");

    const [min, setMin] = useState("0");
    const [sec, setSec] = useState("0");
    const [curMin, setCurMin] = useState("0");
    const [curSec, setCurSec] = useState("0");

    const progressBar = useRef();

    useEffect(() => {

        if(currentSong != null) {
            progressBar.current.max = Math.floor(audioElement.current.duration);
            let newSec = Math.floor(audioElement.current.duration % 60);
            setMin(`${Math.floor(audioElement.current.duration / 60)}`);
            if (newSec < 10) {
                setSec(`0${newSec}`);
            } else {
                setSec(`${newSec}`);
            }
            setCurrentSongInfo(`${currentSong.title} - ${currentSong.artist}`);
        }


    });

    useEffect(() => {
        if (isPlaying) {
            const interval = setInterval(() => {

                let newCurSec = Math.floor(audioElement.current.currentTime % 60);
                setCurMin(`${Math.floor(audioElement.current.currentTime / 60)}`);
                if (newCurSec < 10) {
                    setCurSec(`0${newCurSec}`);
                } else {
                    setCurSec(`${newCurSec}`);
                }
                progressBar.current.value = audioElement.current.currentTime;

            },100);

            return () => clearInterval(interval);
        }
    })

    const changeRange = () => {
        audioElement.current.currentTime = progressBar.current.value;
    }

    return (
        <div id={"display"}>
            <label id={"current-song-info"} title={"current-song-info"}>{currentSongInfo}</label>
            <input type={"range"} id={"current-song-slider"} defaultValue={0} ref={progressBar} onChange={changeRange} />
            <label id={"current-song-timestamp"} title={"current-song-timestamp"}>
                {`${curMin}:${curSec} / ${min}:${sec}`}
            </label>
        </div>
    );
}

export default Display;