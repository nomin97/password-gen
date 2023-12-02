// assignment code . generates the generate password button 
var generateBtn = document.querySelector("#generate")

// variable definition, criteria for password, arrays for each criteria
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var passwordLength = 8;
var alphaLower = alphabet.split("");
var alphaUpper = alphabet.toUpperCase().split("");
var nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["~", "`", "!", "@", "#", "$", "%", "&", "(", ")", "*", "+", "-", "."];

// write password on html 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if (password) {
    passwordText.value = password;
  } else {
    passwordText.value = '';
  }
}

//function to generate password
function generatePassword() {
  var result = "";
  var password = [];

  // getting user input
  var passwordLength = prompt("How Long Should Password Be?")
  if (isNaN(passwordLength)) {
    alert("Password length can be only between 8 to 128 characters.");
    return;
  } else if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length can be only between 8 to 128 characters.");
    return;
  }

  var shouldIncludeUppercase = confirm("Click OK to Include a Uppercase Letter in Your Password.");
  var shouldIncludeLowercase = confirm("Click OK to Include a Lowercase Letter in Your Password.");
  var shouldIncludeNumbers = confirm("Click OK to add number to password.");
  var shouldIncludeChars = confirm("Click OK to add special characters to password.");

  // add values to the options if its true
  if (shouldIncludeUppercase == true) {
    password = password.concat(alphaUpper);
  }
  if (shouldIncludeLowercase == true) {
    password = password.concat(alphaLower);
  }
  if (shouldIncludeNumbers == true) {
    password = password.concat(nums);
  }
  if (shouldIncludeChars == true) {
    password = password.concat(specialChar);
  }
  for (var i = 0; i < passwordLength; i++) {
    result += password[Math.floor(Math.random() * password.length)];
  }
  return result;
}

// event listener, writes password when clicked
generateBtn.addEventListener("click", writePassword);

