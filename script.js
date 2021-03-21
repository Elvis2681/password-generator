var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;
}
// Add event listener to generate button
function generatePassword () {
  var passwordLength = window.prompt("Please pick the length of your password within the values of 8-128");
  //if the passwordlength is beyond the given values than read false "boolean expression"
  if (passwordLength >= 8 && passwordLength <= 128) {
    var lowercase = window.confirm("Would you like to use Lowercase letters in your password?");
    var Uppercase = window.confirm("Would you like to use Uppercase letters in your password?");
    var SpecialChar = window.confirm("Would you like Special Characters in your password?");
    var numbers = window.confirm("Would you like Numbers in your password??");
      if(!lowercase && !Uppercase && !SpecialChar && !numbers){
        alert ("invalid character, Please choose a valid option.")
        return 
      }
    var smallcase = "abcdefghijklmnopqrstuvqxyz".split("");
    var tallcase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    var interestchar = "~!@#$%^&*()_+-={}[]|<>?".split("");
    var digits = "1234567890".split("");
    var options = new Array (0);
    var password = new Array (passwordLength);

    if (lowercase == true) {
      options = options.concat(smallcase)
    } 
   
    if (Uppercase == true) {
      options = options.concat(tallcase)
    } 
   
    if (SpecialChar == true) {
      options = options.concat(interestchar)
    } 

    if (numbers == true) {
      options = options.concat(digits)
    } 
//makes password?
for (i=0; i<passwordLength; i++){
  password[i] = options[Math.floor(Math.random()*options.length)];
}
 if (lowercase){
   password[0] = smallcase[Math.floor(Math.random()*smallcase.length)];
 } 
 if (Uppercase){
  password[1] = tallcase[Math.floor(Math.random()*tallcase.length)];
} 
 if (SpecialChar){
  password[3] = interestchar[Math.floor(Math.random()*interestchar.length)];
} 
if (numbers){
  password[2] = digits[Math.floor(Math.random()*digits.length)];
} 


password = password.join("");
return password

  } else (
    alert ("Password must be between 8-128 characters")
  );
}
generateBtn.addEventListener("click", writePassword);