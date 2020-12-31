const { reverseNumber } = require('../services/utilFunctions');

//i -> start day (inclusive)
//j -> end day (inclusive)
//k -> divisor
function beautifulDays(i, j, k) {
    let beautifulDaysCount = 0
    for (let day = i; day <= j; day++) {
        //by checking modulus if the remainder is 0
        // const isDayDivisibleByk = Math.abs(day - reverseNumber(day)) % k === 0
        //by checking if remainder is integer (actual problem)
        const isDayDivisibleByk = Number.isInteger(Math.abs(day - reverseNumber(day)) / k)
        if (isDayDivisibleByk) {
            beautifulDaysCount++
            continue
        }
    }
    return beautifulDaysCount
}

console.log(beautifulDays(20, 23, 6))