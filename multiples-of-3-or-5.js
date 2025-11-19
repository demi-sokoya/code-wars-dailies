// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Additionally, if the number is negative, return 0.
// Note: If a number is a multiple of both 3 and 5, only count it once.

/**
 * #Pseudo-code
 * ------------
 *
 * FUNCTION getMultiplesOfThreeAndFive (number)
 *      SET array TO []
 *      IF number is LESS THAN 0 THEN
 *          RETURN 0
 *      ENDIF
 *
 *      FOR (i = number; i > 0; i--)
 *          IF i is DIVISIBLE by 3 AND i is DIVISIBLE by 5 THEN
 *              APPEND i to array
 *          ELSE IF i is DIVISIBLE by 3 THEN
 *              APPEND i to array
 *          ELSE IF i is DIVISIBLE by 5 THEN
 *              APPEND i to array
 *          ENDIF
 *      END FOR
 *
 *      RETURN array
 * END FUNCTION
 */

function getMultiplesOfThreeAndFive(number) {
  let array = [];

  if (number < 0) {
    return 0;
  }
  //Checking for divisibility and adding to the array
  for (i = number - 1; i > 0; i--) {
    if (i % 3 === 0 && i % 5 === 0) {
      array.push(i);
    } else if (i % 5 === 0) {
      array.push(i);
    } else if (i % 3 === 0) {
      array.push(i);
    }
  }

  //Sum up all values in the array using reduce

  let sum = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  console.log(array);
  return sum;
}

console.log(getMultiplesOfThreeAndFive(10));
