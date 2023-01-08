// Assignment Code
var generateBtn = document.querySelector("#generate");
const colors = [ "red", "blue", "purple", "orange", "green", "turquoise", "cyan", "chartreuse"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const symbols = ["!", "@", "#", "$", "%", "&"];
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
console.log(alphabet);

function generatePassword(array) {
  const addLetters = confirm("Do you want to add letters?");
  const numLetters = prompt("How many letters would you like to add?");
  const addNumbers = confirm("Do you want to add numbers?");
  const numNumbers = prompt("How many numbers would you like to add?");
  const addCharacters = confirm("Do you want to add special characters?");
  const numCharacters = prompt("How many special characters would you like to add?");

  let passwordParts = [];

  if (addLetters) {
    for (let index = 0; index < numLetters; index++) {
      const letter = alphabet[Math.floor(Math.random() * alphabet.length)];
      passwordParts.push(letter);
    }
  }
  if (addNumbers) {
    for (let index = 0; index < numNumbers; index++) {
      const num = numbers[Math.floor(Math.random() * numbers.length)];
      passwordParts.push(num);
    }
  }
  if (addCharacters) {
    for (let index = 0; index < numCharacters; index++) {
      const char = symbols[Math.floor(Math.random() * symbols.length)];
      passwordParts.push(char);
    }
  }
  shuffle(passwordParts);
  const password = passwordParts.join('');
  return password;
}

// Write password to the #password input
function writePassword() {
  password = generatePassword(alphabet, numbers, symbols);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(passwordText);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function shuffle(array) {
  for (let index = array.length -1; index > 0; index--) {
    const j = Math.floor(Math.random() * (index + 1));
    [array[index], array[j]] = [array[j], array[index]];
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
