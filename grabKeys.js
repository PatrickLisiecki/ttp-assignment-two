/*
    The Object.keys() static method returns an array of a given object's own enumerable string-keyed property names.
*/

const object = {
    a: 1,
    b: 2,
    c: 3,
};

function grabKeys(inputObject) {
    let keysArr = [];

    for (const key in inputObject) {
        keysArr.push(String(key));
    }

    return keysArr;
}

const keyArr = grabKeys(object);

for (let i = 0; i < keyArr.length; i++) {
    console.log(keyArr[i]);
}
