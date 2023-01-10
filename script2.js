class Selection {
    constructor(lowercase, uppercase, numbers, symbols) {
      this.lowercase = lowercase;
      this.uppercase = uppercase;
      this.numbers = numbers;
      this.symbols = symbols;
    }
    
    addLowerCase(){
      console.log(`add lowercase is: ${addLowerCase()}`);
      return this.lowercase;
    }
  }
  
  const numList = [1, 2,3,4,5,6,7,8,9,0];
  const alphabet = ["a","b","c","d","e","f","g","h","i",];
  const chars = ["!","@","#","$"];
  
  
  const parameter = new Selection(confirm("lowercase?"), confirm("uppercase?"),confirm("numbers?"),confirm("special characters?"));
  console.log(`parameter is ${parameter}`);
  console.log(Object.values(parameter).at(0));
  
  start();
  
  function generateRandom() {
    let passwordParts = [];
    //const test = new Selection();
    //if test.lowercase
    const lowerCaseVal = Object.values(parameter).at(0);
    //console.log(`lower case val is ${lowerCaseVal}`);
    switch (Object.values(parameter).at(0)) {
      case true:
        const numLowerLetters = (getRandomInt(1,9));
        console.log(numLowerLetters);
        for (let i=0; i<numLowerLetters; i++) {
          const lowerLetter = alphabet[Math.floor(Math.random()*alphabet.length)];
          passwordParts.push(lowerLetter);
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
    console.log(`your password is: ${password}`);
    return password;
  }
  
  
  function getRandomInt(min, max) {
    min= Math.ceil(min);
    max= Math.floor(max);
    return Math.floor(Math.random()* (max-min)+min);
  }
  
  function shuffle(array) {
    for (let index=array.length -1; index > 0; index--){
      const j =Math.floor(Math.random() * (index +1));
      [array[index], array[j]] = [array[j], array[index]];
    }
  }
  
  function start() {
    generateRandom(parameter);
  }