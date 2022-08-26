import React from 'react';
import "./Btn.css";

function Btn({text}) {
    return (
        <div className={"btn"}>
            {text}
        </div>
    );
}

export default Btn;