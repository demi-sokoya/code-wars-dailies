// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.
/*
Pseudo-code
--------------
SET areaOrPerimeter TO a function that takes (l, w)
    IF l = w THEN
        RETURN l * w
    ELSE
        RETURN 2 * (l + w)
    ENDIF
END FUNCTION
*/

const areaOrPerimeter = function(l, w){
    if(l === w){
        return l * w
    } else {
        return 2 * (l + w)
    }
}

console.log(areaOrPerimeter(3, 3))
console.log(areaOrPerimeter(3, 4))