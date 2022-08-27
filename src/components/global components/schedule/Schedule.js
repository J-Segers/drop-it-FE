import React from 'react';
import "./Schedule.css";
import ScheduleItem from "./scheduleItem/ScheduleItem";

function Schedule({name}) {
    let list = [["name", "start date", "closing date", "host"],
        ["name", "start date", "closing date", "host"],
        ["name", "start date", "closing date", "host"],
        ["name", "start date", "closing date", "host"],
        ["name", "start date", "closing date", "host"],
        ["name", "start date", "closing date", "host"],
        ["name", "start date", "closing date", "host"],
        ["name", "start date", "closing date", "host"],
        ["name", "start date", "closing date", "host"],
        ["name", "start date", "closing date", "host"],
        ["name", "start date", "closing date", "host"],
        ["name", "start date", "closing date", "host"],
        ["name", "start date", "closing date", "host"],
    ];

    return (
        <div className={"schedule-container"}>
            <label>{name}</label>
            <div className={"schedule-list"}>
                {list.map((item) => {
                    return <ScheduleItem item={item}/>
                })}
            </div>
        </div>
    );
}

export default Schedule;