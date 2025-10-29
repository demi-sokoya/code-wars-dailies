//Creating a function to take an array of words and turn it into a sentence

/*
#Pseudo-code
for each word in words {
    create a sentence
    sentence = sentence + " " + word in words
    return sentence;
}
    We also need a way to take care of the starting space 
    sentence.substring(1, sentence.length)

    finally call the function giving it an array of words
*/

var sentence;
function smash(words) {
    //For each word in words
    for(let i = 0; i <= words.length; i++) {
        sentence = sentence + " " + words[i]
        return sentence;
    }

    var result = sentence.substring(1, sentence.length);
    return result;

}

console.log(smash(["A", "very", "short", "sentence."]))