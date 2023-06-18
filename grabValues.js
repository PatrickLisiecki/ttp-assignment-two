/*
    The Object.values() static method returns an array of a given object's own enumerable string-keyed property values.
*/

// const object = { a: 1, b: 2, c: 3 };
const object = {
    a: "somestring",
    b: 42,
    c: false,
};

function grabValues(inputObject) {
    let valuesArr = [];

    for (const key in inputObject) {
        valuesArr.push(inputObject[key]);
    }

    return valuesArr;
}

const valueArr = grabValues(object);

for (let i = 0; i < valueArr.length; i++) {
    console.log(valueArr[i]);
}
