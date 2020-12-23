'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let timeIn12HourFormat = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    timeIn12HourFormat += inputStdin;
});

process.stdin.on('end', _ => {
    timeIn12HourFormat = timeIn12HourFormat.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return timeIn12HourFormat[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    const timeIn12HourFormat = s
    //check if given time is AM or not
    const isAm = timeIn12HourFormat.substr(8, 2) === ('AM' || 'am')
    const regex = /AM|PM|am|pm/
    //remove AM/PM from 12 hour time format
    let timeIn24HourFormat = timeIn12HourFormat.replace(regex, '')
    //split 12 hour time format by ":" to get hours, minutes and seconds in an array
    let hourMinuteSecond = timeIn24HourFormat.split(':')
    //take modulus of hour i.e. if hour is 12 or 24, replace it with 0
    hourMinuteSecond[0] = parseInt(hourMinuteSecond[0]) % 12
    //if 12 hour time format didn't have AM in it then add 12 into hour to get 24 hour time format
    if(!isAm) {
        hourMinuteSecond[0] = hourMinuteSecond[0] + 12
    }
    //if 12 hour time format did have AM in it then current hour is already in 24 hour time format
    hourMinuteSecond[0] = hourMinuteSecond[0].toString()
    //making the string in required format e.g. 01:24:40
    if(hourMinuteSecond[0] < 10) {
        hourMinuteSecond[0] = '0' + hourMinuteSecond[0]
    }
    //combined the array to get final required string
    timeIn24HourFormat = hourMinuteSecond.join(':')
    return timeIn24HourFormat
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
