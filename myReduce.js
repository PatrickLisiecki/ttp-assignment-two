/*
    The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

    The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).
*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function myReduce(callbackFunc, inputArr, initialValue) {
    let startIndex = 0;
    let accumulator = 0;

    // If an initial value was not provided use the first element in the array
    if (typeof initialValue == "undefined") {
        accumulator = inputArr[0];
        startIndex = 1;
    } else {
        accumulator = initialValue;
    }

    for (let i = startIndex; i < inputArr.length; i++) {
        accumulator = callbackFunc(accumulator, inputArr[i], i, inputArr);
    }

    return accumulator;
}

function addNums(a, b) {
    return a + b;
}

const sumWithoutInitial = myReduce(addNums, arr);
const sumWithInitial = myReduce(addNums, arr, 1);

console.log(sumWithoutInitial);
console.log(sumWithInitial);
