import React, { useState } from "react";
import BarsArray from "./BarsArray";
import NavBar from "./NavBar";
import Legend from "./Legend";
import "./SortingVisualizer.css";

export default function SortingVisualizer() {
    const algorithms = ["Bubble", "Insertion", "Selection", "Merge", "Quick", "Heap"];
    const algoInfoList = [
        "Bubble Sort runs in O(n²) on average and O(n) in the best case. It is in-place, stable and adaptive.",
        "Insertion Sort runs in O(n²) on average and O(n) in the best case. It is in-place, stable and adaptive.",
        "Selection Sort runs in O(n²) always. It is in-place, not stable and not adaptive.",
        "Merge Sort runs in O(nlog₂n) always. It is not in-place, stable and not adaptive.",
        "Quick Sort runs in O(nlog₂n) on average and O(n²) in the worst case. It is in-place, not stable and not adaptive.",
        "Heap Sort runs in O(nlog₂n) always. It is in-place, not stable and not adaptive."
    ];
    const [shuffle, setShuffle] = useState(false);
    const [regenerate, setRegenerate] = useState(false);
    const [algorithmName, setAlgorithmName] = useState(algorithms[0]);
    const [sort, setSort] = useState(false);
    const [size, setSize] = useState(150);
    const [speed, setSpeed] = useState(100);
    const [algoInfo, setAlgoInfo] = useState(algoInfoList[0]);

    function setAlgorithmNameCallback(index) {
        setAlgorithmName(algorithms[index]);
        setAlgoInfo(algoInfoList[index]);
    }

    function sortCallback() {
        document.getElementById("disable-div").style.setProperty("display", "block");
        setSort(true);
    }

    function shuffleArray() {
        setShuffle(true);
    }

    function regenerateArray() {
        setRegenerate(true);
    }

    function shuffleArrayCallback() {
        setShuffle(false);
    }

    function regenerateArrayCallback() {
        setRegenerate(false);
    }

    function sortingOverCallback() {
        document.getElementById("disable-div").style.setProperty("display", "none");
        setSort(false);

    }

    function sizeChangeCallback(size) {
        setSize(size);

    }

    function speedChangeCallback(speed) {
        setSpeed(speed);
    }

    return (
        <div>
            <div id="disable-div" style={{ "display": "none" }}></div>

            <NavBar
                setAlgorithmName={setAlgorithmNameCallback}
                startSorting={sortCallback}
                shuffleArray={shuffleArray}
                regenerateArray={regenerateArray}
                sizeChangeCallback={sizeChangeCallback}
                speedChangeCallback={speedChangeCallback}
            />

            <Legend />

            <h3>{algoInfo}</h3>

            <BarsArray
                animationSpeed={speed}
                arraySize={size}
                algorithmName={algorithmName}
                startSort={sort}
                sortingOver={sortingOverCallback}
                startShuffle={shuffle}
                regenerate={regenerate}
                shufflingOver={shuffleArrayCallback}
                regeneratingOver={regenerateArrayCallback}
            />
        </div>
    );
}