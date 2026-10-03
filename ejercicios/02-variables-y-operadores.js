// ============================================================
// Ejercicio 02 · Variables y operadores
// ============================================================
// En Colombia la tarifa general de IVA es 19%.
// La caja necesita mostrar cada precio con el IVA incluido.
//
// Crea la función calcularPrecioConIva(precio) que:
//   1. Guarde el IVA (0.19) en una constante
//   2. Calcule el precio + el IVA
//   3. Retorne el resultado redondeado con Math.round()
//
// Ejemplos:
//   calcularPrecioConIva(10000) → 11900
//   calcularPrecioConIva(4500)  → 5355
// ============================================================

function calcularPrecioConIva(precio) {
  const IVA = 0.19;
  let calc = precio + precio * IVA;
  return Math.round(calc);
}

// No borres esta línea: es la puerta por donde el test usa tu función
module.exports = { calcularPrecioConIva };
