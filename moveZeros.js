/*
    Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

    Example:

    Input: [0,1,0,3,12]
    Output: [1,3,12,0,0]

    Note: You must do this in-place without making a copy of the array.
*/

const zerosArr = [0, 1, 0, 3, 12];

function moveZeros(arr) {
    let indexArr = [];

    // Keep track of the indexes of all zeros
    // The setback accounts for the updated indexes of the zeros after each zero is moved
    let currentSetback = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            indexArr.push(i - currentSetback);
            currentSetback++;
        }
    }

    // console.log(indexArr);

    for (let i = 0; i < indexArr.length; i++) {
        // Add the zero to the end of the array
        arr.push(arr[indexArr[i]]);

        // Remove the zero from its original position
        arr.splice(indexArr[i], 1);
    }
}

console.log(zerosArr);

moveZeros(zerosArr);

console.log(zerosArr);
