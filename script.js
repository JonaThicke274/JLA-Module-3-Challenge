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

// Function to ask user if password needs uppercase characters
function upperCase () {
  // Ask user to indicate if upper case characters are needed
  var upperCaseConfirm = window.prompt("Does your password need upper case characters? Press 1 for YES, or 2 for NO.");
  // Chbanges user input to interger type
  upperCaseConfirm = parseInt(upperCaseConfirm);
  
  // Validates user input
  if (upperCaseConfirm === 1) {
    return true;
  }
  else if (upperCaseConfirm === 2) {
    return false;   
  }
  else {
    window.alert("You need to provide a valid answer. Please try again.");
    return upperCase();
  }
}

// Function to ask user if password needs lowercase characters
function lowerCase () {
  // Ask user to indicate if lower case characters are needed
  var lowerCaseConfirm = window.prompt("Does your password need lower case characters? Press 1 for YES, or 2 for NO.");
  // Chbanges user input to interger type
  lowerCaseConfirm = parseInt(lowerCaseConfirm);
  
  // Validates user input
  if (lowerCaseConfirm === 1) {
    return true;
  }
  else if (lowerCaseConfirm === 2) {
    return false;   
  }
  else {
    window.alert("You need to provide a valid answer. Please try again.");
    return lowerCase();
  }
}

// Function to ask user if password needs numbers
function numbers () {
  // Ask user to indicate if lower case characters are needed
  var numbersConfirm = window.prompt("Does your password need numbers? Press 1 for YES, or 2 for NO.");
  // Chbanges user input to interger type
  numbersConfirm = parseInt(numbersConfirm);
  
  // Validates user input
  if (numbersConfirm === 1) {
    return true;
  }
  else if (numbersConfirm === 2) {
    return false;   
  }
  else {
    window.alert("You need to provide a valid answer. Please try again.");
    return numbers();
  }
}

// Function to ask user if password needs special characters
function special () {
  // Ask user to indicate if lower case characters are needed
  var specialConfirm = window.prompt("Does your password need special characters? Press 1 for YES, or 2 for NO.");
  // Chbanges user input to interger type
  specialConfirm = parseInt(specialConfirm);
  
  // Validates user input
  if (specialConfirm === 1) {
    return true;
  }
  else if (specialConfirm === 2) {
    return false;   
  }
  else {
    window.alert("You need to provide a valid answer. Please try again.");
    return special();
  }
}

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
