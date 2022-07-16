// console.log(1);

// const arr = [1, 2, 3, 5, 6, 6, 8, 9, 8, 8];

// const arrObj = {
//   name: "Diana",
//   age: 88,
//   lvl: 80,
//   skills: {
//     speed: 10,
//     abc: {
//       defens: {
//         lol: 10,
//       },
//     },
//   },
// };

// console.log(arr[1]);

// const duplic = arr => [...arr, ...arr];
// duplic([1,2,3,4,5]);

// const companiName = "YOLO";
// let aboutYolo = {
//   sience: 1995,
//   director: "Nch",
//   anotherPeopleOfCompani: ["Alex", "Yra", "Serj"],
//   productCompani: {
//     theSystem: 100,
//     theWorld: 100,
//   },
//   teers: 200,
// };

// console.log(aboutYolo.anotherPeopleOfCompani[2]);

// alert("GO, HOME");

// const answers = [];

// const result = confirm("you ok?");
// answers[0] = prompt("dont lie, write what about you!");
// answers[1] = prompt("What your name?");
// answers[2] = prompt("How are you old?");
// answers[3] = prompt("What you like?");

// document.write(answers);

// const numberOfFilms = [];
// numberOfFilms[0] = prompt("how many movies have you already watched?");

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// const a = prompt("one of the last movie what did you saw?", ""),
//   b = prompt("how much do you rate it?", ""),
//   c = prompt("one of the last movie what did you saw?", ""),
//   d = prompt("how much do you rate it?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// const num = 50;

// if (num <= 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('a Lot');
// } else {
//     console.log('Ok!');
// }

// (num === 50) ? console.log('Ok!') : console.log('Error');

// const num = 50;

// switch (num) {
//   case 49:
//     console.log("No");
//     break;
//   case 100:
//     console.log("No");
//     break;
//   case 51:
//     console.log("Yes");
//     break;
//   default:
//     console.log("No dude");
//     break;
// }

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
//   console.log("Yami");
// } else {
//     console.log('Not Yami');
// }

// console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets)

// let johnReport, alexReport, semReport, mariaReport = 'done';

// console.log(johnReport || alexReport || semReport || mariaReport);

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i = 1;  i < 10; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }
//     console.log(i);
// }

// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j)
//     }
// }

let result = "";
const length = 6;

for (let i = 1; i <= length; i++) {
  for (let j = 0; j < i; j++) {
    result += "*";
  }
  result += "\n";
}

console.log(result);
