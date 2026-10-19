let lista2 = new Set();
//do{
let nombre2;

do {
  nombre2 = prompt('Pon palabras');
  lista2.add(nombre2);
  const listArray = [...lista2];
  listArray.sort((palabra, palabra2) => palabra2.localeCompare(palabra, 'es'));

  console.log(listArray);
} while (nombre2 !== null && nombre2 !== '');
