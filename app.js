
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

// ****************************

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
//     "the-stealth-warrior" gets converted to "theStealthWarrior"
//     "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

const str_1 = "the-stealth-warrior";

function toCamelCase(str_1) {
    let regex = /_|-|,/g;
    const newStrA = str_1.replace(regex, ' ')
    const arrString = newStrA.split(' ')
    let pushStr = []
    for (let i = 0; i < arrString.length; i++) {
        let splitString = arrString[i].split('')
        let upperCase = [arrString[i][0].toUpperCase()]
        splitString.shift()
        let concatStr = upperCase.concat(splitString)
        let joinStr = concatStr.join('')
        pushStr.push(joinStr)
        // console.log(joinStr)
    }
    // console.log(pushStr.join(''))
    return pushStr.join('')
}

toCamelCase(str_1)


// ARRAY DIFF

// Your goal in this kata is to implement a difference function, which 
// subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in 
// list b keeping their order.

const a1 = [1, 2, 3];
const b1 = [2, 3];

function arrayDiff(a1, b1) {
    let j = 0
    let matchArr = []

    if (a1 === []) {
        return (a1, b1, a1, `a was [${a1}], b was [${b1}]`)
    }
    if (b1 === []) {
        return (a1, b1, b1, `a was [${a1}], b was [${b1}]`)
    }

    for (let i = 0; i < a1.length; i++) {
        if (a1[i] === b1[j]) {
            // console.log(a1[i])
            // matchArr.push(a1[i])
            let indOf = a1.indexOf(a1[i])
            a1.splice(indOf, 1)
            console.log(indOf)
            j++
        }
    }
    // return (a1, b1, matchArr, `a was [${a1}], b was [${b1}]`)
    // console.log(a1, b1, `a was [${a1}], b was [${b1}]`)
    // console.log(a1)
}

// arrayDiff(a1, b1)



// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result 
// in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. 
// Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

function rgbToHex(hex) {
    if (hex < 0) {
        hex = 0
    }
    if (hex > 255) {
        hex = 255
    }
    let hexString = hex.toString(16);
    return hex.lenght === 1 ? "0" + hexString : hexString;
}

function rgbFunc(r, g, b) {
    // complete this function  

    // console.log(rgbToHex(r) + rgbToHex(g) + rgbToHex(b))
    // if (rgbToHex(r) + rgbToHex(g) + rgbToHex(b) === '000') {
    //     return "#" + '000000'
    // } else {
    //     return "#" + rgbToHex(r) + rgbToHex(g) + rgbToHex(b);
    // }
    return "#" + rgbToHex(r) + rgbToHex(g) + rgbToHex(b);

}


// rgbFunc(255, 255, 255)


// You probably know the "like" system from Facebook and other pages. 
// People can "like" blog posts, pictures or other items. We want to create the 
// text that should be displayed next to such an item.

// Implement a function likes :: [String] -> String, which must take in input 
// array, containing the names of people who like an item. It must return the display 
// text as shown in the examples:

// Array of names
const names = ["Jacob", "Alex", "Clark", "Quint", "Bill"]

function likes(names) {
    // TODO

    // Checking if names array is empty
    if (names.length === 0) {
        return 'no one likes this'
    }
    // Checking if names array has atleast one name
    if (names.length - 1 === 0) {
        return `${names[0]} likes this`;
    }
    // Checking if names array has two name
    if (names.length - 1 === 1) {
        return `${names[0]} and ${names[1]} like this`;
    }
    // Checking if names array has atleast three name
    if (names.length - 1 === 2) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    }
    // Checking if names array has more than three names, if so
    // showing the first two then showing how many others like the post
    if (names.length - 1 > 2) {
        let count = 0
        for (let i = 0; i < names.length; i++) {
            count += 1
        }
        return `${names[0]}, ${names[1]} and ${count - 2} others like this`
    }
}

// Calling likes function
likes(names)


// What is an anagram? Well, two words are anagrams of each other if they both contain the 
// same letters. For example:
// Write a function that will find all the anagrams of a word from a list. You will be 
// given two inputs a word and an array with words. You should return an 
// array of all the anagrams or an empty array if there are none. For example:

const word = 'racer'
const words = ['crazer', 'carer', 'racar', 'caers', 'racer']

function anagrams(word, words) {
    let anagramCount = []
    const wordLength = word.split('')
    for (let i = 0; i < words.length; i++) {
        const splitWord = words[i].split('')
        // console.log(splitWord)
        if (wordLength.lenght === splitWord.lenght) {

        }
        // console.log(words[i])
    }
    // console.log(wordLength)
}

// anagrams(word, words) 


// It's the academic year's end, fateful moment of your school report.The averages 
// must be calculated.All the students come to you and entreat you to 
// calculate their average for them.Easy! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

const marks = [1, 2, 3, 4, 5,]

function getAverage(marks) {
    //TODO : calculate the downward rounded average of the marks array
    // console.log(marks)
    let markCounter = 0
    for (let i = 0; i < marks.length; i++) {
        markCounter += marks[i]
    }
    return Math.floor(markCounter / marks.length)
}

getAverage(marks)



// Return an array containing the numbers from 1 to N, where N 
// is the parametered value.

// Replace certain values however if any of the following 
// conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

// Method calling example:

let n = 30

function fizzbuzz(n) {

    let arrayCount = []

    for (var i = 1; i <= n; i++) {
        var result = "";
        if (i % 3 === 0) result += "Fizz";
        if (i % 5 === 0) result += "Buzz";
        arrayCount.push(result || i)
    }

    // console.log(arrayCount)
    return arrayCount
}

fizzbuzz(n)