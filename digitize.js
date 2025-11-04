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