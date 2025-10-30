//Prompt: Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
function getGrade(s1, s2, s3) {
    var average = (s1 + s2 + s3) / 3

    switch (average) {
        case (average >= 90):
            console.log("A")
            break;

        case (average >= 80):
            console.log("B")
            break;

        case (average >= 70):
            console.log("C")
            break;

        case (average >= 60):
            console.log("D")
            break;

        default:
            console.log("F")
            break;
    }
}