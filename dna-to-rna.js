//Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

//Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

//Create a function which translates a given DNA string into RNA.

/*Pseudo-code
Create a function that takes in a string called dna
Use the replace method to replace all instances of 'T' with 'U'
Return the new string

Option 1: Using the js string.replace() method

FUNCTION DNAtoRNA(dna) 
    RETURN REPLACE 'T' WITH 'U'


Option 2: Using a for loop and an if statement:

FUNCTION DNAtoRNA(dna) 
    INIT rna TO ""
    FOR EACH character IN dna 
        IF character = 'T' THEN 
            SET rna = rna + 'U'
        ELSE 
            SET rna = rna + character
        ENDIF
    END FOR
    RETURN rna
END FUNCTION
*/

//Solution 1

// function DNAtoRNA (dna) {
//     return dna.replace('T','U')
// }

// console.log(DNAtoRNA("GCAT"))

//Solution 2

function DNAtoRNA(dna) {
    var rna = ""
    for (let i = 0; i < dna.length; i++){
        //Use == instead of == as this will change all chars to U
        if (dna[i] == 'T') {
            rna += 'U';
        } else {
            rna += dna[i];
        }
    }
    return rna;
}

console.log(DNAtoRNA("GCAT"))
