/* 15- Bien! Ahora cambia lo que sea que necesites cambiar para
 hacer que el algoritmo imprima números enteros aleatorios 
 entre 1 y 6. */

 function getRandomInt()
{
	let randomNumber = Math.floor(Math.random() * 6) + 1;
	return randomNumber;
}
console.log(getRandomInt());