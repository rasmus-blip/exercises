"use strict";

// const str = "rasMus";

// capitalize(str);

// function capitalize(str) {
//   return (str =
//     str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase());
// }

// const cap = capitalize(str);

const str = null;

function capitalize(str) {
  const result =
    str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase();
  return result;
}

const fullname = "rasmus krogsSSSars møller";

const firstSpace = fullname.indexOf(" ");
const lastSpace = fullname.lastIndexOf(" ");

const firstName = capitalize(fullname.substring(0, firstSpace).trim());
const middleName = capitalize(fullname.substring(firstSpace, lastSpace).trim());
const lastName = capitalize(fullname.substring(lastSpace).trim());

const capitalizedName = firstName + middleName + lastName;

console.log(capitalizedName);
