/*
    The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenArr = [2, 4, 6, 8, 10];

function myEvery(callbackFunc, inputArr) {
    for (let i = 0; i < inputArr.length; i++) {
        if (callbackFunc(inputArr[i], i, inputArr) === false) {
            return false;
        }
    }

    return true;
}

function isEven(element, index, array) {
    return element % 2 == 0;
}

// const trueOrFalse = myEvery(isEven, arr);
const trueOrFalse = myEvery(isEven, evenArr);

console.log(trueOrFalse);
