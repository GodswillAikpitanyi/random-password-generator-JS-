let availableCharacters = ["a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , 
"i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r", "s", "t", "u", "v", "w", "x", "y", "z", 
"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K" , "L" , "M" , "N" , "K" , "L" , "M" , "N" ,
"O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "!", "@", "#", "$", "%", "&", 
"*" , "+" , "=" , "?" , "/" , "1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9" , "0"];

// let availableCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*-_=+:>,</?";

let generatedPassword = [ ];

function generatePassword1(){
  for (let i = 0; i < 12; i++){
    generatedPassword.push(availableCharacters[Math.floor(Math.random() * availableCharacters.length)]);
  }
    // generatedPassword.join("");
  document.querySelector("#generator-1").textContent = generatedPassword;
}

function generatePassword2(){
  for (let i = 0; i < 4; i++){
    generatedPassword.push(availableCharacters[Math.floor(Math.random() * availableCharacters.length)]);
  }
    // generatedPassword.join("");
  document.querySelector("#generator-2").textContent = generatedPassword;
}

function generatePassword3(){
  for (let i = 0; i < 12; i++){
    generatedPassword.push(availableCharacters[Math.floor(Math.random() * availableCharacters.length)]);
  }
    // generatedPassword.join("");
  document.querySelector("#generator-3").textContent = generatedPassword;
}

function generatePassword4(){
  for (let i = 0; i < 12; i++){
    generatedPassword.push(availableCharacters[Math.floor(Math.random() * availableCharacters.length)]);
  }
    // generatedPassword.join("");
  document.querySelector("#generator-4").textContent = generatedPassword;
  
}

function generatePassword() {
  generatePassword1();
  generatePassword2();
  generatePassword3();
  generatePassword4();
}