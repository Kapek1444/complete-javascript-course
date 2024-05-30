"use strict";

/* 
let hasDriversLicense = false;
const passTest = true;

if (passTest) {
  hasDriversLicense = true;
}
if (hasDriversLicense) console.log("shit");



function logger() {
  console.log(`my name is Karol`);
}

logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(3, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);



function calcAge1(birthYear) {
  // const age = 2037 - birthYear;
  return 2037 - birthYear;
}

const age1 = calcAge1(1993);
console.log(age1);

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1992);

console.log(age1, age2);



const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  //   return retirement;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1991, "Maciek"));
console.log(yearsUntilRetirement(1993, "Karol"));




function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
  return juice;
}

console.log(fruitProcessor(3, 2));

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement;
  } else {
    console.log(`${firstName} has aready retired`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1991, "karol"));
console.log(yearsUntilRetirement(1951, "karol"));

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(85, 54, 41);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas}`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win ${avgKoalas} vs ${avgDolphins}`);
  } else {
    console.log(`No team wins...`);
  }
};

checkWinner(scoreDolphins, scoreKoalas);


const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1992, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = " Jay";
console.log(friends);

const firstName = "Karol";
const karol = [firstName, "Kalaska", 2037 - 1993, "teacher", friends];

console.log(karol);

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];

console.log(ages);


const friends = ["Michael", "Steven", "Peter"];

const newLength = friends.push("Jay");

console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));


const bills = [125, 555, 44];
const tips = [];
const totals = [];

const calcTip = (bill) => {
  if (bill >= 50 && bill <= 300) {
    return tips.push(bill * 0.15), totals.push(bill + bill * 0.15);
  } else {
    return tips.push(bill * 0.2), totals.push(bill + bill * 0.2);
  }
};
calcTip(bills[0]);
calcTip(bills[1]);
calcTip(bills[2]);
console.log(tips);
console.log(totals);


const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Steven", "Peter"],
};

console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";

console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

// const interestedIn = prompt("What do you want to know about Jonas? ");
// console.log(jonas[interestedIn]);

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log(`wrong request`);
// }

jonas.location = "Port au Prince";
jonas["twitter"] = "@pedzio";
console.log(jonas);

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]}`
);


const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Steven", "Peter"],
  hasDriversLicense: false,

  //   calcAge: function (birthYear) {
  //     return 2037 - birthYear;
  //   },
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  //   calcAge: function () {
  //     return 2037 - this.birthYear;
  //   },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

jonas.calcAge();

console.log(jonas.age);

console.log(jonas.getSummary());



const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

console.log(mark.calcBMI(), john.calcBMI());

const higherBMI = () => {
  if (john.bmi > mark.bmi) {
    const johnH = `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`;
    return johnH;
  } else {
    const markH = `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`;
    return markH;
  }
};

console.log(higherBMI());



for (let rep = 1; rep <= 10; rep++) {
  console.log(`LIFT ${rep}`);
}




const jonas = [
  "Jonas",
  "Schmedmann",
  2037 - 1991,
  "teacher",
  ["michael", "peter", "steven"],
  true,
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i]);

  //   types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}
console.log(types);

const years = [1991, 2000, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  //   ages[i] = 2037 - years[i]; // Buczek nie poleca
  ages.push(2037 - years[i]);
}
console.log(ages);

console.log(`------- only strings ------`);
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;
  console.log(jonas[i], typeof jonas[i]);
}
console.log(`------- break with number ------`);
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;
  console.log(jonas[i], typeof jonas[i]);
}



const jonas = [
  "Jonas",
  "Schmedmann",
  2037 - 1991,
  "teacher",
  ["michael", "peter", "steven"],
];

const jonasBackwards = [];

for (let i = jonas.length - 1; i >= 0; i--) {
  jonasBackwards.push(jonas[i]);
}
console.log(jonasBackwards);

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`~~~~~~starting exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`weights repetition ${rep}`);
  }
}

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`weights repetition ${rep}`);
// }

let rep = 1;
while (rep <= 10) {
  console.log(`weights repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(dice);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`loop is closing`);
}



const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(tips[i] + bills[i]);
}
console.log(tips);
console.log(totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  let average = sum / arr.length;
  console.log(average);
};

calcAverage(totals);

*/
