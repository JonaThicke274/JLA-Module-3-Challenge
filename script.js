// Assignment code here

// Password criteria: length (will be between 8 and 128 characters), character types: uppercase, lowercase, numbers, special characters
// Character types: at least 1 must be selected and then validated via prompt

// Function to ask user for password length
function charLength () {
  // Ask user to input length of password, between 8 and 128
  var passLength = window.prompt("Please determine length of password: select an integer (inclusive) between 8 and 128.");
  
  // Validates user input for password length
  if (passLength < 8 || passLength > 128) {
    window.alert("You need to provide a valid answer! Please try again, reminder: the length must be between 8 and 128.");
    // Calls function again
    return charLength();
  }
  console.log (passLength);
  return passLength;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
