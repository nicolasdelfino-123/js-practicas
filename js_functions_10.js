// https://automatic-dollop-7q5v5pqpgpvcwrj9.github.dev/
/*Crea una función flecha llamada rapid que tomará un string.

Recorre (loop) el texto y elimina todas las vocales.

Coloca en mayúscula todas las consonantes.

Devuelve el nuevo string. */
// Your code goes here
const rapid = (myString) => {
    let consonants = [];

    for(let letter of myString.toLowerCase()) {
        if(['a','e','i','o','u'].includes(letter) == false)
            consonants.push(letter.toUpperCase())
    }
    return consonants.join(''); 
}

// Work above this line; do not change code below
let str = "John";
console.log(rapid(str));
