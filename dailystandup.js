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
function reverseCapAndOrder(str) {
  str = str.replace(/\s+/g, ' ')
  let capReverse = str.trim().split('').map(letter => letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase()).join('')
  return capReverse.split(' ').reverse().join(' ')
  
}