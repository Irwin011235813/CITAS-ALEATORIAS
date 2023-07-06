let botonElem = document.getElementById('boton-cambiar-cita');
let citaElem = document.getElementById('cita');
let autorElem = document.getElementById('autor');

let citas = [
	{
		'autor' : 'Buda Gautama',
		'texto' : 'No hay camino hacia la felicidad, la felicidad es el camino.'
	},
	{
		'autor' : 'Buda Gautama',
		'texto' : 'Tú mismo, tanto como cualquier otra persona en el universo entero, mereces tu amor y afecto.'
	},
	{
		'autor' : 'Buda Gutama',
		'texto' : 'El viaje de mil millas comienza con un solo paso.'
	},
	{
		'autor' : 'Lao Tze',
		'texto' : 'El que domina a los demás es fuerte, pero el que se domina a sí mismo es poderoso.'
	},
	{
		'autor' : 'Lao Tze',
		'texto' : 'La simplicidad, la paciencia y la compasión son tus mayores tesoros.'
	},
	{
		'autor' : 'Confucio',
		'texto' : 'Dondequiera que vayas, ve con todo tu corazón.'
	},
	{
		'autor' : 'Confucio',
		'texto' : 'No importa lo lento que vayas, siempre y cuando no te detengas.'
	},
	{
		'autor' : 'Sun Tzu',
		'texto' : 'Conócete a ti mismo y a tu enemigo, y nunca serás derrotado en cien batallas.'
	},
	{
		'autor' : 'Sun Tzu',
		'texto' : 'La mejor victoria es vencer sin combatir.'
	},
	{
		'autor' : 'Bertrand Russell',
		'texto' : 'El único camino hacia el conocimiento es la duda.'
	}
	];

function generarEnteroAleatorio(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}


function cambiarCita(){
let indiceAleatorio = generarEnteroAleatorio( 0, citas.length);
citaElem.innerText = `"${citas[indiceAleatorio].texto}"`;
autorElem.innerText = citas[indiceAleatorio].autor;
}

cambiarCita();

botonElem.addEventListener('click', cambiarCita); 