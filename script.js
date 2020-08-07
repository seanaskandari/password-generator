// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = text;

}

var lowerOptions = "abcdefghijklmnopqrstuvwxyz";
var upperOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericOptions = "1234567890";
var specialOptions = "!@#$%^&*()_+";
let optionsChoices = [];
let text = "";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {


function generatePassword() {
  console.log("Generate The Password");
  

  //Length prompt and response
  let passLength = prompt("How many characters do you want in your password?");
  console.log(passLength);

  if (passLength > 7 && passLength < 26) {
    console.log(passLength);
  }
  else if (passLength < 8 && passLength > 25)
    if (passLength > 25){
      alert("Password can not exceed 25 characters")
      generatePassword();
      return;
    }
    else if (passlength < 8) {
      alert("Password must be at least 8 characters long")
      generatePassword();
      return;
    }

  //User selection of characters
  //Lowercase prompt and response
  let passLower = confirm("Do you want lower case characters included?")

  if (passLower == true) {
    console.log("Include lowercase: " + passLower);
    optionsChoices.push(lowerOptions);
  }
  else {
    console.log("Include lowercase: ")
  }

  //Uppercase prompt and response
  let passUpper = confirm("Do you want upper case characters included?")

  if (passUpper == true) {
    console.log("Include uppercase: " + passUpper);
    optionsChoices.push(upperOptions);
  }
  else {
    console.log("Include uppers")
  }

  //Number prompt and response
  let passNumeric = confirm("Do you want numbers included?")

  if (passNumeric == true) {
    console.log("Include numbers: " + passNumeric);
    optionsChoices.push(numericOptions)
  }
  else{
    console.log("Include numbers")
  }

  //Special Characters prompt and response
  let passSpecial = confirm("Do you want special characters included?")

  if (passSpecial == true) {
    console.log("Include special characters: " + passSpecial);
    optionsChoices.push(specialOptions)
  }
  else{
    console.log("Include specials")
  }

  //For loop generating random characters
  for (let i = 0; i < passLength; i++) {
    let optionsArray = optionsChoices[Math.floor(Math.random() * optionsChoices.length)];
    let passSelection = optionsArray.charAt(Math.floor(Math.random() * optionsArray.length));
    text +=passSelection;
  }
  console.log(text);

}

function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.textContent = text;
}



}