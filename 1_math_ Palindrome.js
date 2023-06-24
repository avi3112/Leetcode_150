// Given an integer x, return true if x is a
// palindrome
// , and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

function palindrom(nums) {
  if (nums === 0) {
    return true;
  }
  if (nums < 0 || nums % 10 === 0) {
    return false;
  }
  let temp = nums;
  let reverse = 0;
  while (temp != 0) {
    let rem = nums % 10;
    temp = temp / 10;
    reverse = reverse * 10 + rem;
  }
  if (nums === reverse) {
    return true;
  } else {
    return false;
  }
}

const result = palindrom(0);
console.log(result);
