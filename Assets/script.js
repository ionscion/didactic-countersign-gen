class Selection {
  constructor(lowercase, uppercase, numbers, symbols) {
    this.lowercase = lowercase;
    this.uppercase = uppercase;
    this.numbers = numbers;
    this.symbols = symbols;
  }

  numberOfVariables() {
    let numberOfSelections = 0;
    this.lowercase && numberOfSelections++;
    this.uppercase && numberOfSelections++;
    this.numbers && numberOfSelections++;
    this.symbols && numberOfSelections++;
    console.log(`number of object variables: ${numberOfSelections}`);
    return numberOfSelections;
  }
}
let passwordParts = [];
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
const upCase = alphabet.map((char)=> char.toUpperCase());
const chars = ["!", "@", "#", "$", "&", "%", "/","<",">","|","{","}","[","]","-","+","*",":",";"];

let generateBtn = document.querySelector("#generate");
let passwordText = document.querySelector("#password");

function generateRandom(parameter, passwordLength) {
  
  let guaranteedChars = [];
  if (parameter.lowercase === false && parameter.uppercase===false && parameter.numbers=== false && parameter.symbols===false) {
    alert("Please select at least one category!");
        passwordText.value = "Please try again!";
  } else {
    
  switch (parameter.lowercase) {
    case true:
      iterator(alphabet,parameter, passwordLength);
      guaranteedChars.push(alphabet[Math.floor(Math.random() * alphabet.length)]);
      break;
    case false:
      break;
  }
  switch (parameter.uppercase) {
    case true:
      iterator(upCase,parameter, passwordLength);
      guaranteedChars.push(upCase[Math.floor(Math.random() * upCase.length)]);
      break;
    case false:
      break;
  }
  switch (parameter.numbers) {
    case true:
      iterator(numList,parameter, passwordLength);
      guaranteedChars.push(numList[Math.floor(Math.random() * numList.length)]);
      break;
    case false:
      break;
  }
  switch (parameter.symbols) {
    case true:
      iterator(chars,parameter, passwordLength);
      guaranteedChars.push(chars[Math.floor(Math.random() * chars.length)]);
      break;
    case false:
      break;
  }  
  shuffle(passwordParts);
  console.log(passwordParts);
  console.log(`guaranteed ${guaranteedChars}`);
  let tempPassword = passwordParts.slice(0, passwordLength);
  for (let index = 0; index < guaranteedChars.length; index++) {
    tempPassword[index]=guaranteedChars[index];
  }
  shuffle(tempPassword);
  const password = tempPassword.join("");
  console.log(
    `your password is: ${password}, password length is ${password.length}`
  );
  passwordText.value = password;
  passwordParts=[];
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

function iterator(array, parameter, passwordLength) {
  let availLength = passwordLength/parameter.numberOfVariables();
  for (let index = 0; index < availLength; index++) {
    let element = array[Math.floor(Math.random() * array.length)];
    passwordParts.push(element);
  }
}

generateBtn.addEventListener("click", getSelection);
