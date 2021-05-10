import React from "react";
import "./Legend.css";

export default function Legend() {
    return (
        <div className="legend">
            <div className="legend-item">
                <div className="bar-legend"></div>
                <p>Bar</p>
            </div>
            <div className="legend-item">
                <div className="bar-legend" style={{ backgroundColor: "green" }}></div>
                <p>Comparing</p>
            </div>
            <div className="legend-item">
                <div className="bar-legend" style={{ backgroundColor: "red" }}></div>
                <p>Swapping</p>
            </div>
            <div className="legend-item">
                <div className="bar-legend" style={{ backgroundColor: "yellow" }}></div>
                <p>Pivot</p>
            </div>
        </div>
    )
}