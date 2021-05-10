import React, { useEffect, useState, useCallback } from "react";
import "./BarsArray.css";
import bubbleSort from "../algorithms/bubbleSort";
import insertionSort from "../algorithms/insertionSort";
import selectionSort from "../algorithms/selectionSort";
import mergeSort from "../algorithms/mergeSort";
import quickSort from "../algorithms/quickSort";
import heapSort from "../algorithms/heapSort";

function getRandomArray(count) {
    let arr = [];
    for (var i = 0; i < count; i++) {
        arr.push(Math.floor(Math.random() * 600) + 10);
    }
    return arr;
}

function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);;
}

export default function BarsArray(props) {
    const { algorithmName, startSort, sortingOver, startShuffle, regenerate, shufflingOver, regeneratingOver, animationSpeed, arraySize } = props;
    const [ANIMATION_SPEED, setAnimationSpeed] = useState(animationSpeed);
    const [ARRAY_SIZE, setArraySize] = useState(arraySize);
    const [array, setArray] = useState(getRandomArray(ARRAY_SIZE));
    const [currentlySorting, setCurrentlySorting] = useState(false);

    useEffect(() => {
        setAnimationSpeed(animationSpeed);
    }, [animationSpeed]);

    useEffect(() => {
        setArraySize(arraySize);
    }, [arraySize]);

    useEffect(() => {
        async function generateNewSizeArray() {
            await setArray(getRandomArray(ARRAY_SIZE));
            var width = 900 / ARRAY_SIZE;
            var bars = document.getElementsByClassName("bar");
            for (var i = 0; i < bars.length; i++) {
                bars[i].style.width = width + "px";
            }
        }
        generateNewSizeArray();
    }, [ARRAY_SIZE]);

    useEffect(() => {
        if (startShuffle) {
            setArray(array => shuffle(array));
            shufflingOver();
        }
    }, [startShuffle, shufflingOver]);

    useEffect(() => {
        if (regenerate) {
            setArray(getRandomArray(ARRAY_SIZE));
            regeneratingOver();
        }
    }, [regenerate, regeneratingOver, ARRAY_SIZE]);


    const animate = useCallback((animationsList) => {
        var firstBar, secondBar, firstIdx, secondIdx, type;
        animationsList.forEach((animation, idx) => {
            setTimeout(() => {
                type = animation[2];
                if (type === "SetHeight") {
                    setArray(animation[0]);
                } else if (type === "SetHeightAndChangeToRed") {
                    var indices = animation[1];
                    firstBar = document.getElementById("bar-" + indices[0]);
                    secondBar = document.getElementById("bar-" + indices[1]);
                    secondBar.style.backgroundColor = "rgb(0, 174, 255)";
                    secondBar = document.getElementById("bar-" + (indices[0] + 1));
                    secondBar.style.backgroundColor = "red";
                    setArray(animation[0]);
                } else {
                    firstIdx = animation[0];
                    secondIdx = animation[1];
                    firstBar = document.getElementById("bar-" + firstIdx);
                    secondBar = document.getElementById("bar-" + secondIdx);
                    if (type === "ChangeToRed") {
                        firstBar.style.backgroundColor = "red";
                        secondBar.style.backgroundColor = "red";
                    } else if (type === "ChangeToGreen") {
                        firstBar.style.backgroundColor = "green";
                        secondBar.style.backgroundColor = "green";
                    } else if (type === "ChangeToBlue") {
                        firstBar.style.backgroundColor = "rgb(0, 174, 255)";
                        secondBar.style.backgroundColor = "rgb(0, 174, 255)";
                    } else if (type === "ChangeToRedAndBlue") {
                        firstBar.style.backgroundColor = "red";
                        secondBar.style.backgroundColor = "rgb(0, 174, 255)";
                    } else if (type === "ChangeToYellow") {
                        firstBar.style.backgroundColor = "yellow";
                        secondBar.style.backgroundColor = "yellow";
                    } else if (type === "ChangeToBlueAndGreen") {
                        firstBar.style.backgroundColor = "rgb(0, 174, 255)";
                        secondBar.style.backgroundColor = "green";
                    }
                }
                if (idx === animationsList.length - 1) {
                    sortingOver();
                    setCurrentlySorting(false);
                }
            }, ANIMATION_SPEED * idx);
        });
    }, [ANIMATION_SPEED, sortingOver]);

    const sort = useCallback((algorithmName, arrayToSort) => {
        var sortFunction;
        if (algorithmName === "Bubble") {
            sortFunction = bubbleSort;
        } else if (algorithmName === "Insertion") {
            sortFunction = insertionSort;
        } else if (algorithmName === "Selection") {
            sortFunction = selectionSort;
        } else if (algorithmName === "Merge") {
            sortFunction = mergeSort;
        } else if (algorithmName === "Quick") {
            sortFunction = quickSort;
        } else {
            sortFunction = heapSort;
        }
        const animationsList = sortFunction(arrayToSort);
        animate(animationsList);
    }, [animate])


    useEffect(() => {
        if (!currentlySorting && startSort) {
            sort(algorithmName, array);
            setCurrentlySorting(true);
        }
    }, [startSort, algorithmName, sort, array, currentlySorting]);

    return (
        <div className="container">
            {array.map((ele, idx) => {
                return <div
                    key={idx}
                    id={`bar-${idx}`}
                    className="bar"
                    style={{
                        height: `${ele}px`
                    }}
                >
                </div>
            })}
        </div>
    )
}