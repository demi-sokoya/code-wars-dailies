//Complete the solution so that it reverses the string passed into it.

function solution(str){
    let reverse = ""
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i] 
    }
    return reverse;
}

console.log(solution("DRINK"))