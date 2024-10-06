/* 18- arregla el bucle while para que haga lo q se pide
Arregla el bucle while para que funcione y no genere un bucle infinito.

Imprime del 100 al 0.

Devuelve la variable counter cuando llegue a 0. */

//fix this function:
//fix this function:
function startCounting() {
	let counter = 100;
	while (counter <= 100) {
		counter--;
		console.log(counter);
	}

	return counter;
}

startCounting();




/* ARREGLADO MAL POR MI */
function startCounting() {
	let counter = 100;
	while (counter <= 100 && counter != -1) {
		
		console.log(counter);
		counter--;
	}

	return counter;
}

startCounting();

/* solución de ellos */

//fix this function:
function startCounting() {
	let counter = 101;
	while (counter > 0) {
		counter--;
		console.log(counter);
	}

	return counter;
}

startCounting();