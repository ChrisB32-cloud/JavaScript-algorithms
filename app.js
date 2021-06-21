
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

const busStops = [[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]

function stopBusStations(busStops) {
    let hopOn = 0
    let hopOff = 0
    for (let i = 0; i < busStops.length; i++) {
        hopOn += busStops[i][0]
        hopOff += busStops[i][1]
    }
    const passengersLeft = hopOn - hopOff
    return passengersLeft <= 0 ? 0 : passengersLeft
}

stopBusStations(busStops);



// Move the first letter of each word to the end of it, then add "ay" to the 
// end of the word. Leave punctuation marks untouched.

const str = 'Pig latin is cool!'

function pigIt(str) {
    let punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
    const arrStr = str.split(' ')
    // console.log(arrStr)
    // **************************
    let puncCheck = arrStr.length - 1
    // console.log(arrStr)
    // console.log(puncCheck)
    // console.log(arrStr[puncCheck])
    // **************************
    // **************************

    // **************************
    let newArr = []
    for (let i = 0; i < arrStr.length; i++) {
        let getArrAlph = `${arrStr[i][0]}ay`;



        let removeFChar = arrStr[i].split('').slice(1, arrStr[i].length).join('');
        // let punctCharGrab = removeFChar.indexOf('!')
        // let punctCharGrab = removeFChar.indexOf('!')
        // let removePunc = arrStr[i].split('').slice(punctCharGrab, arrStr[i].length);

        // let joinChar = removeFChar.join('')
        let concatStr = `${removeFChar}${getArrAlph}`;
        // console.log(removeFChar)
        // console.log(punctCharGrab)
        // console.log(removePunc)
        // newArr.push(concatStr)
        // console.log(concatStr)
    }
    // console.log(newArr.join(' '))
    // return newArr.join(' ')
    // console.log(arrStr)
}

pigIt(str)



// function pigIt(str){
//     const arrStr = str.split(' ');
//     let newArr = [];
//       for(let i = 0; i < arrStr.length; i++) {
//         let getArrAlph = `${arrStr[i][0]}ay`;
//         let removeFChar = arrStr[i].split('').slice(1, arrStr[i].length).join('');
//         let concatStr = `${removeFChar}${getArrAlph}`;
//         newArr.push(concatStr);
//       }
//     return newArr.join(' ')
//   }


// Write a function, persistence, that takes in a positive parameter 
// num and returns its multiplicative persistence, which is the 
// number of times you must multiply the digits in num until you reach a single digit.

// For example:

// persistence(39) === 3 
// because 3*9 = 27, 2*7 = 14, 1*4=4
// and 4 has only one digit

// persistence(999) === 4 
// because 9*9*9 = 729, 7*2*9 = 126,
// 1*2*6 = 12, and finally 1*2 = 2

// persistence(4) === 0 
// because 4 is already a one-digit number

const num1 = 999

function persistence(num) {

    let count = 0
    // let calcPass = 0



    if (num1 >= 10) {
        let numArr = Array.from(num1.toString()).map(Number);
        let calcNum = 1
        // count = 1
        let scopeCount = 1
        for (let i = 0; i < numArr.length; i++) {
            calcNum = calcNum * numArr[i]
            scopeCount += i
            // count += i
            // console.log(numArr[i])
        }
        // scopeCount += 1

        count = scopeCount
        // calcPass = calcNum
        // console.log(scopeCount)
        // console.log(calcNum)
        // persistence(calcNum)
    }

    if (num1 >= 0 && num1 <= 9) {
        return count
        // console.log(count)
    }

    // return count

    // console.log(count)
    // console.log(calcPass)
}

persistence(num1)

// if (num >= 0 && num <= 9) {
//     // return 0
//     console.log(0)
//     return
// } else {
//     for (let i = 0; i < numArr.length; i++) {

//     }
// }
// This below works
// resourse 
// https://stackoverflow.com/questions/54755266/multiplicative-persistence-codewars-challenge
const num = 999

function persistence_1(num) {

    let numArr = num.toString().split('')
    let list
    let count = 0
    while (numArr.length > 1) {

        list = numArr.reduce((acc, curr) => {
            return acc *= curr
        })
        numArr = list.toString().split('')
        count++

    }

    return count
}

// persistence_1(num)


// The Fibonacci numbers are the numbers in the following integer sequence (Fn):

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

// such as

// F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

// Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

// F(n) * F(n+1) = prod.

// Your function productFib takes an integer (prod) and returns an array:

// [F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
// depending on the language if F(n) * F(n+1) = prod.

// If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prodyou will return

// [F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
// F(n) being the smallest one such as F(n) * F(n+1) > prod.

// Some Examples of Return:

// productFib(714) # should return (21, 34, true), 
//                 # since F(8) = 21, F(9) = 34 and 714 = 21 * 34

// productFib(800) # should return (34, 55, false), 
//                 # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
// -----
// productFib(714) # should return [21, 34, true], 
// productFib(800) # should return [34, 55, false], 
// -----
// productFib(714) # should return {21, 34, 1}, 
// productFib(800) # should return {34, 55, 0},        
// -----
// productFib(714) # should return {21, 34, true}, 
// productFib(800) # should return {34, 55, false},

const prod = 5895

function productFib(prod) {
    let arrFib = [];
    arrFib[0] = 0;
    arrFib[1] = 1;
    let count = 0
    let k = 1
    for (let i = 2; i <= 200; i++) {
        arrFib[i] = arrFib[i - 2] + arrFib[i - 1];
    }
    for (let j = 0; j <= 200; j++) {
        count = arrFib[j] * arrFib[k]
        if (count === prod) {
            return [arrFib[j], arrFib[k], true]
        }
        if (count > prod) {
            return [arrFib[j], arrFib[k], false]
        }
        k++
    }

    // console.log(newFibArr)
}

productFib(prod)

// count += i + j
        // arrFib.push(count)
        // j++

// arrFib.push(arrFib[i - 2] + arrFib[i - 1])
        // console.log(arrFib)