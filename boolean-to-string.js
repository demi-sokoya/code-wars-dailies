/*Pseudo-code for Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
FUNCTION boolToWord(boolean)
    IF boolean THEN
        RETURN "Yes"
    ELSE
        RETURN "No"
    ENDIF
END FUNCTION
 *      
*/

function boolToWord(bool) {
    if (typeof bool !== 'boolean') {
        return "Please use a boolean value(true or false)"
    } 

    return bool ? "Yes" : "No"
    
}
console.log(boolToWord(true))
