/*
    The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function myIncludes(searchElement, inputArr, fromIndex) {
    if (typeof fromIndex == "undefined") {
        fromIndex = 0;
    }
    for (let i = fromIndex; i < inputArr.length; i++) {
        if (inputArr[i] === searchElement) {
            return true;
        }
    }

    return false;
}

let target = 10;

const trueOrFalse = myIncludes(target, arr);

console.log(trueOrFalse);
