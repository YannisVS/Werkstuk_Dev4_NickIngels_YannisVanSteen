// Dit is de file waarin het sorting algoritme geschreven wordt!

let games = [{
    name: "Mario Kart",
    price: "45.99"
}, {
    name: "Legend of Zelda",
    price: "55.49"
}, {
    name: "Luigi's Mansion",
    price: "65.99"
}, {
    name: "Wii Sports",
    price: "69.99"
}, {
    name: "Switch the game",
    price: "34.99"
}, {
    name: "Mario Kart",
    price: "43.99"
}, {
    name: "Sonic winter sports",
    price: "29.99"
}, {
    name: "Mario Party",
    price: "59.99"
}, {
    name: "Lightning McQueen",
    price: "59.99"
}, {
    name: "Queen's Game",
    price: "9.99"
}, {
    name: "Alphabet for kids",
    price: "9.99"
}];


console.log(games);

function swap(games, leftIndex, rightIndex) {
    var temp = games[leftIndex];
    games[leftIndex] = games[rightIndex];
    games[rightIndex] = temp;
}

function partition(games, left, right) {
    var pivot = games[Math.floor((right + left) / 2)],
        i = left,
        j = right;
    while (i <= j) {
        while (games[i] < pivot) {
            console.log("i: " + i);
            i++;
        }
        while (games[j] > pivot) {
            console.log("j: " + j);
            j--;
        }
        if (games[i] <= games[j]) {
            console.log("i");
            console.log(games[i].price);
            console.log("j");
            console.log(games[j].price);
            swap(games, i, j);
            i++;
            j--;
        } else if (games[i] >= games[j]) {
            swap(games, i, j);
            i--;
            j++;
        }
    }
    return i;
}

function quickSort(games, left, right) {
    var index;
    if (games.length > 1) {
        index = partition(games, left, right);
        if (left < index - 1) {
            quickSort(games, left, index - 1);
        }
        if (index < right) {
            quickSort(games, index, right);
        }
    }
    return games;
}

var sortedArray = quickSort(games, 0, games.length - 1);
console.log(sortedArray);