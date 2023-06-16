// Input arrays for testing functions
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var evenArr = [2, 4, 6, 8, 10];

// Function 1: forEach()
function myEach(inputArr, callbackFunc) {
    for (let i = 0; i < inputArr.length; i++) {
        callbackFunc(inputArr[i], i, inputArr);
    }
}

function printElement(element, index, array) {
    console.log(element);
}

myEach(arr, printElement);

// Function 2: map()
function myMap(inputArr, callbackFunc) {
    let newArr = [];

    for (let i = 0; i < inputArr.length; i++) {
        newArr.push(callbackFunc(inputArr[i], i, inputArr));
    }

    return newArr;
}

function double(element, index, array) {
    return element * 2;
}

var mapArr = myMap(arr, double);

console.log(mapArr);

// Function 3: filter()
function myFilter(inputArr, callbackFunc) {
    var newArr = [];

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

var filterArr = myFilter(arr, checkNum);
console.log(filterArr);

// Function 4: some()
function mySome(inputArr, callbackFunc) {
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

console.log(mySome(arr, isEven));

// Function 5: every()
function myEvery(inputArr, callbackFunc) {
    for (let i = 0; i < inputArr.length; i++) {
        if (callbackFunc(inputArr[i], i, inputArr) === false) {
            return false;
        }
    }

    return true;
}

console.log(myEvery(evenArr, isEven));

// Function 6: reduce()
function myReduce(inputArr, callbackFunc, initialValue) {
    if (initialValue == false) {
        initialValue = inputArr[0];
        for (let i = 1; i < inputArr.length; i++) {
            callbackFunc;
        }
    }

    return true;
}

// Function 7: includes()
function myIncludes(inputArr, target) {
    for (let i = 0; i < inputArr.length; i++) {
        if (inputArr[i] === target) {
            return true;
        }
    }

    return false;
}

console.log(myIncludes(arr, 11));

// Function 8: indexOf()
function myIndexOf(inputArr, target) {
    for (let i = 0; i < inputArr.length; i++) {
        if (inputArr[i] === target) {
            return i;
        }
    }

    return false;
}

console.log(myIndexOf(arr, 10));

// Function 9: push()
function myPush(inputArr, elementToAdd) {
    inputArr[inputArr.length] = elementToAdd;
}

myPush(arr, 10);
console.log(arr);

// Function 10: lastIndexOf()
function myLastIndexOf(inputArr, target) {
    let lastIndex = -1;

    for (let i = 0; i < inputArr.length; i++) {
        if (inputArr[i] === target) {
            lastIndex = i;
        }
    }

    return lastIndex;
}

console.log(myLastIndexOf(arr, 10));

// Function 11: Object.keys()
function grabKeys(inputObject) {
    var keysArr = [];

    for (const key in inputObject) {
        myPush(keysArr, key);
    }

    return keysArr;
}

const object = { a: 1, b: 2, c: 3 };

console.log(grabKeys(object));

// Function 12: Object.values()
function grabValues(inputObject) {
    var valuesArr = [];

    for (const key in inputObject) {
        myPush(valuesArr, inputObject[key]);
    }

    return valuesArr;
}

console.log(grabValues(object));
