import React, {useContext, useEffect, useRef, useState} from 'react';
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

    const previewPlayer = useRef();

    const client = axios.create({baseURL: "http://localhost:8080/"});

    useEffect(() => {
        console.log(songCover)
        console.log(songFile)
        console.log(songInfo)
        console.log(previewPlayer);
    },[preview, songCover, songFile, songInfo]);

    function handleClosePopUp() {
        toggleUploadPopUp(false);
    }

    function handleChange(e) {
        console.log(e);
        const file = e.target.files[0];
        if(e.target.name === "cover"){
            setPreview(URL.createObjectURL(file));
            setSongCover(file);
        } else if(e.target.name === "songFile"){
            setSongFile(URL.createObjectURL(file));
        }

    }
    
    async function setCover(songId){
        console.log("songId " + songId)

        const formData = new FormData();
        formData.append("file", songCover);

        try {
            await client.post(`songUpload/img/${songId}`,
                formData);
        } catch (e) {
            console.log(e);
        }
    }

    async function setSong(songId){
        console.log("songId " + songId)
        console.log("songInfo: ", songInfo)
        const formData = new FormData();
        formData.append("file", songFile);

        try {
            await client.post(`songUpload/song/${songId}`,
                formData);
        } catch (e) {
            console.log(e);
        }
    }

    async function onSongFormSubmit(data) {
        console.log(data)
        try {
            const response = await client.post(`songUpload/newSong`, data);
            console.log("responseData: ", response.data);
            setSongInfo(response.data);
            setCover(response.data.id);
            setSong(response.data.id);
        } catch (e) {
            console.error(e);
        }
        // toggleUploadPopUp(false);
    }

    return (
        <div id={"popup-bg"}>
            <fieldset id={"upload-field"}>
                <legend id={"upload-header"}>Upload</legend>
                <form id={"popup-upload-container"} onSubmit={handleSubmit(onSongFormSubmit)}>
                    <button id={"close-popup"} onClick={handleClosePopUp}>
                        ✖
                    </button>
                    <fieldset id={"upload-song-info"}>
                        <legend>Song info</legend>
                        <div className={"item"}>
                            <label htmlFor="upload-song-title">Title:</label>
                            <input
                                name={"upload-song-title"}
                                type="text"
                                // value={previewPlayer.current.duration}
                                {...register("songTitle", {required: true})}
                            />
                        </div>
                        {/*<div className={"item"}>*/}
                        {/*    <label htmlFor="song-length">Length:</label>*/}
                        {/*    <input*/}
                        {/*        type="text"*/}
                        {/*        {...register("songLength", {required: true})}*/}
                        {/*    />*/}
                        {/*</div>*/}
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
                        <audio id={"preview-player"} src={songFile} controls ref={previewPlayer}/>
                    </fieldset>

                    <fieldset id={"upload-song-story"}>
                        <legend>Story</legend>
                        <textarea
                            cols={60}
                            rows={8}
                            {...register("songStory")}
                        >
                    </textarea>
                    </fieldset>
                    <input id={"upload-song-submit"} type={"submit"} value={"submit"} />
                </form>
            </fieldset>
        </div>

    );
}

export default Upload;