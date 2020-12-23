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

// Complete the staircase function below.
function staircase(n) {
    //method 1
    // for(let i = 0; i < n; i++) {
    //     let output = ''
    //     for(let j = 0; j < n - i - 1; j++) {
    //         output += ' '
    //     }    
    //     for(let k = n-i-1; k < n; k++) {
    //         output += '#'
    //     }
    //     console.log(output)
    // }

    //method 2
    for(let i = 1; i <= n; i++) {
        let output = ''
        for(let j = 0; j < n; j++) {
            if(j < n - i) output += ' '
            else output += '#'
        }    
        console.log(output)
    }
    
    //method 3 (found on internet)
    // for (let i = 1; i <= n; i++) {
    //     // print out a " " n-i times and append a # i times
    //     // console log adds a new line by default
    //       console.log(" ".repeat(n-i) + "#".repeat(i))
    // }  
}

function main() {
    const n = parseInt(readLine(), 10);

    staircase(n);
}
