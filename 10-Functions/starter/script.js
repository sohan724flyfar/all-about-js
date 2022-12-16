'use strict';

// const bookings = [];

// const createBooking = (
//   flightNum,
//   numPassengers = 1,
//   price = 1000 * numPassengers
// ) => {
//   const booking = { flightNum, numPassengers, price };
//   bookings.push(booking);
//   console.log(bookings);
// };

// createBooking('DAC2022', 2);
// createBooking("CXB2030",undefined,10000)

// console.log(Math.round(Math.random() * 10000));
// console.log(Math.trunc(Math.random() * 10000));

// const oneWord = function (str) {
//   return str.replace(/ /g, '');
// };

// const upperOneWord = function (str) {
//   const [first, ...rest] = str.split(' ');
//   return [first.toUpperCase(), ...rest].join();
// };

// const transform = function (str, fn) {
//   console.log(`Original String:${str}`);
//   console.log(`Transformed String: ${fn(str)}`);

//   console.log(`Transformed By: ${fn.name}`);
// };

// transform('my name is jahidul islam', upperOneWord);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const welcome = greet('Hello👋');

// welcome('Jahidul Islam Sohan');

// const greet = greeting => name => console.log(`${greeting} ${name}`);

// greet('Hi')('sohan');

const bimanBangladesh = {
  airline: 'Biman Bangladesh',
  iataCode: 'BG',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

// bimanBangladesh.book(120, 'sohan');
// bimanBangladesh.book(121, 'Anika');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = bimanBangladesh.book;

const flightData = [24, 'jahidul islam sohan'];
//todo: call method
// book.call(eurowings, 122, 'Jahid');
// book.call(eurowings, ...flightData);
// console.log(eurowings);

//todo:apply method
// book.apply(eurowings, flightData);
// console.log(eurowings);

//todo:bind method
const bookEW = book.bind(eurowings);
const boolEW24 = book.bind(eurowings, 24);
// bookEW(22, 'jarin tasnim anika(ANNI)');
// boolEW24('Jahidul Islam Sohan');
// console.log(eurowings);

const addVAT = rate => value => console.log(value + value * rate);

// addVaAT(0.1)(500);
