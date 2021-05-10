function partitionFunction(array, left, right, animationsList) {
    var pivot = array[right];
    animationsList.push([right, right, "ChangeToYellow"]);
    var pIndex = left;
    animationsList.push([pIndex, pIndex, "ChangeToGreen"]);
    for (var i = left; i < right; i++) {
        animationsList.push([pIndex, i, "ChangeToGreen"]);
        if (array[i] <= pivot) {
            animationsList.push([i, pIndex, "ChangeToRed"]);
            let temp = array[i];
            array[i] = array[pIndex];
            array[pIndex] = temp;
            animationsList.push([array.slice(), "", "SetHeight"]);
            animationsList.push([i, pIndex, "ChangeToBlue"]);
            pIndex++;
        } else {
            animationsList.push([i, i, "ChangeToBlue"]);
        }
    }
    //swapping with the pivot
    animationsList.push([pIndex, right, "ChangeToRed"]);
    let temp = array[pIndex];
    array[pIndex] = array[right];
    array[right] = temp;
    animationsList.push([array.slice(), "", "SetHeight"]);
    animationsList.push([pIndex, right, "ChangeToBlue"]);
    return pIndex;
}

function quickSortHelper(array, left, right, animationsList) {
    if (left >= right) {
        return;
    }
    var pivot = partitionFunction(array, left, right, animationsList);
    quickSortHelper(array, left, pivot - 1, animationsList);
    quickSortHelper(array, pivot + 1, right, animationsList);
}

export default function quickSort(array) {
    var arrayCopy = array.slice();
    var animationsList = [];
    quickSortHelper(arrayCopy, 0, arrayCopy.length - 1, animationsList);
    return animationsList;
}