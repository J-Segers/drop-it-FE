import React from 'react';
import "./Info.css";
import infoImage from "../../../../assets/tenaciousD-JackBlack.jpg";

function Info(props) {

    let firstName = "jack";
    let lastName = "black";
    let userLocation = "US of A";
    let aboutMe = "I am an American comedian, actor and musician. I am one half of the comedy and satirical rock duo Tenacious D. Which has two albums as well as a television series and a film. My acting career is extensive, starring primarily as bumbling, cocky, but internally self-conscious outsiders in comedy films. I was a member of the Frat Pack, a group of comedians who have appeared together in several Hollywood films, and have been nominated for a Golden Globe award. I have also won an MTV Movie Award, and a Nickelodeon Kids Choice Award.";

    return (
        <div id={"info-container"}>
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
                <img src={infoImage} alt={"info picture"}/>
            </div>
        </div>
    );
}

export default Info;