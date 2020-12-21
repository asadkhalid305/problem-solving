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

// Complete the plusMinus function below.
function plusMinus(arr) {
    //return if 'n' constraint does not match
    if(arr.length <= 0 || arr.length > 100) {
        return
    }
    //here index coding scheme is as follow: 
    //0 index -> positive number, 
    //1 index -> negative number, and
    //2 index -> zero number
    let sumOfTypesOfNumber = new Array(3).fill(0)
    for(let number of arr) {
        if(number < -100 || number > 100) continue
        if(number > 0) sumOfTypesOfNumber[0]++
        else if(number < 0) sumOfTypesOfNumber[1]++
        else sumOfTypesOfNumber[2]++
    }
    for(let number of sumOfTypesOfNumber) {
        let ratio = number/arr.length
        console.log(ratio.toFixed(6))
    }
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
