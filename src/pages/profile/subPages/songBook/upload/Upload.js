import React, {useContext, useEffect, useState} from 'react';
import "./Upload.css";
import {PopUpContext} from "../../../../../context/PopupProvider";
import {useForm} from 'react-hook-form';

function Upload() {
    const {toggleUploadPopUp} = useContext(PopUpContext);
    const {register, handleSubmit} = useForm();
    const [preview, setPreview] = useState(null);

    useEffect(() => {

    },[preview]);

    function handleClosePopUp() {
        toggleUploadPopUp(false);
    }

    function handlePreviewChange(e) {
        const file = e.target.files[0];
        setPreview(URL.createObjectURL(file));
    }

    function onSongFormSubmit(e) {
        toggleUploadPopUp(false);
        console.log(e);
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
                            {...register("title", {required: true})}
                        />
                    </div>
                    <div className={"item"}>
                        <label htmlFor="song-length">Length:</label>
                        <input
                            type="text"
                            {...register("length", {required: true})}
                        />
                    </div>
                    <div className={"item"}>
                        <label htmlFor="song-artist">Artist:</label>
                        <input
                            type="text"
                            {...register("artist", {required: true})}
                        />
                    </div>
                    <div className={"item"}>
                        <label htmlFor="song-collab">Collaborators:</label>
                        <input
                            type="text"
                            {...register("collaborators")}
                        />
                    </div>
                    <div className={"item"}>
                        <label htmlFor="song-genre">Genre:</label>
                        <input
                            type="text"
                            {...register("genre", {required: true})}
                        />
                    </div>
                </fieldset>

                <fieldset id={"upload-song-cover"}>
                    <legend>Cover</legend>
                    <label htmlFor="song-cover">cover</label>
                    <input type="file"
                           accept={"image/jpeg, image/png"}
                           id={"initial-song-cover"}
                           onInput={handlePreviewChange}
                           {...register("img_file", {required: true})}
                    />
                    {preview ? <img src={`${preview}`} alt="" /> : null}
                </fieldset>

                <fieldset id={"upload-song-file"}>
                    <legend>mp3</legend>
                    <input type="file"
                           accept={"audio/mp3"}
                           id={"initial-song-cover"}
                           onInput={handlePreviewChange}
                           {...register("mp3_file", {required: true})}
                    />
                    {preview ? <img src={`${preview}`} alt="" /> : null}
                </fieldset>

                <fieldset id={"upload-song-story"}>
                    <legend>Story</legend>
                    <textarea
                        cols={78}
                        rows={8}
                        {...register("story")}
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