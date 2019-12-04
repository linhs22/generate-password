
//DON'T TOUCH THIS CODE! This code is adding click handlers and DOM manipulation to the page.  Edit the generatePassword function and all should work properly.
// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");

//this function will fire when you click the generate password button on the page.  I've set it to alert "You've clicked a button" and return a password of password for now. Update it to make your password
function generatePassword() {
    //YOUR CODE HERE

    var special = "!#$%&*+-:;<=>?@";
    var numbers = "0123456789";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var password = "";


    var passLength = parseInt(prompt("How long do you want your password? Length (must be between 8 and 128 characters)"));

    if (passLength < 8 || passLength > 128) {
        alert("Password length invalid. Enter valid character length")
        generatePassword()
    }

    var specialChar = confirm("Do you want to include special characters");
    var numericChar = confirm("Do you want numeric characters?");
    var lowerChar = confirm("Do you want lowercase characters?");
    var upperChar = confirm("Do you want uppercase characters?");

    for (var i = 1; i <= passLength;) {
        if (specialChar === true && i <= passLength) {
            password += special.charAt(Math.floor(Math.random()*special.length));
            i++
        } if (numericChar === true && i <= passLength) {
            password +=numbers.charAt(Math.floor(Math.random()*numbers.length));
            i++ 
        } if (lowerChar === true && i <= passLength) {
            password +=uppercase.charAt(Math.floor(Math.random()*uppercase.length));
            i++
        } if (upperChar === true && i <= passLength) {
            password +=lowercase.charAt(Math.floor(Math.random()*lowercase.length));
            i++
        } if (specialChar === false && numericChar === false && lowerChar === false && upperChar === false ) {
            password +=lowercase.charAt(Math.floor(Math.random()*lowercase.length));
            i++
        }
    }
    
    console.log(password);
    return password;

    // return "password";
    //User gets asked a series of question on whether they want certain characters
    //User also gets asked the number of characters they want in their password
    //For loop that goes through the sequence i times where i is the length of the password
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

    copyBtn.removeAttribute("disabled");
    copyBtn.focus();
}

function copyToClipboard() {
    // BONUS 
    var copyText = document.getElementById("password");

    /* Select the text field */
    copyText.select();

  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
copyBtn.addEventListener("click", copyToClipboard);