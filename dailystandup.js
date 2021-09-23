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

7/27
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// assert.deepEqual(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
// assert.deepEqual(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);

// ****solution****

function sortArray(array) {
  let oddNums = array.filter(num => num%2).sort((a,b) => a-b)
  return array.map(num => num%2 ? oddNums.shift() : num)
}

// 7/28
// The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age, oldest age].

// The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

// For example:

// twoOldestAges( [1, 2, 10, 8] ) // should return [8, 10]

// *******solution********

function twoOldestAges(ages){

  return ages.sort((a,b) => a-b).slice(-2)
}

// 7/29
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

// ******solution******

var capitals = function (word) {
	// let caps = []
  // for(let i = 0; i < word.length; i++){
  //   if(word[i] === word[i].toUpperCase()){
  //     caps.push(i)
  //   }
  // }
  // return caps

  return word.split('').map((element, idx) => element === element.toUpperCase() ? idx : -1).filter(element => element !== -1)
  
  // return word.split('').reduce((acc, cv, idx) => cv === cv.toUpperCase() ? acc.concat(idx) : acc, [])

};

// 7/30
// You will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
// dup(["kelless","keenness"]) = ["keles","kenes"].
// Strings will be lowercase only, no spaces 

// Test.assertDeepEquals(dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo']);
// Test.assertDeepEquals(dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese']);
// Test.assertDeepEquals(dup(["kelless","keenness"]), ['keles','kenes']);
// Test.assertDeepEquals(dup(["Woolloomooloo","flooddoorroommoonlighters","chuchchi"]), ['Wolomolo','flodoromonlighters','chuchchi']);

// *******solution*******

function dup(arr) {
  return arr.map((word) => word.split('').filter((letter, i, array) => letter !== array[i-1]).join(''))
}


// 8/5
// Your job is to figure out the index of which vowel is missing from a given string:

// A has an index of 0,
// E has an index of 1,
// I has an index of 2,
// O has an index of 3,
// U has an index of 4.
// Notes: There is no need for string validation and every sentence given will contain all vowles but one. Also, you won't need to worry about capitals.

// Examples
// "John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
// "Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"

// ******solution******

function missingVowel(str) {
  let vowels = ['a','e','i','o','u']

 let filtered = vowels.map(char => str.includes(char))
return filtered.indexOf(false)

  // for (let i = 0; i < str.length; i++) {
  //   if (str.indexOf("a") === -1) return 0
  //   if (str.indexOf("e") === -1) return 1
  //   if (str.indexOf("i") === -1) return 2
  //   if (str.indexOf("o") === -1) return 3
  //   if (str.indexOf("u") === -1) return 4

  // }
}

// 8/6
// Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

// A few examples:

// ['u', 'y'] =>  ['u', 'y'] // average length is 1
// ['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
// ['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
// If the average length is not an integer, use Math.round().
// The input array's length > 1
// ******Solution******

function averageLength(arr){
  let num = Math.round(arr.reduce((acc, cv) => acc + cv.length, 0) / arr.length )

  return arr.map(element => element[0].repeat(num))
}

// 8/12
// Given a string of words or phrases, count the number of vowels.

// No Regex! Unless that is your brute force...

******solution*******

function vowels(str){
  let count = 0;
  let vowels = 'aeiou'
  
  for ( let char of str){
    if (vowels.includes(char)){
      count++
    }
  }
  return count
  }

//   8/13
//   Given an array of items, reverse the order.

// No reverse method! Unless that is your brute force first...

function reverseArr(arr){
let newArr = []
for(let element of arr){
  newArr.unshift(element)
}

return newArr

}


// 8/17
// Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.

// const magazine =
//  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

// describe("Ransom Note", () => {
//  it("Should return true", () => {
//   assert.equal(ransomNote("sit ad est sint", magazine), true);
//  });

// it("Should return false", () => {
//   assert.equal(ransomNote("sit ad est love", magazine), false);
//  });

