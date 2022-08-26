import React from 'react';
import "./Controls.css";
import PrevBtn from "./controlBtns/previous/PrevBtn";
import PlayBtn from "./controlBtns/play/PlayBtn";
import NextBtn from "./controlBtns/next/NextBtn";

function Controls(props) {
    return (
        <div id={"controls"}>
            <PrevBtn />
            <PlayBtn />
            <NextBtn />
        </div>
    );
}

export default Controls;