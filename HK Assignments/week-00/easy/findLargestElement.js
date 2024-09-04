/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

let numbers = [3, 7, 2, 9, 1];

function findLargestElement(numbers) {
    let largestElement = numArry[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numArry[i] > largestElement){
            largestElement = numArry[i];
        }
    }
    return largestElement;
}

module.exports = findLargestElement;