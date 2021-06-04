
// Last word length algorithum

let s = 'a '

function lengthOfLastWord(s) {
    if (s === '') {
        return 0
    }

    let trimWord = s.trim()
    let splitWord = trimWord.split(' ')
    let arrLength = splitWord[splitWord.length - 1]
    let wordLength = arrLength.length

    return wordLength
};

// Single number algorithum

let nums = [4, 1, 2, 1, 2]

function singleNumber(nums) {



    for (let i = 0; i < nums.length; i++) {
        // if (nums[j] === nums[i]) {
        //     i++
        // }
        for (let j = 0; j < nums.lenght; j++) {
            if (nums[j] !== nums[i]) {
                // console.log(nums[i])
            }
        }
    }



}

// *********************************************************
// *********************************************************
// *********************************************************
// *********************************************************
// CODEWARS
// duplicateEncode in progress

function duplicateEncode(word) {
    const splWord = word.split('')
    for (let i = 0; i < splWord.length; i++) {
        let count = 0
        for (let j = 0; j < splWord.length; j++) {
            console.log(splWord[i])
        }
    }
}

// duplicateEncode('hello')

// ***************************************************
// Determine if the number has a perfect square root

function isSquare(n) {
    const squareNum = Math.sqrt(n)
    if (n % squareNum === 0) {
        return true
    }
    if (n === 0) {
        return true
    }
    else {
        return false
    }

}

// *****************************************************
// Return the sum of the two lowest integers in an array

const numbers = [19, 5, 42, 2, 77];

function sumTwoSmallestNumbers(numbers) {
    const sortNum = numbers.sort((a, b) => {
        return a - b
    })
    // const firstIdx = sortNum[0]
    // const secondIdx = sortNum[1]
    // return firstIdx + secondIdx
    // Less lines of code below
    return sortNum[0] + sortNum[1]
}

// sumTwoSmallestNumbers(numbers)


// *********************************************************
// Given three inputs, return true if a triangle can be built
// with the sides of the given lengths return false if not

const a = 1
const b = 2
const c = 2

function isTriangle(a, b, c) {

    return a + b > c && a + c > b && c + b > a ? true : false
}
// if (a + b > c && a + c > b && c + b > a) {
//     return true
// } else {
//     return false
// }

isTriangle(a, b, c)


// *********************************************************
// A Narcissistic number is a positive number which is the sum of its own 
// digits, each raised to the power of the number of digits 
// in a given base. In this Kata, we will restrict 
// ourselves to decimal (base 10).

// The code must return true or false depending upon whether the 
// given number is a Narcissistic number in base 10.

// Error checking for text strings or other invalid inputs 
// is not required, only valid positive non-zero integers will 
// be passed into the function.

const value = 153

function narcissistic(value) {
    let count = 0
    const splitValue = Array.from(value.toString()).map(Number);
    const lenghtValue = splitValue.length
    const loopValue = splitValue.map(num => num ** lenghtValue)
    loopValue.forEach(n => count += n)
    return value === count ? true : false
}

narcissistic(value)


// PLAYING WITH DIGITS
// Some numbers have funny properties. For example:

// 89 --> 8¹ + 9² = 89 * 1

// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

// Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

// we want to find a positive integer k, if it exists, such as the sum of the digits of n taken to the successive powers of p is equal to k * n.
// In other words:

// Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

// If it is the case we will return k, if not return -1.

// Note: n and p will always be given as strictly positive integers.

// digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
// digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
// digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
// digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

function digPow(n, p) {
    const arrayOfN = Array.from(n.toString()).map(Number);
    let sum = 0
    for (let i = 0; i < arrayOfN.length; i++) {
        sum += arrayOfN[i] ** (p + i)
    }
    const kValue = sum / n
    const res = (kValue - Math.floor(kValue)) !== 0;
    return res === false ? kValue : -1;
}

digPow(46288, 3)

// There is a bus moving in the city, and it takes and drop some people in each bus stop.

// You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two items which represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

// Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

// The second value in the first integer array is 0, since the bus is empty in the first bus stop.

