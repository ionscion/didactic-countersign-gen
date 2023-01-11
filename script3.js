class Selection {
  constructor(lowercase, uppercase, numbers, symbols) {
    this.lowercase = lowercase;
    this.uppercase = uppercase;
    this.numbers = numbers;
    this.symbols = symbols;
  }

  numberOfVariables() {
    let numberOfSelections = 0;
    switch (this.lowercase) {
      case true:
        numberOfSelections++;
    }
    switch (this.uppercase) {
      case true:
        numberOfSelections++;
    }
    switch (this.numbers) {
      case true:
        numberOfSelections++;
    }
    switch (this.symbols) {
      case true:
        numberOfSelections++;
    }
    console.log(`number of object variables: ${numberOfSelections}`);
    return numberOfSelections;
  }
}

const numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const chars = ["!", "@", "#", "$", "&", "%", "/","<",">","|","{","}","[","]","-","+","*",":",";"];

let generateBtn = document.querySelector("#generate");
let passwordText = document.querySelector("#password");
//arrays for each component part? then figure out how to use password length to iterate per array?

function generateRandom(parameter, passwordLength) {
  let passwordParts = [];
    let availLength = passwordLength/parameter.numberOfVariables();
  if (parameter.lowercase === false && parameter.uppercase===false && parameter.numbers=== false && parameter.symbols===false) {
    alert("Please select at least one category!");
        passwordText.value = "Please try again!";
  } else {
    
  switch (parameter.lowercase) {
    case true:
      for (let i = 0; i < availLength; i++) {
        const lowCase = alphabet[Math.floor(Math.random() * alphabet.length)];
        passwordParts.push(lowCase);
      }
      break;
    case false:
      break;
  }
  switch (parameter.uppercase) {
    case true:
      for (let i = 0; i < availLength; i++) {
        const upCase =
          alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase();
        passwordParts.push(upCase);
      }
      break;
    case false:
      break;
  }
  switch (parameter.numbers) {
    case true:
      for (let i = 0; i < availLength; i++) {
        const num = numList[Math.floor(Math.random() * numList.length)];
        passwordParts.push(num);
      }
      break;
    case false:
      break;
  }
  switch (parameter.symbols) {
    case true:
      for (let i = 0; i < availLength; i++) {
        const sym = chars[Math.floor(Math.random() * chars.length)];
        passwordParts.push(sym);
      }
      break;
    case false:
      break;
  }
  

  
  shuffle(passwordParts);
  console.log(passwordParts);
  let tempPassword = passwordParts.slice(0, passwordLength);
//   shuffle(tempPassword);
//   console.log(`tempPW is ${tempPassword}`);
  const password = tempPassword.join("");
  console.log(
    `your password is: ${password}, password length is ${password.length}`
  );
  passwordText.value = password;
  } 
}

function getSelection() {
  const passwordLength = prompt(
    "How long would you like your password to be? Must be between 8 and 128 Characters"
  );
  console.log(`user selected length of ${passwordLength}`);
  if (passwordLength >= 8 && passwordLength <= 128) {
    const parameter = new Selection(
      confirm("Do you want to add lowercase letters?"),
      confirm("Do you want to add uppercase letters?"),
      confirm("Do you want to add numbers?"),
      confirm("Do you want to add special characters?")
    );
    console.log(
      `parameter lcase value is ${parameter.lowercase}, parameter ucase value is ${parameter.uppercase}, parameter number value is ${parameter.numbers}, parameter symbol value is ${parameter.symbols}`
    );
    generateRandom(parameter, passwordLength);
  } else {
    alert("Please try again, password must be between 8 and 128 characters!");
    passwordText.value = "Please try again!";
  }
}

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    const j = Math.floor(Math.random() * (index + 1));
    [array[index], array[j]] = [array[j], array[index]];
  }
}
generateBtn.addEventListener("click", getSelection);
