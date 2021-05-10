import React, { useState } from "react";
import "./NavBar.css";

export default function NavBar(props) {
    const [speed, setSpeed] = useState(-100);
    const [size, setSize] = useState(150);

    function onAlgoChange() {
        const algoIndex = Number(document.getElementById("algo-choice").value);
        props.setAlgorithmName(algoIndex);
    }

    function handleSortClick() {
        props.startSorting();
    }

    function handleShuffleClick() {
        props.shuffleArray();
    }

    function handleRegenerateArrayClick() {
        props.regenerateArray();
    }

    function handleSizeChange(event) {
        setSize(event.target.value);
        props.sizeChangeCallback(event.target.value);
    }

    function handleSpeedChange(event) {
        setSpeed(event.target.value);
        props.speedChangeCallback(-1 * Number(event.target.value));
    }

    return (
        <div className="nav-bar">
            <div className="nav-item">
                <h1>Sorting Visualizer</h1>
            </div>
            <div className="nav-item">
                <select id="algo-choice" onChange={onAlgoChange} defaultValue="0">
                    <option value="0">Bubble Sort</option>
                    <option value="1">Insertion Sort</option>
                    <option value="2">Selection Sort</option>
                    <option value="3">Merge Sort</option>
                    <option value="4">Quick Sort</option>
                    <option value="5">Heap Sort</option>
                </select>
            </div>
            <div className="nav-item">
                <button onClick={handleSortClick}>
                    Sort
                </button>
            </div>
            <div className="nav-item">
                <button onClick={handleRegenerateArrayClick}>
                    Regenerate
                </button>
            </div>
            <div className="nav-item">
                <button onClick={handleShuffleClick}>
                    Shuffle
                </button>
            </div>
            <div className="nav-item range">
                <label>Array Size</label>
                <input type="range" min="10" max="250" value={size} onChange={handleSizeChange}></input>
            </div>
            <div className="nav-item range">
                <label>Animation Speed</label>
                <input type="range" min="-500" max="-0.1" step="0.1" value={speed} onChange={handleSpeedChange}></input>
            </div>
        </div>
    );
}