// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// addEventListener to generate password button 
// series of prompts of password criteria
// - get length
// - validate length
// -include lowercase, uppercase, numeric, special characters
// -validate character use  
//  -generate password
// -show password

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
  if (password){
    passwordText.value = password;
  } else {
    passwordText.value = '';
  }
}

//function to generate password
function generatePassword() {
  var result = "";
  var passwordLength = "";
  var password = [];
  
  passwordLength = 0;
  result = "";  

   // getting user input
   var passwordLength = prompt("How Long Should Password Be?") 
   if (isNaN(passwordLength)){
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
     
    for (var i = 0; i <= passwordLength; i++) {
      result += writePassword[Math.floor(Math.random() * password.length)];
    }
    document.getElementById("password").value = result;
  }

// event listener, writes password when clicked
generateBtn.addEventListener("click", writePassword);