const reverseNumber = (number) => {
    //return original number if single character
    if (number > -10 && number < 10) {
        return number
    }
    //set status if number is negative and take the absolute value of number
    let isNumNegative = false
    if (number <= -10) {
        isNumNegative = true
        number = Math.abs(number)
    }
    //reverse the number
    let reverseNumber = 0
    while (number > 0) {
        reverseNumber = reverseNumber * 10 + number % 10
        number = parseInt(number / 10)
    }
    //if number was negative then return with (-) sign
    return isNumNegative ?  reverseNumber * -1 : reverseNumber
}

module.exports = {
    reverseNumber
}