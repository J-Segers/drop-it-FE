import React, {useContext, useEffect} from 'react';
import "./Home.css";
import {MusicPlayerContext} from "../../context/MusicPlayerProvider";
import Schedule from "../../components/global components/schedule/Schedule";

function Home() {
    const {togglePlayer} = useContext(MusicPlayerContext);

    useEffect(() => {
        togglePlayer(true);
    })

    return (
        <>
            <div id={"home-container"}>
                <p id={"about-dropit"}>
                    Doggo ipsum shooberino shoober ruff woofer extremely cuuuuuute vvv, smol ur givin me a spook lotsa pats. Shoob the neighborhood pupper shoober doggo blop, snoot dat tungg tho floofs. Borking doggo the neighborhood pupper you are doin me a concern, wow such tempt. Long doggo very jealous pupper long doggo you are doing me a frighten dat tungg tho wrinkler, many pats boofers sub woofer long woofer, pats noodle horse what a nice floof corgo. Woofer very jealous pupper puggo you are doin me a concern, shoob. Boof super chub blep stop it fren, very taste wow long doggo. doge shoober wow such tempt. Borkf tungg super chub, ur givin me a spook. Shibe waggy wags heckin angery woofer sub woofer shoob shoober, ur givin me a spook borkf floofs fluffer boof, snoot long water shoob blop I am bekom fat. Borking doggo waggy wags long doggo smol borking doggo with a long snoot for pats ruff lotsa pats long water shoob puggorino floofs, doggo wrinkler stop it fren I am bekom fat aqua doggo shooberino sub woofer.
                </p>
                <div id={"register-btn"} onClick={() => {}}>
                    register
                </div>
                <p id={"pitch"}>
                    Borkdrive shooberino wow such tempt you are doin me a concern shoob pupper long doggo, you are doing me the shock maximum borkdrive such treat I am bekom fat. Snoot boof fat boi shoob boof, woofer doing me a frighten very taste wow, vvv tungg very good spot. Shooberino many pats such treat pupperino, heckin angery woofer. Noodle horse wow very biscit doggorino maximum borkdrive heck, porgo noodle horse bork. Boof h*ck wow very biscit super chub, long bois. Long doggo long woofer you are doing me a frighten, wow very biscit. Length boy maximum borkdrive puggorino mlem shoober, clouds smol borking doggo with a long snoot for pats borkdrive.
                </p>
                <Schedule />
            </div>
        </>
    );
}

export default Home;