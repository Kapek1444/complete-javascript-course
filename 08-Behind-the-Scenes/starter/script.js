'use strict';
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    let output = `${firstName} are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = '13';
      const firstName = 'Steven';
      const str = `Oh, and you are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      output = 'NEW OUTPUT';
    }
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Karol';
calcAge(1990);
// console.log(age);
// printAge();


console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// Example
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log(`All products are deleted!`);
}

var x = 1;
let y = 2;

console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAgeArrow(1991);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge(2017);

const f = jonas.calcAge;

console.log(f);

// f();


const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
    const greet = () => console.log(`Hey ${this.firstName}`);
    greet();
  },
};
jonas.calcAge();


let lastName = 'Wiliams';
let oldLastName = lastName;
lastName = ' Davis';

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

console.log(jessica2, jessicaCopy);
*/
