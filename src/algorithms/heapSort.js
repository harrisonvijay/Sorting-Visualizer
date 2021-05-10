class MaxHeap {

    //heapify version
    constructor(array, animationsList) {
        this.list = this.heapify(array.slice(), animationsList);
        this.size = this.list.length;
    }

    heapify(array, animationsList) {
        var n = array.length;
        for (var i = n - 1; i >= 0; i--) {
            var curr = i;
            var lChild = 2 * curr + 1;
            var rChild = 2 * curr + 2;
            while (lChild < n) {
                var elementToReplaceWith = lChild;
                if (rChild < n) {
                    animationsList.push([lChild, rChild, "ChangeToGreen"]);
                    animationsList.push([lChild, rChild, "ChangeToBlue"]);
                }
                if (rChild < n && array[rChild] > array[lChild]) {
                    elementToReplaceWith = rChild;
                }
                animationsList.push([elementToReplaceWith, curr, "ChangeToGreen"]);
                if (array[elementToReplaceWith] > array[curr]) {
                    animationsList.push([elementToReplaceWith, curr, "ChangeToRed"]);
                    let temp = array[elementToReplaceWith];
                    array[elementToReplaceWith] = array[curr];
                    array[curr] = temp;
                    animationsList.push([array.slice(), "", "SetHeight"]);
                    animationsList.push([elementToReplaceWith, curr, "ChangeToBlue"]);
                    curr = elementToReplaceWith;
                    lChild = 2 * curr + 1;
                    rChild = 2 * curr + 2;
                } else {
                    animationsList.push([elementToReplaceWith, curr, "ChangeToBlue"]);
                    break;
                }
            }
        }
        return array;
    }

    removeMax(animationsList) {
        if (this.size === 0) {
            return -1;
        }
        this.size--;
        animationsList.push([0, this.size, "ChangeToRed"]);
        var returnElement = this.list[0];
        this.list[0] = this.list[this.size];
        this.list[this.size] = returnElement;
        animationsList.push([this.list.slice(), "", "SetHeight"]);
        animationsList.push([0, this.size, "ChangeToBlue"]);
        var curr = 0, lChild, rChild;
        lChild = 2 * curr + 1;
        rChild = 2 * curr + 2;
        while (lChild < this.size) {
            var elementToReplaceWith = lChild;
            if (rChild < this.size) {
                animationsList.push([lChild, rChild, "ChangeToGreen"]);
                animationsList.push([lChild, rChild, "ChangeToBlue"]);
            }
            if (rChild < this.size && this.list[rChild] > this.list[lChild]) {
                elementToReplaceWith = rChild;
            }
            animationsList.push([elementToReplaceWith, curr, "ChangeToGreen"]);
            if (this.list[elementToReplaceWith] > this.list[curr]) {
                animationsList.push([elementToReplaceWith, curr, "ChangeToRed"]);
                let temp = this.list[elementToReplaceWith];
                this.list[elementToReplaceWith] = this.list[curr];
                this.list[curr] = temp;
                animationsList.push([this.list.slice(), "", "SetHeight"]);
                animationsList.push([elementToReplaceWith, curr, "ChangeToBlue"]);
                curr = elementToReplaceWith;
                lChild = 2 * curr + 1;
                rChild = 2 * curr + 2;
            } else {
                animationsList.push([elementToReplaceWith, curr, "ChangeToBlue"]);
                break;
            }
        }
        return returnElement;
    }
};

export default function heapSort(array) {
    var arrayCopy = array.slice();
    var animationsList = [];
    var heap = new MaxHeap(arrayCopy, animationsList);
    for (var i = 0; i < arrayCopy.length; i++) {
        heap.removeMax(animationsList);
    }
    return animationsList;
}