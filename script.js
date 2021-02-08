//finder hvilket index et bestemt ord på. i dette tilfælde starter dog på index 30

const paragraph =
  "The quick brown fox jumps over the  lazy dog. If the dog barked, was it really lazy?";
const searchTerm = "dog";
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(
  `The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`
);

//finder det index hvor dog bliver brugt anden gang
console.log(
  `The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(
    searchTerm,
    indexOfFirst + 1
  )}`
);

//checker om sætningen indeholder "."
const includes = paragraph.includes(".");
console.log(includes);

//upper case letters https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
const capital = paragraph.toUpperCase();
console.log(capital);

//lower case letters https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
const lowerCase = paragraph.toLowerCase();
console.log(lowerCase);

//replace something with something
console.log(paragraph.replace("dog", "monkey"));
const replace = paragraph.replace("dog", "monkey");
console.log(replace);

//check if a sentence end with ...
const check = paragraph.endsWith("lazy?");
console.log(check);

//check if a sentence contains something
const containsHyphen = paragraph.includes("-");
console.log(containsHyphen);

const removeSpaces = paragraph.replace("   ", "");
console.log(removeSpaces);
