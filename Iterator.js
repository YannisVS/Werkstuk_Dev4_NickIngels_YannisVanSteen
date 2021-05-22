var Storeitems = [{
        name: "Mario Kart",
        price: "45.99"
    }, {
        name: "Mario Party",
        price: "59.99"
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
        name: "Mario Kart 2",
        price: "43.99"
    }, {
        name: "Sonic winter sports",
        price: "29.99"
    }, {
        name: "Sonic expansion summer sports",
        price: "19.99"
    }, {
        name: "Mario kart delux expansion",
        price: "9.99"
    }, {
        name: "wii sports bungie jump edition",
        price: "4.99"
    }, {
        name: "Sonic expansion atumn sports",
        price: "19.99"
    }, {
        name: "Zelda Link in trouble expansion",
        price: "39.99"
    }, {
        name: "Luigi's second mansion expansion",
        price: "19.99"
    }, {
        name: "Mario Party it continues expansion",
        price: "29.99"
    }

];

function makeStoreIterator(start, end, step, Array) {
    let nextIndex = start;
    let iterationCount = 0;

    const storeIterator = {
        next: function () {
            let result;

            if (nextIndex < end) {
                result = {
                    value: Array[nextIndex].price,
                    name: Array[nextIndex].name,
                    done: false
                };
                nextIndex += step;
                iterationCount++;
                return result;
            }
            return {
                value: iterationCount,
                done: true
            };
        }
    };
    return storeIterator;
}

const it = makeStoreIterator(0, Storeitems.length, 1, Storeitems);
let result = it.next();
let Totalprice = 0;
let TotalpriceExpansions = 0;
let TotalpriceGames = 0;
while (!result.done) {
    Totalprice += parseFloat(result.value);
    result = it.next();
}
console.log("Total price of the store: " + Totalprice);

console.log("Iterated over sequence of size: ", result.value);

const itGames = makeStoreIterator(0, 8, 1, Storeitems);
result = itGames.next();
while (!result.done) {
    TotalpriceGames += parseFloat(result.value);
    result = itGames.next();
}
console.log("Total price of the Games: " + TotalpriceGames);

console.log("Iterated over sequence of size: ", result.value);

const itExpansions = makeStoreIterator(8, Storeitems.length, 1, Storeitems);
result = itExpansions.next();
while (!result.done) {
    TotalpriceExpansions += parseFloat(result.value);
    result = itExpansions.next();
}
console.log("Total price of the expansions: " + TotalpriceExpansions);

console.log("Iterated over sequence of size: ", result.value);