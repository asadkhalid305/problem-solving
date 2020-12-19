'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

//version I did on first attempt - start
function diagonalDifference(arr) {
    // Write your code here
    let diagOne = 0, diagTwo = 0;
    arr.forEach((subArr, idx) => diagOne += sumDiagnol(subArr, idx))
    arr.slice().reverse().forEach((subArr, idx) => diagTwo += sumDiagnol(subArr, idx))
    return Math.abs(diagOne - diagTwo)
}

function sumDiagnol(arr, idx) {
    if(!arr[idx]) {
        return 0
    }
    return arr[idx]
}
//version I did on first attempt - end

//version I did after discussion - start
function diagonalDifference(arr) {
    // Write your code here
    const lastIndex = arr.length - 1
    let diagOne = 0, diagTwo = 0;
    for(let idx in arr) {
        diagOne += arr[idx][idx];
        diagTwo += arr[idx][lastIndex - idx]
    }
    return Math.abs(diagOne - diagTwo)
}
//version I did after discussion - end

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
