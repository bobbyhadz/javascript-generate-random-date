// EXAMPLE 1 - How to generate a random Date in JavaScript

function generateRandomDate(from, to) {
  return new Date(
    from.getTime() +
      Math.random() * (to.getTime() - from.getTime()),
  );
}

console.log(
  generateRandomDate(new Date(2023, 0, 1), new Date()),
);
console.log(
  generateRandomDate(new Date(2000, 3, 20), new Date()),
);
console.log(
  generateRandomDate(new Date(2010, 5, 25), new Date()),
);

// ------------------------------------------------------------------

// // EXAMPLE 2 - Formatting the randomly generated dates

// function generateRandomDate(from, to) {
//   return new Date(
//     from.getTime() +
//       Math.random() * (to.getTime() - from.getTime()),
//   );
// }

// console.log(
//   generateRandomDate(
//     new Date(2023, 0, 1),
//     new Date(),
//   ).toLocaleDateString(),
// );
// console.log(
//   generateRandomDate(
//     new Date(2000, 3, 20),
//     new Date(),
//   ).toLocaleString(),
// );

// ------------------------------------------------------------------

// // EXAMPLE 3 - Setting default parameters for the start and end dates

// function generateRandomDate(
//   from = new Date(2023, 0, 1),
//   to = new Date(),
// ) {
//   return new Date(
//     from.getTime() +
//       Math.random() * (to.getTime() - from.getTime()),
//   );
// }

// console.log(generateRandomDate());
// console.log(generateRandomDate());
// console.log(generateRandomDate());

// ------------------------------------------------------------------

// // EXAMPLE 4 - Specifying the start and end times when generating the time

// function generateRandomDate(from, to) {
//   return new Date(
//     from.getTime() +
//       Math.random() * (to.getTime() - from.getTime()),
//   );
// }

// console.log(
//   generateRandomDate(
//     new Date(2023, 0, 1, 9, 30, 30),
//     new Date(2023, 0, 1, 10),
//   ),
// );

// console.log(
//   generateRandomDate(
//     new Date(2023, 0, 1, 9, 30, 30),
//     new Date(2023, 0, 1, 10),
//   ),
// );

// console.log(
//   generateRandomDate(
//     new Date(2023, 0, 1, 9, 30, 30),
//     new Date(2023, 0, 1, 10),
//   ),
// );
