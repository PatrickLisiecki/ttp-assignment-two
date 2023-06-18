/*
    The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function myMap(callbackFunc, inputArr) {
    let newArr = [];

    for (let i = 0; i < inputArr.length; i++) {
        newArr.push(callbackFunc(inputArr[i], i, inputArr));
    }

    return newArr;
}

function double(element, index, array) {
    return element * 2;
}

const mapArr = myMap(double, arr);

for (let i = 0; i < mapArr.length; i++) {
    console.log(mapArr[i]);
}
