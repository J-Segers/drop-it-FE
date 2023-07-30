import React from 'react';
import "./Stats.css";
import {Chart} from "react-google-charts";

function Stats() {

    const data = [
        ["month", "followers"],
        ["january", 0],
        ["february", 4],
        ["march", 8],
        ["april", 16],
        ["may", 32],
        ["june", 16],
        ["july", 24],
        ["august", 24],
        ["september", 40],
        ["oktober", 60],
        ["november", 53],
        ["december", 79],

    ];

    const options = {
        hAxis: {
            title: "past 30 days",
        },
        vAxis: {
            title: "followers",
        },
        series: {
            1: { curveType: "function" },
        },
        legend: {position: "top"},

    };

    return (
        <div id={"stats-container"}>
            <h2>Channel Statistics</h2>
            <div className={"chart"}>
                <Chart
                chartType={"PieChart"}
                data={data}
                options={options}
                width="400px"
                height="200px"
                legendToggle
            />
            </div>
            <div className={"chart"}>
            <Chart
                chartEvents={[
                    {
                    eventName: "select",
                    callback: ({ chartWrapper }) => {
                        const chart = chartWrapper.getChart();
                        const selection = chart.getSelection();
                        if (selection.length === 0) return;
                        const region = data[selection[0].row + 1];
                        console.log("Selected : " + region);
                    },
                    },
                ]}
                chartType="GeoChart"
                width="400px"
                height="200px"
                data={data}
            />
            </div>
            <div className={"chart"}>
                <Chart
                chartType={"LineChart"}
                data={data}
                options={options}
                width="400px"
                height="200px"
                legendToggle
            />
            </div>
            <div className={"chart"}>
                <Chart
                chartType={"ColumnChart"}
                data={data}
                options={options}
                width="400px"
                height="200px"
                legendToggle
            />
            </div>
        </div>
    );
}

export default Stats;