function reverseArray(arr) {
    let reversedArray = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }

    return reversedArray;
}

function reverseArrayInPlace(arr) {
    // Loop over half of the array switching elements up until the midpoint
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        let swap = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = swap;
    }
}

const arr = [1, 2, 3, 4, 5];

// console.log(reverseArray(["A", "B", "C"]));
console.log(reverseArray(arr));

reverseArrayInPlace(arr);
console.log(arr);
