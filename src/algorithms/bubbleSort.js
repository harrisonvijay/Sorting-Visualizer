export default function bubbleSort(array) {
    var animationsList = [];
    var arrayCopy = array.slice();
    var n = arrayCopy.length;
    for (var i = 0; i < n - 1; i++) {
        var flag = false;
        for (var j = 1; j < n - i; j++) {
            animationsList.push([j - 1, j, "ChangeToGreen"]);
            if (arrayCopy[j - 1] > arrayCopy[j]) {
                flag = true;
                animationsList.push([j - 1, j, "ChangeToRed"]);
                let temp = arrayCopy[j - 1];
                arrayCopy[j - 1] = arrayCopy[j];
                arrayCopy[j] = temp;
                animationsList.push([arrayCopy.slice(), "", "SetHeight"]);
            }
            animationsList.push([j - 1, j, "ChangeToBlue"]);
        }
        if (!flag) {
            break;
        }
    }
    return animationsList;
}