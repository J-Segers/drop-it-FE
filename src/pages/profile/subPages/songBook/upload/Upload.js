import React, {useContext, useEffect, useState} from 'react';
import "./Upload.css";
import {PopUpContext} from "../../../../../context/PopupProvider";
import {useForm} from 'react-hook-form';
import axios from "axios";
import defaultPreviewImg from "../../../../../assets/placeholder-image.png";

function Upload() {
    const {toggleUploadPopUp} = useContext(PopUpContext);
    const {register, handleSubmit} = useForm();
    const [songCover, setSongCover] = useState({});
    const [songFile, setSongFile] = useState({});
    const [preview, setPreview] = useState(null);
    const [songInfo, setSongInfo] = useState({});

    useEffect(() => {
        console.log(songCover)
        console.log(songFile)
        console.log(songInfo)
    },[preview, songCover, songFile, songInfo]);

    function handleClosePopUp() {
        toggleUploadPopUp(false);
    }

    function handleChange(e) {
        const file = e.target.files[0];
        if(e.target.name === "cover"){
            setPreview(URL.createObjectURL(file));
            setSongCover(file);
        } else if(e.target.name === "songFile"){
            setSongFile(file);
        }

    }
    
    async function setCover(songId){
        console.log("songId " + songId)

        const formData = new FormData();
        formData.append("file", songCover);

        try {
            const response = await axios.post(`http://localhost:8080/songUpload/img/${songId}`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        "Authorization": `Bearer ${localStorage.getItem("token")}`
                    },
                })
        } catch (e) {

        }
    }
    async function setSong(songId){
        console.log("songId " + songId)
        console.log("songInfo: ", songInfo)
        const formData = new FormData();
        formData.append("file", songFile);

        try {
            const response = await axios.post(`http://localhost:8080/songUpload/song/${songId}`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        "Authorization": `Bearer ${localStorage.getItem("token")}`
                    },
                })
        } catch (e) {

        }
    }

    async function onSongFormSubmit(data) {
        console.log(data)
        try {
            const response = await axios.post(`http://localhost:8080/songUpload/newSong`,
                data,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem("token")}`,
                    }
                })
            console.log("responseData: ", response.data);
            setSongInfo(response.data);
            setCover(response.data.songId);
            setSong(response.data.songId);
        } catch (e) {
            console.error(e);
        }
        // toggleUploadPopUp(false);
    }

    return (
        <div id={"popup-bg"}>
            <div id={"popup-upload-container"}>
                <button id={"close-popup"} onClick={handleClosePopUp}>
                    ✖
                </button>
                <form name={"song upload"} onSubmit={handleSubmit(onSongFormSubmit)}>
                <fieldset id={"upload-song-info"}>
                    <legend>Song info</legend>
                    <div className={"item"}>
                        <label htmlFor="upload-song-title">Title:</label>
                        <input
                            name={"upload-song-title"}
                            type="text"
                            {...register("songTitle", {required: true})}
                        />
                    </div>
                    <div className={"item"}>
                        <label htmlFor="song-length">Length:</label>
                        <input
                            type="text"
                            {...register("songLength", {required: true})}
                        />
                    </div>
                    <div className={"item"}>
                        <label htmlFor="song-artist">Artist:</label>
                        <input
                            type="text"
                            {...register("songArtist", {required: true})}
                        />
                    </div>
                    <div className={"item"}>
                        <label htmlFor="song-collab">Collaborators:</label>
                        <input
                            type="text"
                            {...register("songCollaborators")}
                        />
                    </div>
                    <div className={"item"}>
                        <label htmlFor="song-genre">Genre:</label>
                        <input
                            type="text"
                            {...register("songGenre", {required: true})}
                        />
                    </div>
                </fieldset>

                <fieldset id={"upload-song-cover"}>
                    <legend>Cover</legend>
                    {/*<label htmlFor="song-cover">cover</label>*/}
                    <input type="file"
                           name={"cover"}
                           accept={"image/jpeg, image/png"}
                           id={"initial-song-cover"}
                           onInput={handleChange}
                    />
                    <img src={preview ? `${preview}` : defaultPreviewImg} alt="" />
                </fieldset>

                <fieldset id={"upload-song-file"}>
                    <legend>mp3</legend>
                    <input type="file"
                           name={"songFile"}
                           accept={"audio/mp3"}
                           id={"initial-song-cover"}
                           onChange={handleChange}
                    />
                </fieldset>

                <fieldset id={"upload-song-story"}>
                    <legend>Story</legend>
                    <textarea
                        cols={78}
                        rows={8}
                        {...register("songStory")}
                    >
                </textarea>
                </fieldset>
                <input id={"upload-song-submit"} type={"submit"} value={"submit"} />
            </form>



            </div>
        </div>

    );
}

export default Upload;