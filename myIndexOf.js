/*
    The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function myIndexOf(searchElement, inputArr, fromIndex) {
    if (typeof fromIndex == "undefined") {
        fromIndex = 0;
    }
    for (let i = fromIndex; i < inputArr.length; i++) {
        if (inputArr[i] === searchElement) {
            return i;
        }
    }

    return -1;
}

let target = 10;

let index = myIndexOf(target, arr);

console.log(index);
