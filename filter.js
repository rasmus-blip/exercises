const animals = [
  {
    name: "Mandu",
    type: "cat",
  },
  {
    name: "Mia",
    type: "cat",
  },
  {
    name: "Leeloo",
    type: "dog",
  },
  {
    name: "ScoobyDoo",
    type: "dog",
  },
];

function isCat(animals) {
  if (animals.type === "cat") {
    return true;
  } else {
    return false;
  }
}

// function all(animals) {
//   return true;
// }

// function none(animals) {
//   return false;
// }

// console.log(animals.filter(all));
// animals.filter(all);
// console.log(animals.filter(none));
// animals.filter(none);

const onlyCats = animals.filter(isCat);
console.log(onlyCats);

function isDog(animals) {
  if (animals.type === "dog") {
    return true;
  } else {
    return false;
  }
}

const onlyDogs = animals.filter(isDog);
console.log(onlyDogs);
