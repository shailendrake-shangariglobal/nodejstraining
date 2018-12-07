/**
 * Convert a CSV formatted string to a 2-D Array.
 */

// Ignore the input statement
const input = require('fs').readFileSync('input.csv').toString('utf8');

function csvToArr(fileString) {
  
}

console.log(csvToArr(input));
// Expected Output
// [[1, 'Alice], [2, 'Bob], [3, 'Chuck'], [4, 'David'], [5, 'Earl'], [6, 'Frank'], [7, 'Gavin']]