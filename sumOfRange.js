function range(start, end, step = 1) {
    let newArr = [];
    let stepValue = step;

    if (start > end && stepValue < 0) {
        for (let i = start; i >= end; i += stepValue) {
            newArr.push(i);
        }
    } else if (start > end && stepValue > 0) {
        for (let i = start; i >= end; i -= stepValue) {
            newArr.push(i);
        }
    } else {
        for (let i = start; i <= end; i += stepValue) {
            newArr.push(i);
        }
    }

    return newArr;
}

function sum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

const start = 5,
    end = 2,
    step = -1;

console.log(sum(range(start, end, step)));
