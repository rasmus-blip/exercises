"use strict";

let name1 = "Brian O'Conner";
let name2 = "Rasmus \u{1f385}";

const longline =
  "a very very very very very very \n very very very long line that spans, \
 across the width of the editor very very very very very loooong";

const name = "Peter";
const drink = "Coca Cola";

const text = `hello ${name}, would you 

like a ${drink}?`;

console.log(text);

const navn = "Rasmus";
const pet = "hamster";
const petname = "Fluff";

console.log(`My name is ${navn}.
I have a ${pet} called ${petname}
`);
