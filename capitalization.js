"use strict";

const str = "rasmuskFlahsdkfasjDJsjdkbsD";

capitalize(str);

function capitalize(str) {
  str = str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase();
  console.log(str);
}
