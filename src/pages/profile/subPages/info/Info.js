import React, {useContext, useState} from 'react';
import "./Info.css";
import {useForm} from "react-hook-form";
import defaultProfileImg from "../../../../assets/Portrait_Placeholder.png";
import defaultProfileBodyImg from "../../../../assets/placeholder-image.png";
import axios from "axios";
import {AuthenticationContext} from "../../../../context/AuthenticationContextProvider";
import {useParams, useOutletContext} from "react-router-dom";
import jwtDecode from 'jwt-decode';

function Info() {

    const [edit, toggleEdit] = useState(false);
    const [previewBodyImage, setPreviewBodyImage] = useState(defaultProfileBodyImg);
    const [previewImage, setPreviewImage] = useState(defaultProfileImg);

    const {register, handleSubmit} = useForm();
    const {register: bodyImgRegister, handleSubmit: handleBodyImgSubmit} = useForm();
    const {register: profileImgRegister, handleSubmit: handleProfileImgSubmit} = useForm();
    const {user, profile, changeProfileImg} = useContext(AuthenticationContext);
    const [profileInfo, setProfileInfo] = useOutletContext();

    const client = axios.create({
        baseURL: 'http://localhost:8080/'
    });

    const {username} = useParams();

    const handleImageChange = (e) => {
        const newFile = e.target.files[0];

        if(e.target.name === "profileImg") {
            setPreviewImage(URL.createObjectURL(newFile));
        } else if(e.target.name === "profileBodyImg") {
            setPreviewBodyImage(URL.createObjectURL(newFile));
        }
    }

    async function onProfileFormSubmit(data) {

        const decodedToken = jwtDecode(localStorage.getItem("token"));

        client.put(`profile/update/${decodedToken.sub}`, data).then((response) => {
            setProfileInfo(response.data);
        })
    }

    async function onProfileImgSubmit(data) {

        const formData = new FormData();
        formData.append("file", data.profileImg[0]);


        await client.post(`upload/profileImg/${user.username}`, formData).then((response) => {
            setProfileInfo(
                {...profileInfo,
                    profileImg: {...response.data}
                });
        });

    }

    async function onBodyImgSubmit(data) {

        const formData = new FormData();
        formData.append("file", data.profileBodyImg[0]);

        try {
            const response = await client.post(`upload/profileBodyImg/${user.username}`, formData);
            setProfileInfo(
                {...profileInfo,
                        profileBodyImg: {...response.data}
                    },
                );
        } catch (e) {

        }
    }


    return (
        <>{profileInfo && <>
            {edit ?
                <div id={"edit-info-container"}>
                    <button
                        id={"close-btn"}
                        onClick={() => {
                            setPreviewImage(null);
                            changeProfileImg(profileInfo);
                            toggleEdit(false);
                        }}>✖
                    </button>
                    <form id={"edit-profile-info"} onSubmit={handleSubmit(onProfileFormSubmit)}>
                        <div id="items">
                            <div className={"edit-info-item"}>
                                <label>First name: </label>
                                <input
                                    type={"text"}
                                    defaultValue={profileInfo.firstName}
                                    {...register("firstName")}
                                />
                            </div>
                            <div className={"edit-info-item"}>
                                <label>Last name: </label>
                                <input
                                    type={"text"}
                                    defaultValue={profileInfo.lastName}
                                    {...register("lastName")}
                                />
                            </div>
                            <div className={"edit-info-item"}>
                                <label>Location: </label>
                                <input
                                    type={"text"}
                                    defaultValue={profileInfo.location}
                                    {...register("location")}
                                />
                            </div>
                            <div className={"edit-info-item"}>
                                <label>About me: </label>
                                <textarea
                                    cols={50}
                                    rows={18}
                                    defaultValue={profileInfo.story}
                                    {...register("story")}
                                />
                            </div>
                        </div>
                        <input type={"submit"} id={"profile-save-btn"} value={"save"}/>
                    </form>
                    <form id={"edit-info-profile-image"} onSubmit={handleProfileImgSubmit(onProfileImgSubmit)}>
                        <input
                            type={"file"}
                            accept={"image/jpeg, image/png"}
                            onInput={handleImageChange}
                            {...profileImgRegister("profileImg")}
                        />
                        <img src={previewImage ? `${previewImage}` : `${profile.profileImg.url}`} alt={""}/>
                        <input type={"submit"} id={"profile-save-btn"} value={"save img"}/>
                    </form>

                    <form id={"edit-info-body-image"} onSubmit={handleBodyImgSubmit(onBodyImgSubmit)}>
                        <img src={previewBodyImage ? `${previewBodyImage}` : `${profile.profileBodyImg.url}`} alt={""}/>
                        <span>
                                <input
                                    type={"file"}
                                    accept={"image/jpeg, image/png"}
                                    onInput={handleImageChange}
                                    {...bodyImgRegister("profileBodyImg")}
                                />
                                <input type={"submit"} id={"profile-save-btn"} value={"save img"}/>
                            </span>
                    </form>

                </div>
                :
                <div id="info-container">
                    {user.username === username && <button id={"profile-settings"} onClick={() => toggleEdit(true)}>⚙</button>}
                    <form id={"profile-info"}>
                        <div className={"info-item"}>
                            <label>First name: </label>
                            <label>{profileInfo.firstName}</label>
                        </div>
                        <div className={"info-item"}>
                            <label>Last name: </label>
                            <label>{profileInfo.lastName}</label>
                        </div>
                        <div className={"info-item"}>
                            <label>Location: </label>
                            <label>{profileInfo.location}</label>
                        </div>
                        <div className={"info-item"}>
                            <label>About me: </label>
                            <p>{profileInfo.story}</p>
                        </div>
                    </form>
                        <div id={"info-image"}>
                            <img src={profileInfo && profileInfo.profileBodyImg ? `${profileInfo.profileBodyImg.url}` : defaultProfileBodyImg} alt={""}/>
                        </div>
                </div>
            }
            </>
        }
        </>


    );
}

export default Info;