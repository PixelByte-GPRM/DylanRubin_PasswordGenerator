// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var passwordSize=0;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSymbol;
var passArray;

  const numbers = '1234567890';
  const lettersU ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lettersL ='abcdefghijklmnopqrstuvwxyz'
	const symbols = '~!@#$%^&*()_+{}":?><;.,';
function Questions()
{
  passwordSize= prompt("How big do you wish the password to be? (Must be between 8-128 characters");
  confirmLower= confirm("Would you like to include Lowercase characters?");
  confirmUpper= confirm("Would you like to include Uppercase characters?");
  confirmNumber= confirm("Would you like to include Number characters?");
  confirmSymbol= confirm("Would you like to include Symbol characters?");
  if(confirmLower== false && confirmUpper==false && confirmLNumber==false && confirmSymbol==false)
    {alert("No available characters. All choices were denied.");}
}

function generatePassword()
{
  var passwordA="";
  if(passwordSize>=8 && passwordSize<=128)
  {
      if(confirmLower==true||confirmUpper==true|| confirmNumber==true||confirmSymbol==true){
    for(var i= 0; i<=(passwordSize-1);)
    {
      if(confirmLower=true)
      {
        var char = Math.floor(Math.random() * lettersL.length + 1); 
        passwordA+= lettersL.charAt(char);
        i++
      }
      if(confirmUpper==true)
      {
        var char = Math.floor(Math.random() * lettersU.length + 1); 
        passwordA+= lettersU.charAt(char);
        i++
      }
      if(confirmNumber== true)
      {
        var char = Math.floor(Math.random() * numbers.length + 1); 
        passwordA+= numbers.charAt(char);
        i++
      }
      if(confirmSymbol== true)
      {
        var char = Math.floor(Math.random() * symbols.length + 1); 
        passwordA+= symbols.charAt(char);
        i++
      }

    }
    console.log(passwordA);
    return passwordA;
  }
    
  }
  else
  {
    alert("Your password has an invalid size");
  }
  
}