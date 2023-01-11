class Selection {
  constructor(lowercase, uppercase, numbers, symbols) {
    this.lowercase = lowercase;
    this.uppercase = uppercase;
    this.numbers = numbers;
    this.symbols = symbols;
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
const chars = ["!", "@", "#", "$", "&", "%", "/"];

var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
//arrays for each component part? then figure out how to use password length to iterate per array?

function generateRandom(parameter, passwordLength) {
  let passwordParts = [];
  switch (parameter.lowercase) {
    case true:
      for (let i = 0; i < passwordLength; i++) {
        const lowCase = alphabet[Math.floor(Math.random() * alphabet.length)];
        passwordParts.push(lowCase);
      }
      break;
    case false:
      break;
  }
  switch (parameter.uppercase) {
    case true:
      for (let i = 0; i < passwordLength; i++) {
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
      for (let i = 0; i < passwordLength; i++) {
        const num = numList[Math.floor(Math.random() * numList.length)];
        passwordParts.push(num);
      }
      break;
    case false:
      break;
  }
  switch (parameter.symbols) {
    case true:
      for (let i = 0; i < passwordLength; i++) {
        const sym = chars[Math.floor(Math.random() * chars.length)];
        passwordParts.push(sym);
      }
      break;
    case false:
      break;
  }
  console.log(passwordParts);
  shuffle(passwordParts);
  const tempPassword = passwordParts.join("");
  console.log(tempPassword);
  const password = tempPassword.slice(0, passwordLength);
  console.log(
    `your password is: ${password}, password length is ${password.length}`
  );
  passwordText.value = password;
}

function getSelect() {
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

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    const j = Math.floor(Math.random() * (index + 1));
    [array[index], array[j]] = [array[j], array[index]];
  }
}
generateBtn.addEventListener("click", getSelect);
