let nombre;
let lista = [];
let contador2 = 1;

do {
  nombre = prompt('Pon palabras');
  if (nombre !== null && nombre !== '') {
    lista.push(nombre);
  } else {
    contador2--;
  }
} while (contador2 > 0);

function contador(lista) {
  let mapa = new Map(); //C PALABRA V REPETIDO

  for (nombre of lista) {
    let contador;

    if (mapa.has(nombre)) {
      contador = mapa.get(nombre);
      contador += 1;

      mapa.set(nombre, contador);
    } else {
      contador = 1;
      mapa.set(nombre, contador);
    }
  }

  return mapa;
}

console.log(contador(lista));
