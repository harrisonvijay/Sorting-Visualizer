export default function insertionSort(array) {
    var animationsList = [];
    var arrayCopy = array.slice();
    var n = arrayCopy.length;
    for (var i = 1; i < n; i++) {
        var j = i - 1;
        while (j >= 0) {
            animationsList.push([j, j + 1, "ChangeToGreen"]);
            if (arrayCopy[j] > arrayCopy[j + 1]) {
                let temp = arrayCopy[j];
                arrayCopy[j] = arrayCopy[j + 1];
                arrayCopy[j + 1] = temp;
                animationsList.push([j, j + 1, "ChangeToRed"]);
                animationsList.push([arrayCopy.slice(), "", "SetHeight"]);
                animationsList.push([j, j + 1, "ChangeToBlue"]);
                j--;
            } else {
                animationsList.push([j, j + 1, "ChangeToBlue"]);
                break;
            }
        }
    }
    return animationsList;
}