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


// 7/20
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes

// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!


function duplicateEncode(word){
  let encodeString = ""
  word = word.toLowerCase()
  word.split('').forEach((letter, i, arr) => {
    if(word.split(letter).length === 2){
      encodeString += '('
    } else if (word.split(letter).length > 2){
      encodeString += ')'
    }
  })

  return encodeString 
}

// 7/21
// In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.

// For example:

// solve([15,11,10,7,12]) = [15,7,12,10,11]
// The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.

// More examples in the test cases.

// Good luck!
// **********solution***********
function solve(arr){
  let arrLength = arr.length
    arr.sort((a, b)=> a - b)
    
    let answer = []
    
   for(let i=0; i<arrLength; i++){
      if(i%2===0){
        answer.push(arr.pop())
        
        
      } else {

      answer.push(arr.shift())
      
      }}
  
  return answer
};

// 7/22
// Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

// All inputs will be valid.

// Test.assertEquals(switcher(['24', '12', '23', '22', '4', '26', '9', '8']), 'codewars');
// Test.assertEquals(switcher(['25','7','8','4','14','23','8','25','23','29','16','16','4']), 'btswmdsbd kkw'); 
// Test.assertEquals(switcher(['4', '24']), 'wc'); 

// ********solution*********
function switcher(x){
  const letters = ' zyxwvutsrqponmlkjihgfedcba!? '
  return x.reduce((acc, cv) => acc += letters.charAt(cv), '')
  }


//   7/23
//   Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

// Test.assertSimilar(last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']);
// Test.assertSimilar(last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']); 
// Test.assertSimilar(last('take me to semynak'), ['take', 'me', 'semynak', 'to']); 

// ***********solution***********
function last(x){
  return x.split(' ').sort((a,b) => a.slice(-1) > b.slice(-1))
  }


//   7/26
//   Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// Test.assertDeepEquals(arrayDiff([], [4,5]), [], "a was [], b was [4,5]");
//     Test.assertDeepEquals(arrayDiff([3,4], [3]), [4], "a was [3,4], b was [3]");
//     Test.assertDeepEquals(arrayDiff([1,8,2], []), [1,8,2], "a was [1,8,2], b was []");
//     Test.assertDeepEquals(arrayDiff([1,2,3], [1,2]), [3], "a was [1,2,3], b was [1,2]")

// ******solution******
function arrayDiff(a,b){
  return a.filter((number) => !(b.includes(number)))
}

console.log(arrayDiff([], [4,5]), []);
console.log(arrayDiff([3,4], [3]), [4]);
console.log(arrayDiff([1,8,2], []), [1,8,2]);
console.log(arrayDiff([1,2,3], [1,2]), [3])