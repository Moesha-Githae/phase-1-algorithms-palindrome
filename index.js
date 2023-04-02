function isPalindrome(word) {
  // Write your algorithm here
  let reversed = word.split("").reverse().join("")
  return reversed === word
}

/* 
  Add your pseudocode here
  1. split string to individual characters forming an array
  2. call reverse method on the array
  3. join the array
  4. check if joined array is the same as input word
  5. if same return true else return false
*/

/*
  Add written explanation of your solution here
  the method uses split() to conver input word into an array of characters.
  using the array reverse method, the array is reversed so the last letter comes first
  joining the array creates a new word that can be compared with the input value 
  and when they are same return a value of true else return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting false");
  console.log("=>", isPalindrome("mother"));

  console.log("");

  console.log("Expecting true");
  console.log("=>", isPalindrome("refer"));
}

module.exports = isPalindrome;