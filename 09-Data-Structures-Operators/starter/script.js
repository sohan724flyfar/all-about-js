'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   order: function (starterIndex, mainIndex) {
//     return [this.categories[starterIndex], this.mainMenu[mainIndex]];
//   },
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   orderPizza: function (mainIngredient, ...restIngredient) {
//     console.log(mainIngredient, restIngredient);
//   },
// };

// // const { name, categories, openingHours } = restaurant;
// // console.log(name, openingHours, categories);

// // const {
// //   fri,
// //   fri: { open: sohan, close: anika },
// // } = openingHours;
// // console.log(fri, sohan, anika);

// // const arr = [1, 2, 3, 4, 5];
// const newArr = [6, 7, ...arr];
// // console.log(arr, newArr);
// // const [a, b, ...rest] = arr;
// // console.log(a, b, rest);
// const { sat, ...restDays } = { ...restaurant.openingHours };
// // console.log(sat, restDays);

// function add(...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   // console.log(sum);
// }

// add(2, 4, 6);
// add(1, 3, 5, 7, 9);
// add(1, 2, 3, 4, 5, 6, 7);

// // const x = [1, 2, 3, 4, 5];
// add(...x);

// // restaurant.orderPizza('mushrooms', 'spinach', 'onion');

// //short circuiting
// // console.log(3 || 'Sohan');
// // console.log(undefined || 'sohan');
// // console.log('' || 'sohan');
// // console.log(0 || 'sohan');
// // console.log(null || 'sohan');
// // console.log(true || 'sohan');
// // console.log(NaN || 'sohan');

// // const guest = 0;
// // console.log(guest || 10);
// // console.log(restaurant.guest ?? 10);

// //todo challenge no 01

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// //1
// const [player1, player2] = game.players;
// console.log(player1, player2);

// //2
// const [gk, ...players] = player1;
// console.log(gk, players);

// //3
// const allPlayers = [...player1, ...player2];
// console.log(allPlayers);

// //4
// const finalPlayers = [...player1, 'Thiago', 'Countinho', 'Perisic'];
// console.log(finalPlayers);

// //5
// const {
//   odds: { team1, x: draw, team2 },
// } = game;

// console.log(team1, draw, team2);

// //6
// const printGoals = function (...players) {
//   console.log(players);
//   console.log(`${players.length} goals were scored`);
// };
// printGoals(...game.scored);

// // 7.
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const [a, , b] = arr;
// let [first, , second] = restaurant.categories;
// // console.log(first, second);
// [second, first] = [first, second];
// // console.log(first, second);

// // console.log(restaurant.order(2, 1));
// const [one, two] = restaurant.order(2, 0);
// // console.log(one, two);
// const nested = [2, 3, [4, 5]];

// const [i, j, [k, l]] = nested;

// // console.log(i, j, k, l);

// const [x = 1, y = 1, z = 1] = [4, 2];
// // console.log(x, y, z);

const [players1, players2] = game.players;
// for (const [i, el] of players1.entries()) {
//   console.log(`${i}: ${el}`);
// }

const orderSet = new Set([
  'Burger',
  'Pizza',
  'Rice',
  'Chicken',
  'Beef',
  'Burger',
  'Pizza',
]);
// console.log(orderSet.has('Burger'));
// console.log(orderSet.add('Naru'));
// console.log(orderSet.delete('Rice'));
// console.log(orderSet);
const staff = ['Fahim', 'Afridi', 'Khadem', 'Fahim', 'Uzzal'];
const staffSet = [...new Set(staff)];
console.log(staffSet);

const fakeData = [
  { name: 'sohan', age: '20' },
  { name: 'sohan', age: '20' },
  { name: 'sohan', age: '20' },
  { name: 'sohan', age: '20' },
];

fakeData.map(i => (i.state = false));

console.log(fakeData);
