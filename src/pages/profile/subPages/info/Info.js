import React, {useContext, useEffect, useState} from 'react';
import "./Info.css";
import {useForm} from "react-hook-form";
import defaultImg from "../../../../assets/tenaciousD-JackBlack.jpg";
import {UserContext} from "../../../../context/UserContextProvider";

function Info() {
    const {register, handleSubmit} = useForm();
    const { } = useContext(UserContext);

    const [edit, toggleEdit] = useState(false);
    const [infoImage, setInfoImage] = useState(defaultImg);
    const [newImage, setNewImage] = useState(null);

    useEffect(() => {

    }, [infoImage]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setNewImage(URL.createObjectURL(file));
    }

    const onProfileFormSubmit = (e) => {
        setInfoImage(newImage);
        setNewImage(null);
        toggleEdit(false);
        console.log(e);
    }

    let firstName = "jack";
    let lastName = "black";
    let userLocation = "US of A";
    let aboutMe = "I am an American comedian, actor and musician. I am one half of the comedy and satirical rock duo Tenacious D. Which has two albums as well as a television series and a film. My acting career is extensive, starring primarily as bumbling, cocky, but internally self-conscious outsiders in comedy films. I was a member of the Frat Pack, a group of comedians who have appeared together in several Hollywood films, and have been nominated for a Golden Globe award. I have also won an MTV Movie Award, and a Nickelodeon Kids Choice Award.";

    return (
        <>
            {edit ?
                <div id={"edit-info-container"}>
                    <form id={"edit-profile-info"} onSubmit={handleSubmit(onProfileFormSubmit)}>
                        <button
                            id={"close-btn"}
                            onClick={() => {
                            setNewImage(null);
                            toggleEdit(false);
                        }}>✖</button>
                        <div id="items">
                            <div className={"edit-info-item"}>
                                <label>First name: </label>
                                <input
                                    type={"text"}
                                    defaultValue={firstName}
                                    {...register("firstName")}
                                />
                            </div>
                            <div className={"edit-info-item"}>
                                <label>Last name: </label>
                                <input
                                    type={"text"}
                                    defaultValue={lastName}
                                    {...register("lastName")}
                                />
                            </div>
                            <div className={"edit-info-item"}>
                                <label>Location: </label>
                                <input
                                    type={"text"}
                                    defaultValue={userLocation}
                                    {...register("location")}
                                />
                            </div>
                            <div className={"edit-info-item"}>
                                <label>About me: </label>
                                <textarea
                                    cols={60}
                                    rows={23}
                                    defaultValue={aboutMe}
                                 {...register("story")}
                                />
                            </div>
                        </div>
                        <div id={"edit-info-image"}>
                            <input
                                type={"file"}
                                accept={"image/jpeg, image/png"}
                                onInput={handleImageChange}
                                {...register("img")}
                            />
                            <img src={newImage ? `${newImage}`: `${infoImage}`} alt={""}/>
                        </div>
                        <input type={"submit"} id={"profile-save-btn"} value={"save"} />
                    </form>
                </div>
                 :
                <div id="info-container">
                    <button id={"profile-settings"} onClick={() => toggleEdit(true)}>⚙</button>
                        <form id={"profile-info"}>
                            <div className={"info-item"}>
                                <label>First name: </label>
                                <label>{firstName}</label>
                            </div>
                            <div className={"info-item"}>
                                <label>Last name: </label>
                                <label>{lastName}</label>
                            </div>
                            <div className={"info-item"}>
                                <label>Location: </label>
                                <label>{userLocation}</label>
                            </div>
                            <div className={"info-item"}>
                                <label>About me: </label>
                                <p>{aboutMe}</p>
                            </div>
                        </form>
                    <div id={"info-image"}>
                        <img src={`${infoImage}`} alt={""} />
                    </div>
                </div>
                }
        </>



    );
}

export default Info;