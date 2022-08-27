import React from 'react';
import "./ScheduleItem.css";

function ScheduleItem({item}) {
    return (
        <div className={"schedule-item"}>
            <label title={"name"}>{item[0]}</label>
            <label title={"start date"}>{item[1]}</label>
            <label title={"closing date"}>{item[2]}</label>
            <label title={"competition host"}>{item[3]}</label>
        </div>
    );
}

export default ScheduleItem;