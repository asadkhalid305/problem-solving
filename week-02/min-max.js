'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    let maxSum = 0, minSum = 0
    for(let i = 0; i < arr.length; i++) {
        let sum = 0
        //iterate 1 less than the size of the given array
        for(let j = i; j < arr.length + i - 1; j++) {
            //if j gets equal to last index of array then start it from 0 index
            const index = j % arr.length
            //calculate sum of current iteration
            sum += arr[index]
        }
        //if it's first iteration then just simply add sum to min and max sum and                continue
        if(i === 0) {
            maxSum = sum
            minSum = sum
            continue
        }
        //if current is sum is greater than previous max sum then replace it with max            sum value
        if(sum > maxSum) maxSum = sum
        //if current is sum is less than previous min sum then replace it with min sum           value
        if(sum < minSum) minSum = sum
    }
    console.log(`${minSum} ${maxSum}`)
}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
