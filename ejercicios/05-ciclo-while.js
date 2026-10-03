// ============================================================
// Ejercicio 05 · Ciclo while
// ============================================================
// El administrador quiere saber para cuántos días alcanza el inventario.
//
// Crea la función diasDeInventario(stock, ventaDiaria) que,
// con un ciclo while, reste la venta diaria al stock día a día
// y cuente los días hasta que el stock llegue a 0 o menos.
//
// Caso especial: si ventaDiaria es 0 o menor, el stock nunca
// se acaba → retorna -1 (¡sin esto tendrías un ciclo infinito!)
//
// Ejemplos:
//   diasDeInventario(100, 30) → 4   (100 → 70 → 40 → 10 → -20)
//   diasDeInventario(0, 10)   → 0
//   diasDeInventario(50, 0)   → -1
// ============================================================

function diasDeInventario(stock, ventaDiaria) {
  if (ventaDiaria <= 0) {
    return -1;

  }
  let dia = 0;
  while (stock > 0) {
    stock = stock - ventaDiaria;
    dia = dia + 1;
  }
  return dia;
}

// No borres esta línea: es la puerta por donde el test usa tu función
module.exports = { diasDeInventario };
