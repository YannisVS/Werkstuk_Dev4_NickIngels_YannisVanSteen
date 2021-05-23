var gamePrice = [49.95, 38.99, 27.49, 66.35, 78.32, 9.99, 18.36, 56.58, 45.99, 59.99, 59.49, 52.60, 50.33, 35.49, 34.50, 34.99, 23.99, 14.95, 74.99];



function swap(gamePrice, leftIndex, rightIndex) {
    var temp = gamePrice[leftIndex];
    gamePrice[leftIndex] = gamePrice[rightIndex];
    gamePrice[rightIndex] = temp;
}

function partition(gamePrice, left, right) {
    var pivot = gamePrice[Math.floor((right + left) / 2)],
        i = left,
        j = right;
    while (i <= j) {
        while (gamePrice[i] < pivot) {
            i++;
        }
        while (gamePrice[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(gamePrice, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(gamePrice, left, right) {
    var index;
    if (gamePrice.length > 1) {
        index = partition(gamePrice, left, right);
        if (left < index - 1) {
            quickSort(gamePrice, left, index - 1);
        }
        if (index < right) {
            quickSort(gamePrice, index, right);
        }
    }
    return gamePrice;
}

var sortedArray = quickSort(gamePrice, 0, gamePrice.length - 1);
console.log(sortedArray);