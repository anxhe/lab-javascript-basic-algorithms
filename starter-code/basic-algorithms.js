// Names and Input

const nameInput = (driver, gps) => {
  console.log("The driver's name is " + driver);
  console.log("The navigator's name is " + gps);
}

//Conditionals

const size = (name1, name2) => {
  let longest,
      equally;

  if (name1.length > name2.length) {
    longest = name1.length;
    console.log("The drivers has the longest name, it has " + longest + " characters");

  }
  else if (name2.length > name1.length) {
    longest = name2.length;
    console.log("The drivers has the longest name, it has " + longest + " characters");
  }
  else {
    equally = name2.length;
    console.log('wow, you both got equally long names, ' + equally + 'characters!');
  }
}


// Lorem ipsum generator

const space_string = (driver) => {
  return driver.toUpperCase().split('').join(' ');
}

const reverseString = (gps) => {
  return gps.split('').reverse().join('');
}

//lexicographic order

const lexicographic = (name1, name2) => {
    if (name1 < name2){
      return name1
    }
    return name2
}

//if two name is polindromos

const stringPalindromo = (str) => {
  let stringReverse = reverseString(str).toUpperCase();
      string = str.toUpperCase();
  if (string == stringReverse && string == string) {
     return console.log("It's palindrome");
  }
  console.log("No es un palindromo");
}

stringPalindromo("Ana");
stringPalindromo("Ansadsd");
