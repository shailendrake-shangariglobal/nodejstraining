/**
 * A Mersenne prime number is a prime number that follows the following condition
 * n is mersenne prime if n = (2^k - 1) for any integral k.
 * For e.g 3 = (2^2 - 1), 31 = (2^5) - 1
 * 
 * Implement the follwing function that takes a array of 'k' values
 * and replaces each k with 'YES' if (2^k) - 1 is prime, 'No' otherwise
 **/

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function mersenne(arr) {

}

console.log(mersenne(input));
// Expected Output
// ['YES', 'YES', 'YES', 'NO', 'YES', 'NO', 'YES', 'NO', 'NO', 'NO];
// 
// Explanation: input[5] = 6, (2^6) - 1 = 63. 63 is not prime.
// Hence replaced with 'NO'