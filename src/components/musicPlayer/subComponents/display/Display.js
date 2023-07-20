import React, {useContext, useEffect, useRef, useState} from 'react';
import "./Display.css";
import {MusicPlayerContext} from "../../../../context/MusicPlayerProvider";
import getTimeStampFromDuration from "../../../../helperFuncties/convertLengthToTime";

function Display() {

    const {isPlaying, currentSong, audioElement, nextSong} = useContext(MusicPlayerContext);
    const [currentSongInfo, setCurrentSongInfo] = useState("test");

    const [min, setMin] = useState("0");
    const [sec, setSec] = useState("00");
    const [curMin, setCurMin] = useState("0");
    const [curSec, setCurSec] = useState("00");

    const progressBar = useRef();

    useEffect(() => {
        if(audioElement.current.currentTime > audioElement.current.duration - 1) {
            nextSong();
        }
    });

    useEffect(() => {

        let duration = audioElement?.current?.duration;

        if(duration > 0) {
            progressBar.current.max = Math.floor(duration) - 1;

            // array [minutes, seconds]
            let timeStampArray = getTimeStampFromDuration(duration);
            if(timeStampArray.length > 0) {
                setMin(timeStampArray[0]);
                if (timeStampArray[1] < 10) {
                    setSec(`0${timeStampArray[1]}`);
                } else {
                    setSec(`${timeStampArray[1]}`);
                }
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