/*
    The forEach() method executes a provided function once for each array element.
*/

const arr = [1, 2, 3, 4, 5, 6, 7, , 8, 9, 10];

function myEach(callbackFunc, inputArr) {
    for (let i = 0; i < inputArr.length; i++) {
        // Callback function is not executed for missing values
        if (typeof inputArr[i] == "undefined") {
            continue;
        }
        callbackFunc(inputArr[i], i, inputArr);
    }
}

// printElement = element => console.log(element)

function printElement(element, index, array) {
    console.log(element);
}

myEach(printElement, arr);
