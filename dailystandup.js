// Monday 7/12/21
// You will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

// console.log(repeats([4,5,7,5,4,8]),15);
// console.log(repeats([9, 10, 19, 13, 19, 13]),19);
// console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11]),12);
// console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13]),22);
// console.log(repeats([5, 10, 19, 13, 10, 13]),24);

// ************SOLUTION************
const repeats = arr => arr.filter((num) => arr.indexOf(num) ===  arr.lastIndexOf(num)).reduce((a, b) => a + b, 0)
// console.log(repeats([4,5,7,5,4,8]),15);
// console.log(repeats([9, 10, 19, 13, 19, 13]),19);
// console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11]),12);
// console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13]),22);
// console.log(repeats([5, 10, 19, 13, 10, 13]),24);
// console.log(repeats([-1, 4, 3, 4, 5]))
// console.log(repeats([-1, 4, 4, -1, 5]))

// Tuesday 7/13
// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

// ************SOLUTION************
function removeConsecutiveDuplicates(str){
    let arr = str.split(' ')
    return arr.filter((word, idx) => word !== arr[idx + 1]).join(' ')
  }

//   console.log(noConsecutiveDupes("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"))
//   console.log(noConsecutiveDupes('dog cat cat dog giraffe bird bird'))
//   console.log(noConsecutiveDupes('spoon spoon fork fork knife spoon fork knife knife taco'))

// Wednesday 7/14

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
// ************SOLUTION************
function urlReplace(str){
    str = str.replace('http://', '')
    str = str.replace('https://', '')
    str = str.replace('www.', '')
    str = str.split('.')
    return str[0]
  }

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

//  7/15
 
// Given a string, return a new string that has transformed based on the input:
// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.
// For example:


// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.


// ********solution********* 
// 
function reverseCapAndOrder(str) {
  str = str.replace(/\s+/g, ' ')
  let capReverse = str.trim().split('').map(letter => letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase()).join('')
  return capReverse.split(' ').reverse().join(' ')
  
}

// Count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// From: https://www.codewars.com/kata/52efefcbcdf57161d4000091

// ********solution*********
str = str.toLowerCase()
  let charMap = {}
  for (let char of str) {
    if (charMap.hasOwnProperty(char)){
      charMap[char]++
    } else {
      charMap[char] = 1
    }
  }


  // 7/17
  // There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.
// ********solution*********
function findUniq(arr){
  return arr.filter(num => arr.indexOf(num) === arr.lastIndexOf(num))[0]
}

// console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2)
// console.log(findUniq([ 0, 0, 0.55, 0, 0 ]), 0.55)


// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.
// ********solution*********
function removeSmallest(arr){
  let arr2 = arr
  let smallest = Math.min(...arr2)
  let idx = arr2.indexOf(smallest)
  return [...arr2.slice(0, idx), ...arr2.slice(idx + 1)]
}

// console.log(removeSmallest([1,2,3,4,5])) //[2,3,4,5]
// console.log(removeSmallest([5,3,2,1,4])) //[5,3,2,4]
// console.log(removeSmallest([2,2,1,2,1])) //[2,2,2,1]

// 7/19
// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

// Test.assertEquals(high('man i need a taxi up to ubud'), 'taxi');
// Test.assertEquals(high('what time are we climbing up the volcano'), 'volcano'); 
// Test.assertEquals(high('take me to semynak'), 'semynak'); 
// *********solution************

function high(x){
  let alphabet = '0abcdefghijklmnopqrstuvwxyz'
  const score = word => word.split('').reduce((acc, current) => acc + alphabet.indexOf(current), 0)

  let highestScore = 0
  let highestScoringWord = ''

  x.split(' ').forEach(word => {
    if (highestScore < score(word)){
        highestScore = score(word)
        highestScoringWord = word
      }
    })
  return highestScoringWord
}

console.log(high('what time are we climbing up the volcano'), 'volcano')
