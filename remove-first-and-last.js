//Your goal is to write a function that removes the first and last characters of a string. You're given one parameter, the original string.

//Important: Your function should handle strings of any length ≥ 2 characters. For strings with exactly 2 characters, return an empty string.

//Pseudo-code:
// FUNCTION removeChar(str)
//     IF LENGTH(str) LESS THAN OR EQUALS 2 THEN
//         RETURN empty string
//     ENDIF
//     RETURN SUBSTRING of str FROM position 1 TO position LENGTH(str) - 2
// END FUNCTION

function removeChar(str) {
  if (str.length <= 2) {
    return "";
  }

  return str.slice(1, str.length - 1);
}

console.log(removeChar("Charger"));
