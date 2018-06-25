/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */

// Given two integers dividend and divisor, divide two integers without using multiplication, division and mod operator.

// Return the quotient after dividing dividend by divisor.

// The integer division should truncate toward zero.

// Example 1:

// Input: dividend = 10, divisor = 3
// Output: 3
// Example 2:

// Input: dividend = 7, divisor = -3
// Output: -2
// Note:

// Both dividend and divisor will be 32-bit signed integers.
// The divisor will never be 0.
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 231 − 1 when the division result overflows.

dividend = -2147
divisor = -2
// output = 3

// I could not pass the leetcode test - time limit kept exceeding
var divide = function(dividend, divisor) {

    let negatives = ((dividend < 0) ^ (divisor < 0)) ? -1 : 1;

    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    let output = 0;
    while (divisor <= dividend){
      output++;
      dividend -= divisor;
    }
    
    if (negatives == -1){
      if (output > 2147483647){
        return -2147483648;
      } else {
        return - + output
      }
    } else if (output > 2147483647){
      return 2147483647;
    }
    else {
      return output;
    }
};

// This method uses nlogn speed but i could not get the syntax working. So the code does not work.
// var divide = function(dividend, divisor) {

//     let negatives = ((dividend < 0) ^ (divisor < 0)) ? -1 : 1;

//     dividend = Math.abs(dividend);
//     divisor = Math.abs(divisor);

//     let current = 1;
//     let denominator = divisor;
//     // This step is required to find the biggest current number which can be
//     // divided with the number safely.
//     console.log("hi")
//     while (denominator <= dividend) {
//         current <<= 1;
//         denominator <<= 1;
//     }
//     console.log("hi")
//     // Since we may have increased the denomitor more than dividend
//     // thus we need to go back one shift, and same would apply for current.
//     denominator >>= 1;
//     current >>= 1;
//     let output = 0;
//     // Now deal with the smaller number.
//     while (current != 0) {
//         if (dividend >= denominator) {
//             dividend -= denominator;
//             output |= current;
//         }
//         current >>= 1;
//         denominator >>= 1;
//     }

//     if (negatives){
//       if (output > 2147483647){
//         return -2147483648;
//       } else {
//         return - + output;
//       }
//     } else if (output > 2147483647){
//       return 2147483647;
//     }
//     else {
//       return output;
//     }
// };

console.log(divide(dividend, divisor))
