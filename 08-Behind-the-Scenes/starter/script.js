'use strict';
<<<<<<< HEAD
// const jones = {
//   name: 'sohan',
//   year: 1991,
//   calcAge: function () {
//     console.log(2031 - this.year);

//     const isMadila = () => {
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMadila();
//   },
//   greet: function () {
//     console.log(`hey${this.name}`);
//   },
// };
// jones.greet();
// jones.calcAge();
// const add = function (a, b) {
//   console.log(a + b);
//   console.log(arguments);
// };

// add(2, 5, 3, 11, 2);

const obj = {
  name: 'Jahidul',
  age: 23,
  job: 'software engineer',
  family: ['santa', 'ammu'],
};

const obj2 = { ...obj };
// const obj2 = Object.assign({}, obj);
obj.age = 24;
obj.family.push('abbu');
console.log('obj', obj);
console.log('obj2', obj2);
=======
// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   //   console.log('BirthYear:', age);

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);
//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millennial = true;
//       const firstName = 'Steven';
//       const str = `Oh, and you're a millennial, ${firstName}`;

//       console.log(str);
//       function add(a, b) {
//         return a + b;
//       }

//       output = 'NEW OUTPUT!';
//     }
//     console.log(millennial);
//     // console.log(add(2, 3));
//     console.log(output);
//   }
//   printAge();
//   return age;
// }
// const firstName = 'Jonas';

// calcAge(1991);

// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'jonas';
// let job = 'teacher';
// const year = 1991;

// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// // function declaration
// function addDecl(a, b) {
//   return a + b;
// }

// // function expression
// const addExpr = function (a, b) {
//   return a + b;
// };

// // arrow function
// const addArrow = (a, b) => a + b;

// if (!numProducts) deleteShoppingCart();
// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('Deleting shopping cart...');
// }

// this keyword

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1991);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// jonas.calcAge();

// const sohan = {
//   year: 1980,
// };
// sohan.calcAge = jonas.calcAge;
// sohan.calcAge();

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: '27',
};

const jessica2 = Object.assign({}, jessica);

console.log(jessica2);
>>>>>>> 1c899b8c3b2244c847e9276851f33d66483edc2c
