//Prompt: Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
function getGrade(s1, s2, s3) {
    let average = (s1 + s2 + s3) / 3

    switch (true) {
        case (average >= 90):
            return 'A'
            break;

        case (average >= 80):
            return 'B'
            break;

        case (average >= 70):
            return 'C'
            break;

        case (average >= 60):
            return 'D'
            break;

        default:
            return 'F'
            break;
    }
}

getGrade( 0, 90, 90)