// Assignment Code
var generateBtn = document.querySelector("#generate");
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const symbols = ["!", "@", "#", "$", "%", "&"];
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

function generateRandom(array) {
  let passwordParts = [];
  const passwordLength = prompt(
    "How long would you like your password to be? Must be between 8 and 128 characters"
  );
  console.log(`user selected: ${passwordLength}`);
  if (passwordLength >= 8 && passwordLength <= 128) {
    let remainingLength = passwordLength;

    const addLowerLetters = confirm("Do you want to add lowercase letters?");
    switch (addLowerLetters) {
      case true:
        const numLowerLetters = (getRandomInt(1,6));
          console.log(`random lower: ${numLowerLetters}`);
        for (let i = 0; i < numLowerLetters; i++) {
          const lowerLetter =
            alphabet[Math.floor(Math.random() * alphabet.length)];
          passwordParts.push(lowerLetter);
        }
        remainingLength -= numLowerLetters;
        console.log(`remaining length: ${remainingLength}`);
        break;
      case false:
        break;
      case null:
        break;
    }

    const addUpperLetters = confirm("Do you want to add uppercase letters?");
    switch (addUpperLetters) {
      case true:
        const numUpperLetters = (getRandomInt(1,6));
        console.log(`random uppers: ${numUpperLetters}`);
        for (let i = 0; i < numUpperLetters; i++) {
          const upperLetter =
            alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase();
          passwordParts.push(upperLetter);
        }
        remainingLength -= numUpperLetters;
        break;
      case false:
        break;
      case null:
        break;
    }

    const addNumbers = confirm("Do you want to add numbers?");
    switch (addNumbers) {
      case true:
        const numNumbers = (getRandomInt(1,6));
        console.log(`randome numbers: ${numNumbers}`);
        for (let i = 0; i < numNumbers; i++) {
          const num = numbers[Math.floor(Math.random() * numbers.length)];
          passwordParts.push(num);
        }
        remainingLength -= numNumbers;
        break;
      case false:
        break;
      case null:
        break;
    }

    const addCharacters = confirm("Do you want to add special characters?");
    switch (addCharacters) {
      case true:
        const numCharacters = remainingLength;
        console.log(`random chars: ${numCharacters}`);
        for (let i = 0; i < numCharacters; i++) {
          const char = symbols[Math.floor(Math.random() * symbols.length)];
          passwordParts.push(char);
        }
        remainingLength -= numCharacters;
        break;
      case false:
        break;
      case null:
        break;
    }

    shuffle(passwordParts);
    const password = passwordParts.join("");
    return password;
  } else {
    return confirm("Password length must be at least 8 characters!");
  }
}

//make another function that will randomly assign the items based on selection, then let user choose
//to randomly generate or specify the exact types
function generatePassword(array) {
  let passwordParts = [];
  const passwordLength = prompt(
    "How long would you like your password to be? Must be between 8 and 128 characters"
  );

  if (passwordLength >= 8 && passwordLength <= 128) {
    const addLowerLetters = confirm("Do you want to add lowercase letters?");
    switch (addLowerLetters) {
      case true:
        const numLowerLetters = prompt(
          "How many lowercase letters would you like to add?"
        );
        if (numLowerLetters === null) {
          // User cancelled the prompt, move to the next step
          break;
        } else {
          for (let index = 0; index < numLowerLetters; index++) {
            const lowerLetter =
              alphabet[Math.floor(Math.random() * alphabet.length)];
            passwordParts.push(lowerLetter);
          }
          break;
        }
      case false:
        // User declined to add lowercase letters, move to the next step
        break;
      case null:
        break;
    }
    const addUpperLetters = confirm("Do you want to add uppercase letters?");
    switch (addUpperLetters) {
      case true:
        const numUpperLetters = prompt(
          "How many uppercase letters would you like to add?"
        );
        if (numUpperLetters === null) {
          // User cancelled the prompt, move to the next step
          break;
        } else {
          for (let index = 0; index < numUpperLetters; index++) {
            const upperLetter =
              alphabet[
                Math.floor(Math.random() * alphabet.length)
              ].toUpperCase();
            passwordParts.push(upperLetter);
          }
          break;
        }
      case false:
        // User declined to add uppercase letters, move to the next step
        break;
      case null:
        break;
    }
    const addNumbers = confirm("Do you want to add numbers?");
    switch (addNumbers) {
      case true:
        const numNumbers = prompt("How many numbers would you like to add?");
        if (numNumbers === null) {
          // User cancelled the prompt, move to the next step
          break;
        } else {
          for (let index = 0; index < numNumbers; index++) {
            const num = numbers[Math.floor(Math.random() * numbers.length)];
            passwordParts.push(num);
          }
          break;
        }
      case false:
        // User declined to add numbers, move to the next step
        break;
      case null:
        break;
    }
    const addCharacters = confirm("Do you want to add special characters?");
    if (addCharacters === true) {
      switch (addCharacters) {
        case true:
          const numCharacters = prompt(
            "How many special characters would you like to add?"
          );
          if (numCharacters === null) {
            break;
          } else {
            for (let index = 0; index < numCharacters; index++) {
              const char = symbols[Math.floor(Math.random() * symbols.length)];
              passwordParts.push(char);
            }
            break;
          }
        case false:
          break;
        case null:
          break;
      }
    } else {
      return alert("Please select at least one category");
    }

    shuffle(passwordParts);
    const password = passwordParts.join("");
    return password;
  } else {
    return confirm("Password length must be at least 8 characters!");
  }
}

//break//

//this function works but it's not quite what i'm looking for (above function getPassword  is better)
function generatePasswordOnePointO(array) {
  const passwordLength = prompt(
    "How long would you like your password to be? Must be between 8 and 128 characters"
  );
  if (passwordLength >= 8 && passwordLength <= 128) {
    const addLowerLetters = confirm("Do you want to add lowercase letters?");
    const numLowerLetters = prompt(
      "How many lowercase letters would you like to add?"
    );
    const addUpperLetters = confirm("Do you want to add uppercase letters?");
    const numUpperLetters = prompt(
      "How many uppercase letters would you like to add?"
    );
    const addNumbers = confirm("Do you want to add numbers?");
    const numNumbers = prompt("How many numbers would you like to add?");
    const addCharacters = confirm("Do you want to add special characters?");
    const numCharacters = prompt(
      "How many special characters would you like to add?"
    );

    let passwordParts = [];

    if (passwordLength > 8) {
      if (addLowerLetters) {
        for (let index = 0; index < numLowerLetters; index++) {
          const lowerLetter =
            alphabet[Math.floor(Math.random() * alphabet.length)];
          passwordParts.push(lowerLetter);
        }
      }
      if (addUpperLetters) {
        for (let index = 0; index < numUpperLetters; index++) {
          const upperLetter =
            alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase();
          passwordParts.push(upperLetter);
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
    }
    shuffle(passwordParts);
    const password = passwordParts.join("");
    return password;
  } else {
    return prompt("Password length must be at least 8 characters!");
  }
}

// Write password to the #password input
function writePassword() {
  password = generateRandom(alphabet, numbers, symbols);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(passwordText);
}

//Not needed for now
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    const j = Math.floor(Math.random() * (index + 1));
    [array[index], array[j]] = [array[j], array[index]];
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
