// ============================================================
// Ejercicio 06 · Funciones (reutilizar lo que ya construiste)
// ============================================================
// Ahora la caja genera la factura final. No vas a repetir código:
// vas a REUTILIZAR tus funciones de los ejercicios 02 y 03.
//
// Crea la función calcularTotalFactura(subtotal) que:
//   1. Calcule el descuento con calcularDescuento(subtotal)
//   2. Se lo reste al subtotal
//   3. A ese valor le aplique el IVA con calcularPrecioConIva()
//   4. Retorne el resultado
//
// Ejemplos:
//   calcularTotalFactura(120000) → 128520   (120000 - 12000 = 108000 + IVA)
//   calcularTotalFactura(30000)  → 35700    (sin descuento, solo IVA)
//
// Importante: este ejercicio solo pasa si el 02 y el 03 están bien.
// ============================================================

// Estas dos líneas traen tus funciones de los ejercicios 02 y 03
const { calcularPrecioConIva } = require("./02-variables-y-operadores");
const { calcularDescuento } = require("./03-condicionales");

function calcularTotalFactura(subtotal) {
  let cd = calcularDescuento(subtotal);
  let s = subtotal - cd;
  let p = calcularPrecioConIva(s);
  return p;
}

// No borres esta línea: es la puerta por donde el test usa tu función
module.exports = { calcularTotalFactura };
