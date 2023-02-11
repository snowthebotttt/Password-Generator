// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Creates prompt to asked for desired char length.
  var charLength = prompt("Please enter desired character length", 8);

  // Checks to make sure desired length is valid.
  if (charLength < 8 || charLength > 128) {
    alert("You need to select a length from 8-128");
    return;
  }
  // add prompts for Uppercase / lowercase characters / Numbers / Special characters.

  var includeLower = confirm("Do you want to include Lowercase letters?");
  var includeUpper = confirm("Do you want to included Uppercase letters?");
  var includeNumbers = confirm("Do you want to include Numbers");
  var includeSpecial = confirm("Do you want to include Special characters");

  var password = generatePassword(
    charLength,
    includeLower,
    includeUpper,
    includeNumbers,
    includeSpecial
  );
  //Using .querySelector to select the element with the id '#password' the selected element is then assigned the 'passwordText' variable
  var passwordText = document.querySelector("#password");
  //sets the text inside the 'password' element to the value of the generated password.
  passwordText.innerHTML = password;
}
// This function takes in 5 arguments to determine the user's password criteria.
function generatePassword(
  charLength,
  includeLower,
  includeUpper,
  includeNumbers,
  includeSpecial
) {
  var charset = "";

  if (includeLower) {
    charset += "abcdefghijklmnopqrstuvwxyz";
  }
  if (includeUpper) {
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (includeNumbers) {
    charset += "0123456789";
  }
  if (includeSpecial) {
    charset += "!@#$%^&*()";
  }

  var retVal = "";

  for (var i = 0, n = charset.length; i < charLength; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
