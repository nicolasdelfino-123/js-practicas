/* 14- Actualiza el código de la función para hacer que devuelva 
un número entero (no decimales) entre 1 y 10. */

function getRandomInt()
{
	let randomNumber = Math.floor(Math.random() * 10) + 1;
	return randomNumber;
}


console.log(getRandomInt());
