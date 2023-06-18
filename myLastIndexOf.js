/*
    The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1];

function myIndexOf(searchElement, inputArr, fromIndex) {
    let lastIndex = -1;

    if (typeof fromIndex == "undefined") {
        fromIndex = 0;
    }
    for (let i = fromIndex; i < inputArr.length; i++) {
        if (inputArr[i] === searchElement) {
            lastIndex = i;
        }
    }

    return lastIndex;
}

let target = 1;

let lastIndex = myIndexOf(target, arr);

console.log(lastIndex);
