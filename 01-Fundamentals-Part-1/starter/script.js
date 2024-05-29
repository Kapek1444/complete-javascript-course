/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Karol");
console.log(23);

let firstName = "Karol";
console.log(firstName);

let jonas_matilda = "jm";
let $function = 27;

let person = "Karol";
let PI = 3.1215;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

// let job1 = "programmer";
// let job2 = "teacher";

console.log(myFirstJob);


let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof javascriptIsFun);
// console.log(typeof "Karol");
// console.log(typeof 23);

javascriptIsFun = "yes!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);

console.log(typeof null);


let age = 30;
age = 31; // reasigning value

const birthYear = 1991; // cannot reasign

var job = "programmer";
job = "teacher";

lastName = "Kałaska";
console.log(lastName);



const now = 2037;

const ageKarol = now - 1993;
const ageSarah = now - 2018;
console.log(ageKarol, ageSarah);

console.log(ageKarol * 2, ageKarol / 2);

const firstName = "Karol";
const lastName = "Kałaska";
console.log(firstName + " " + lastName);

let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x--; // x = x - 1 = 99
console.log(x);
console.log(ageKarol > ageSarah);
console.log(ageSarah >= 18);
console.log(ageSarah <= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


const now = 2037;
const ageKarol = now - 1993;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;

x = y = 25 - 10 - 5;

console.log(x, y);

const averageAge = (ageKarol + ageSarah) / 2;
console.log(ageKarol, ageSarah, averageAge);



const weightMark = 78;
const weightJohn = 95;
const heightMark = 1.69;
const heightJohn = 1.88;

const bmiMark = weightMark / heightMark ** 2;
console.log(bmiMark);
const bmiJohn = weightJohn / heightJohn ** 2;
console.log(bmiJohn);

const markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);



const firstName = "Karol";
const job = "teacher";
const birthYear = 1993;
const year = 2037;

const karol =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(karol);

const karolNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(karolNew);

console.log(
  "String with \n\
multiple  \n\
lines"
);

console.log(`String with
multiple
lines`);


const age = 13;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("You are legally allowed to apply!");
} else {
  const yearsLeft = 18 - age;
  console.log(`You need to wait ${yearsLeft} years to apply!`);
}

const checkAge = () =>
  isOldEnough
    ? console.log("You are legally allowed to apply!")
    : console.log(`You need to wait ${18 - age} years to apply!`);

checkAge();

const birthYear = 2001;

if (birthYear <= 2000) {
  let century = 20;
} else {
  let century = 21;
}

const century = () => (birthYear <= 2000 ? 20 : 21);
console.log(century());

// (() => (birthYear === 2008 ? alert("o kurwa") : alert("ja pierdole")))();   // self invoking arrow function



const massMark = 78;
const heightMark = 1.69;
const massJohn = 70;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

/* Write your code below. Good luck! 🙂 */

/*
if (BMIMark > BMIJohn) {
  let higherBMI = `Mark's BMI is higher than John's!`;
  console.log(higherBMI);
} else {
  let higherBMI = `John's BMI is higher than Mark's!`;
  console.log(higherBMI);
}

console.log(`Mark's BMI (${BMIMark}) is higher than John's BMI (${BMIJohn})!`);

const lowerBMI = () =>
  BMIMark > BMIJohn ? `Mark jest grubszy` : `John jest grubszy`;

console.log(lowerBMI());


const inputYear = "1991";
console.log(Number(inputYear) + 18);
console.log(Number("Karol"));
console.log(typeof NaN);

console.log(String(23));
console.log("Iam" * 2);

let n = "1" + 1;
n = n - 1;
console.log(n);



const age = 18;

if (age === 18) console.log("You just became an adult");
if (age == "18") console.log("You just became an adult");

const favoriteNumber = Number(prompt(`What's your favorite number`));

if (favoriteNumber === 23) {
  console.log("23 works fine");
} else if (favoriteNumber === 7) {
  console.log(`that's fine too i guess`);
} else {
  console.log(`not a correct number`);
}



const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense && hasGoodVision);

// const shoudlDrive = hasDriversLicense && hasGoodVision;
// if (shoudlDrive) {
//   console.log(`Sarah can drive`);
// } else {
//   console.log(`someoneelse shoudl`);
// }

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);

const shoudlDrive = hasDriversLicense && hasGoodVision;
if (shoudlDrive && !isTired) {
  console.log(`Sarah can drive`);
} else {
  console.log(`someoneelse shoudl`);
}




const day = prompt();

switch (day) {
  case "monday":
    console.log(`Plan course structure`);
    console.log(`Go to coding metup`);
    break;
  case "tuesday":
    console.log(`prepare theory videos`);
    break;
  case "wednesday":
  case "thursday":
    console.log(`Write code examples`);
    break;
  case "friday":
    console.log(`record videos`);
    break;
  case "saturday":
  case "sunday":
    console.log(`enjoy the weekend`);
    break;
  default:
    console.log(`not a valid day`);
}




const age = 15;
age >= 18 ? console.log(`suck the candy`) : console.log(`drink the alcohol`);

const drink = age >= 18 ? "winko" : "woda";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "winko";
} else {
  drink2 = "woda";
}

console.log(drink2);

*/
