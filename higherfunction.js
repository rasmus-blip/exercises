const people = ["Harry", "Ron", "Hermione", "Neville"];

testParms();

function testParms(a, b, c, d) {
  console.log(`a:${a}, b:${b}, c: ${c}, ${d}`);
}

people.forEach(testParms);

people.forEach((person) => testParms(person));
