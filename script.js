// Assignment Code
var generateBtn = document.querySelector("#generate");
const colors = [
  "red",
  "blue",
  "purple",
  "orange",
  "green",
  "turquoise",
  "cyan",
  "chartreuse",
];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const symbols = ["!", "@", "#", "$", "%", "&"];
// Write password to the #password input

function generatePassword(array) {
  let password = " ";
  for (let index = 0; index < array.length; index++) {
    const color = colors[Math.floor(Math.random() * colors.length)];
    const colEx = color
      .substring(getRandomInt(5), getRandomInt(5))
      .toUpperCase();
    const sym = symbols[Math.floor(Math.random() * symbols.length)];
    console.log(`color picked is ${color}`);
    console.log(`colEx picked is ${colEx}`);
    console.log(sym);
    const num = numbers[Math.floor(Math.random() * numbers.length)];
    password = password + colEx + sym + num;
    temp = password.substring(0, 10);

    //this shows the values of the arguments passed into the function
    for (const value of arguments) {
      console.log(value);
    }
  }
  return password;
}
function writePassword() {
  password = generatePassword(colors, numbers, symbols);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log();
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// start();
// console.log()

// function start() {
//   generatePassword(colors, numbers, symbols);
//   writePassword();
// }
