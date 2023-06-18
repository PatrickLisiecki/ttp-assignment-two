/*
    The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function myFilter(callbackFunc, inputArr) {
    let newArr = [];

    for (let i = 0; i < inputArr.length; i++) {
        if (callbackFunc(inputArr[i], i, inputArr)) {
            newArr.push(inputArr[i]);
        }
    }

    return newArr;
}

function checkNum(element, index, array) {
    if (element < 6) {
        return true;
    } else {
        return false;
    }
}

var filterArr = myFilter(checkNum, arr);

for (let i = 0; i < filterArr.length; i++) {
    console.log(filterArr[i]);
}
