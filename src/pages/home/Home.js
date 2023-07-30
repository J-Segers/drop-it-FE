import React, {useContext, useEffect} from 'react';
import "./Home.css";
import {MusicPlayerContext} from "../../context/MusicPlayerProvider";
import Schedule from "../../components/globalComponents/schedule/Schedule";
import {PopUpContext} from "../../context/PopupProvider";
import Footer from "../../components/footer/Footer";
import placeHolder from "../../assets/placeholder-image.png";

function Home() {
    const {toggleIsLargePlayer} = useContext(MusicPlayerContext);
    const {toggleLogInPopUp, handlePopUpLanding} = useContext(PopUpContext);

    useEffect(() => {
        toggleIsLargePlayer(true);
    },[toggleIsLargePlayer]);

    return (
        <>
             <div id={"register-btn"} onClick={() => {
                    handlePopUpLanding(false);
                    toggleLogInPopUp(true);
                }}>
                    register
            </div>
            <div id={"home-container"}>
                <section id={"about-dropit"}>
                    <img src={placeHolder} alt="" />
                    <article className="info">
                        <p>
                            Doggo ipsum shooberino shoober ruff woofer extremely cuuuuuute vvv, smol ur givin me a spook lotsa pats. Shoob the neighborhood pupper shoober doggo blop, snoot dat tungg tho floofs. Borking doggo the neighborhood pupper you are doin me a concern, wow such tempt. Long doggo very jealous pupper long doggo you are doing me a frighten dat tungg tho wrinkler, many pats boofers sub woofer long woofer, pats noodle horse what a nice floof corgo. Woofer very jealous pupper puggo you are doin me a concern, shoob.
                        </p>
                        <p>
                            Boof super chub blep stop it fren, very taste wow long doggo. doge shoober wow such tempt. Borkf tungg super chub, ur givin me a spook. Shibe waggy wags heckin angery woofer sub woofer shoob shoober, ur givin me a spook borkf floofs fluffer boof, snoot long water shoob blop I am bekom fat. Borking doggo waggy wags long doggo smol borking doggo with a long snoot for pats ruff lotsa pats long water shoob puggorino floofs, doggo wrinkler stop it fren I am bekom fat aqua doggo shooberino sub woofer.
                        </p>
                    </article>
                </section>
                <section id={"pitch"}>
                    <article className="info">
                        <p>
                            Doggo ipsum shooberino shoober ruff woofer extremely cuuuuuute vvv, smol ur givin me a spook lotsa pats. Shoob the neighborhood pupper shoober doggo blop, snoot dat tungg tho floofs. Borking doggo the neighborhood pupper you are doin me a concern, wow such tempt. Long doggo very jealous pupper long doggo you are doing me a frighten dat tungg tho wrinkler, many pats boofers sub woofer long woofer, pats noodle horse what a nice floof corgo. Woofer very jealous pupper puggo you are doin me a concern, shoob.
                        </p>
                        <p>
                            Boof super chub blep stop it fren, very taste wow long doggo. doge shoober wow such tempt. Borkf tungg super chub, ur givin me a spook. Shibe waggy wags heckin angery woofer sub woofer shoob shoober, ur givin me a spook borkf floofs fluffer boof, snoot long water shoob blop I am bekom fat. Borking doggo waggy wags long doggo smol borking doggo with a long snoot for pats ruff lotsa pats long water shoob puggorino floofs, doggo wrinkler stop it fren I am bekom fat aqua doggo shooberino sub woofer.
                        </p>
                    </article>
                    <img src={placeHolder} alt="" />
                </section>
                <section className="schedule">
                    <img src={placeHolder} alt="" />
                    <Schedule />
                </section>
            </div>
            <Footer />
        </>
    );
}

export default Home;