// it("Should return true", () => {
//   assert.equal(ransomNote("sit ad est sint in in", magazine), true);
//  });

// it("Should return false", () => {
//   assert.equal(ransomNote("sit ad est sint in in in in", magazine), false);
//  });
// });

// ********solution*********

function ransomNote(str, mag) {
  const magazineWords = {}
  let magArray = mag.split(' ')
  for (let word of magArray) {
    word = word.replace(/[^a-z]/gi, "")
    magazineWords[word] = magazineWords[word] + 1 || 1
  }
  
  let strArr = str.split(' ')
  for (let inputWord of strArr) {
    if (magazineWords[inputWord]) {
      magazineWords[inputWord] = magazineWords[inputWord] - 1
    } else { 
      return false
    }
  }
  return true;
}

8/19
// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.


// *******solution*******

function findProfit(arr)  {
  let min = 0, max = 0;
  let profit = 0
  for (let i = arr.length-1; i >= 0; i--) {
    if  (arr[i] < min) {
      min = arr[i]
      profit = Math.max(profit, max - min)
    }
    if (arr[i] > max) {
      max = arr[i];
      min = arr[i];
    }
  }
  return profit
}

// 8/20
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

function majorityNum(arr){
  const numObj = {}
  let halfLength = arr.length/2

  for (let num of arr){
    numObj[num] = numObj[num] + 1 || 1
    if(numObj[num] > halfLength) return num
  }
 
}

8/23
// Given an array of integers nums.

// A pair (i,j) is called good if nums[i] == nums[j] and i < j.

// Return the number of good pairs.

// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
// Example 2:

// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.
// Example 3:

// Input: nums = [1,2,3]
// Output: 0

// function goodPairs(arr) {
//   let count = 0
//   arr.forEach((el, i, arr) => {
//     for(let j=i+1; j<arr.length; j++){
//       if(el === arr[j]){
//         count++
//       }
//     }
//   })
//   return count
// }

function factorial(n) {
  let mul = 1
  for(let i=1; i<=n; i++){
    mul *= i
  }
  return mul
}

function goodPairs(arr) {
  const pairsObj = {}
  for (let num of arr) {
    pairsObj[num] =  pairsObj[num] + 1 || 1
  }

  let count = 0
  for(let num in pairsObj){
    if(pairsObj[num] > 1){
      count += factorial(pairsObj[num]) / (2*factorial(pairsObj[num] - 2))
    }
  }
  return count
}

// 8/24
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true


function dupsOrNah(arr){
  let obj = {}
  for (let i = 0; i<arr.length; i++){
    obj[arr[i]] = obj[arr[i]] + 1 || 1

    if(obj[arr[i]] > 1) {
      return true
    }
  }

  return false
}

// 8/26
// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0
 

// Constraints:

// 1 <= jewels.length, stones.length <= 50
// jewels and stones consist of only English letters.
// All the characters of jewels are unique.


// 8/27
// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

// Example 1:

// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// Example 2:

// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// Example 3:

// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

// 8/31

// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

// Example 1:

// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// Example 2:

// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// Example 3:

// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

// 9/1
// Factorial

// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example,

// 5! = 5 * 4 * 3 * 2 * 1 = 120.

// The value of 0! is 1.

// #Your task

// You have to create the function factorial that receives n and returns n!. You have to use recursion.

// 9/2
// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

// Test.assertEquals(mygcd(30,12),6)
// Test.assertEquals(mygcd(8,9),1)
// Test.assertEquals(mygcd(1,1),1)

// 9/1
// Factorial

// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example,

// 5! = 5 * 4 * 3 * 2 * 1 = 120.

// The value of 0! is 1.

// #Your task

// You have to create the function factorial that receives n and returns n!. You have to use recursion.

// 9/2
// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

// Test.assertEquals(mygcd(30,12),6)
// Test.assertEquals(mygcd(8,9),1)
// Test.assertEquals(mygcd(1,1),1)