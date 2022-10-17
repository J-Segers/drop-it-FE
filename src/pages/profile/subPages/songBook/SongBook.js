import React, {useContext, useEffect, useState} from 'react';
import "./SongBook.css";
import Song from "./Song/Song";
import Upload from "./upload/Upload";
import {PopUpContext} from "../../../../context/PopupProvider";
import {useParams} from "react-router-dom";
import axios from "axios";

function Songs() {
    const {popUpUploadVisible, toggleUploadPopUp} = useContext(PopUpContext);
    const [artistSongs, setArtistSongs] = useState([]);
    const{username} = useParams();

    useEffect(() => {
        console.log("artistSongs: ", artistSongs);
    },[artistSongs,popUpUploadVisible]);

    useEffect(() => {
        fetchArtistSongs()
    }, []);

    async function fetchArtistSongs(){
        try {
            const response = await axios.get(`http://localhost:8080/${username}/songs`);
            console.log(response.data)
            setArtistSongs(response.data);
        } catch (e) {

        }
    }

    return (
        <div className={"song-book-container"}>
            <div id={"upload-btn"} onClick={() => toggleUploadPopUp(true)}>
                <div id={"upload-filler"} />
                <h3>add new song</h3>
            </div>
            {popUpUploadVisible ? <Upload /> : ""}
            {artistSongs.map((song) => {
                console.log(song);
            return <Song key={song.id} song={song}/>;
        })}
        </div>
    );
}

export default Songs;