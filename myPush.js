/*
    The push() method adds the specified elements to the end of an array and returns the new length of the array.
*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function myPush(inputArr, elementsToAdd) {
    inputArr[inputArr.length] = elementsToAdd;

    return inputArr.length;
}

myPush(arr, 11);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
