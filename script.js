// Assignment code here

// Password criteria: length (will be between 8 and 128 characters), character types: uppercase, lowercase, numbers, special characters
// Character types: at least 1 must be selected and then validated via prompt

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
