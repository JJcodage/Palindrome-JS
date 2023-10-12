//function to reverse original string

function reverseString(str) {
  // empty string to write reverse version of original one
  let reverseMode = "";

  //changing the order of given string backward
  for (let i = str.length - 1; i >= 0; i--) {
    reverseMode += str[i];
  }
  return reverseMode;
}
// function to check if the string is palindrome or not

function checkPalindrome(string) {
  // find the length of a string
  const len = string.length;

  // loop through half of the string because comparing half of the string is enough to find that polindrome or not
  for (let i = 0; i < len / 2; i++) {
    // checkhing first and second half are same through the length of the string
    //first "if" = "if not", else is "if" == yes
    if (string[i] !== string[len - 1 - i]) {
      const reverseVersion = reverseString(string);
      return "not polindrome = " + reverseVersion; // if it is not polindrome display that and also give reversed version of the string
    }
  }
  return "It is a palindrome"; // if it's polindrome just display it's.
}

// take input from user
const string = prompt("Enter a string: ");

// call the polindrome function
const result = checkPalindrome(string);

console.log(result);
