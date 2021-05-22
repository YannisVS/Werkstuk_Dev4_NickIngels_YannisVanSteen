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
    name: "Mario Kart",
    price: "43.99"
}, {
    name: "Sonic winter sports",
    price: "29.99"
}];

function makeStoreIterator(start, end, step, Array) {
    let nextIndex = start;
    let iterationCount = 0;

    const storeIterator = {
        next: function () {
            let result;

            if (nextIndex < end) {
                result = {
                    value: Array,
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
while (!result.done) {
    console.log(result.value);
    result = it.next();
}
console.log(Totalprice);

console.log("Iterated over sequence of size: ", result.value);