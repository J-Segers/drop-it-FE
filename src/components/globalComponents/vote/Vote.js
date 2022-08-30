import React from 'react';
import "./Vote.css";

function Vote({type}) {
    return (
        <div className={"vote-container"}>
            <div className={type} />
        </div>

    );
}

export default Vote;