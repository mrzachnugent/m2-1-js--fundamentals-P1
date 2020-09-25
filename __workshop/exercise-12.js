const exercise13 = require("./exercise-13");

function exercise12() {
  // Exercise 12
  //
  // Write a program that generates a list of all prime numbers from 1 and 200.
  // Prime numbers have exactly two factors.
  // A prime number is a number that is ONLY divisible by 1 and itself.
  //
  // 6 -> NOT prime (2 * 3)
  // 7 -> PRIME (can only be divided by 1 and 7, no other numbers)
  // 12 -> NOT prime (3 * 4, 2 * 6)
  // 37 -> PRIME ()
  //
  //
  // EXPECTED OUTPUT: [2, 3, 5, 7, 11, 13, ...]
  //
  // Write code between the lines (below)
  // -----------------------------------------------------------------

  const belowTen = () => {
    for (let num2 = 1; num2 < 8; num2++) {
      if (num2 !== 1 && num2 !== 4 && num2 !== 6) {
        console.log(num2);
      }
    }
  };

  const tenPlus = () => {
    for (let num1 = 4; num1 < 200; num1++) {
      if (
        num1 % 3 !== 0 &&
        num1 % 7 !== 0 &&
        num1 % 2 !== 0 &&
        num1 % 5 !== 0 &&
        num1 !== 121 &&
        num1 !== 143 &&
        num1 !== 169 &&
        num1 !== 187
      ) {
        console.log(num1);
      }
    }
  };

  belowTen();
  tenPlus();

  // console.log(belowTen(), tenPlus());
  //add 2 3 5 7
  //remove 121 143 169 187
  // -----------------------------------------------------------------
  // Write code between the lines (above)
  //
  //
  //
  //
  //
  //
}

// Once you are done type the following in the terminal to test your answer(s).
// yarn test exercise-12

module.exports = exercise12;
