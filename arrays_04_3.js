/*Agrega 2 números enteros aleatorios a la lista arr 
(no necesitas un loop o bucle) e imprime el array en la consola.
Pistas:
Puedes usar las funciones Math.random() y Math.floor() para obtener números aleatorios.

Debes usar la función .push() para agregar los números aleatorios al array. */


let arr = [4,5,734,43,45];

// Your code here, use the push() function and the 2 Math functions
let numberRandom1 = Math.floor(Math.random() * 100);
let numberRandom2 = Math.floor(Math.random() * 100);

arr.push(numberRandom1);
arr.push(numberRandom2);
console.log(arr);
