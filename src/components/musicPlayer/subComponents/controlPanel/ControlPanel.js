import React from 'react';
import "./ControlPanel.css";
import Vote from "../../../globalComponents/vote/Vote";
import Display from "../display/Display";
import Controls from "./controls/Controls";

function ControlPanel(props) {
    return (
        <div id={"control-panel"}>
            <Controls />
            <Display />
            <div className={"likes"}>
                <Vote type={"up-vote"} />
                <Vote type={"down-vote"} />
            </div>
        </div>
    );
}

export default ControlPanel;