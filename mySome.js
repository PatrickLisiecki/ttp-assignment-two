/*
    The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddArr = [1, 3, 5, 7, 9];

function mySome(callbackFunc, inputArr) {
    for (let i = 0; i < inputArr.length; i++) {
        if (callbackFunc(inputArr[i], i, inputArr) === true) {
            return true;
        }
    }

    return false;
}

function isEven(element, index, array) {
    return element % 2 == 0;
}

// const trueOrFalse = mySome(isEven, arr);
const trueOrFalse = mySome(isEven, oddArr);

console.log(trueOrFalse);
