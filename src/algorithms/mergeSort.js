function adjustArray(array, k, rep) {
    let temp = array[rep];
    for (var i = rep; i > k; i--) {
        array[i] = array[i - 1];
    }
    array[k] = temp;
}

function merge(array, l, m, r, animationsList) {
    var i, j, k;
    i = l;
    j = m + 1;
    k = l;
    while (i < j && j <= r) {
        animationsList.push([i, j, "ChangeToGreen"]);
        if (array[i] <= array[j]) {
            array[k] = array[i];
            animationsList.push([k, j, "ChangeToRedAndBlue"]);
            animationsList.push([k, k, "ChangeToBlue"]);
            i++;
        } else {
            animationsList.push([k, j, "ChangeToRed"]);
            adjustArray(array, k, j);
            animationsList.push([array.slice(), [k, j], "SetHeightAndChangeToRed"]);
            animationsList.push([k, k + 1, "ChangeToBlue"]);
            i++;
            j++;
        }
        animationsList.push([i, i, "ChangeToBlue"]);
        k++;
    }
}

function mergeSortHelper(array, l, r, animationsList) {
    if (l >= r) {
        return;
    }
    let m = Math.floor((l + r) / 2);
    mergeSortHelper(array, l, m, animationsList);
    mergeSortHelper(array, m + 1, r, animationsList);
    merge(array, l, m, r, animationsList);
}

export default function mergeSort(array) {
    var arrayCopy = array.slice();
    var animationsList = [];
    mergeSortHelper(arrayCopy, 0, arrayCopy.length - 1, animationsList);
    return animationsList;
}