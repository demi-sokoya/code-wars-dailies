/*Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
Example(Input => Output)
35231 => [1,3,2,5,3]

---------------------

#Pseudo-code

FUNCTION digitize(n) 
    IF n < 0 THEN
        OUTPUT "Please give a non-negative number"
        RETURN empty array
    ENDIF
    
    SET digits TO empty array
    WHILE n > 0
        SET digit TO n MODULUS 10
        APPEND digit TO digits
        SET n TO FLOOR(n / 10)
    END WHILE
    
    RETURN digits
END FUNCTION
*/

function digitize(n) {
    if (n < 0) {
        console.log("Please give a non-negative number")
        return []
    }

    if (n === 0) {
        return [0]
    }

    let digits = []
    while (n > 0) { 
        let digit = n % 10
        digits.push(digit)
        n = Math.floor(n / 10)
    }

    return digits
}

console.log(digitize(123456))