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
  "z"
];
const chars = ["!", "@", "#", "$", "&", "%", "/"];

var generateBtn = document.querySelector("#generate");

function generateRandom(parameter, passwordLength) {
  let passwordParts = [];
  let remainingLength = passwordLength;
  console.log(`remaining length initial is ${remainingLength}`);
  switch (parameter.lowercase) {
    case true:
      const numLowerLetters = getRandomInt(1, 6);
      console.log(`numLowerLetters is: ${numLowerLetters}`);
      if (remainingLength <= numLowerLetters) {
        for (let i = 0; i < remainingLength; i++) {
          const lowerLetter =
            alphabet[Math.floor(Math.random() * alphabet.length)];
          passwordParts.push(lowerLetter);
          console.log(`remaining length ran`);
        }
        remainingLength--;
      } else {
        for (let i = 0; i < numLowerLetters; i++) {
          const lowerLetter =
            alphabet[Math.floor(Math.random() * alphabet.length)];
          passwordParts.push(lowerLetter);
          console.log(`else ran`);
        }
        remainingLength -= numLowerLetters;
      }
      break;
    case false:
      break;
    case null:
      break;
  }
  switch (parameter.uppercase) {
    case true:
      //temp changed to remaininglength
      const numUpperLetters = getRandomInt(1, 4);
      console.log(`numUpperLetters is: ${numUpperLetters}`);
      for (let i = 0; i < numUpperLetters; i++) {
        const upperLetter = alphabet[
          Math.floor(Math.random() * alphabet.length)
        ].toUpperCase();
        passwordParts.push(upperLetter);
      }
      remainingLength -= numUpperLetters;
      break;
    case false:
      break;
    case null:
      break;
  }
  switch (parameter.numbers) {
    case true:
      const numNumbers = getRandomInt(1, 4);
      console.log(`numNumbers is: ${numNumbers}`);
      for (let i = 0; i < numNumbers; i++) {
        const numb = numList[Math.floor(Math.random() * numList.length)];
        passwordParts.push(numb);
      }
      remainingLength -= numNumbers;
      break;
    case false:
      break;
    case null:
      break;
  }
  switch (parameter.symbols) {
    case true:
      const numSymbols = remainingLength;
      console.log(`numSymbols is: ${numSymbols}`);
      for (let i = 0; i < numSymbols; i++) {
        const symb = chars[Math.floor(Math.random() * chars.length)];
        passwordParts.push(symb);
      }
      console.log(passwordParts);
      break;
    case false:
      break;
    case null:
      break;
  }

  shuffle(passwordParts);
  const password = passwordParts.join("");
  console.log(
    `your password is: ${password}, password length is ${password.length}`
  );
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function getSelect() {
  const passwordLength = prompt(
    "How long would you like your password to be? Must be between 8 and 128 Characters"
  );
  console.log(`user selected length of ${passwordLength}`);
  if (passwordLength >= 8 && passwordLength <= 128) {
    const parameter = new Selection(
      confirm("lowercase?"),
      confirm("uppercase?"),
      confirm("numbers?"),
      confirm("special characters?")
    );
    console.log(
      `parameter lcase value is ${parameter.lowercase}, parameter ucase value is ${parameter.uppercase}, parameter number value is ${parameter.numbers}, parameter symbol value is ${parameter.symbols}`
    );
    generateRandom(parameter, passwordLength);
  } else {
    return alert(
      "Please try again, password must be between 8 and 128 characters!"
    );
  }
}

//need function for remaining length check?

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

function remLength() {
if(numToIterate < remainingLength) {
}
else {
   var length = remainingLength;
};
}

//generateBtn.addEventListener("click", generateRandom);
generateBtn.addEventListener("click", getSelect);
