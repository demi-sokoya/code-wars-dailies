//Prompt: Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
function getGrade(s1, s2, s3) {
    var average = (s1 + s2 + s3) / 3

    switch (average) {
        case (90 <= average <= 100):
            console.log("A")
            break;

        case (80 <= average < 90):
            console.log("B")
            break;

        case (70 <= average < 80):
            console.log("C")
            break;

        case (60 <= average < 70):
            console.log("D")
            break;
            
        default:
            console.log("F")
            break;
    }
}