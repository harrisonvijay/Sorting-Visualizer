export default function selectionSort(array) {
    var animationsList = [];
    var arrayCopy = array.slice();
    var n = arrayCopy.length;
    for (var i = 0; i < n - 1; i++) {
        let minIdx = i;
        for (var j = i + 1; j < n; j++) {
            animationsList.push([j, minIdx, "ChangeToGreen"]);
            animationsList.push([j, minIdx, "ChangeToBlue"]);
            if (arrayCopy[j] < arrayCopy[minIdx]) {
                minIdx = j;
            }
        }
        let temp = arrayCopy[minIdx];
        arrayCopy[minIdx] = arrayCopy[i];
        arrayCopy[i] = temp;
        animationsList.push([i, minIdx, "ChangeToRed"]);
        animationsList.push([arrayCopy.slice(), "", "SetHeight"]);
        animationsList.push([i, minIdx, "ChangeToBlue"]);
    }
    return animationsList;
}