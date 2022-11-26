function suma(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("a y b deben ser números");
  }
  return a + b;
}

function resta(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("a y b deben ser números");
  }
  return a - b;
}

function multiplicacion(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("a y b deben ser números");
  }
  return a * b;
}

function division(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("a y b deben ser números");
  }
  if (b === 0) {
    throw new Error("No se puede dividir por 0");
  }

  return a / b;
}

function potencia(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("a y b deben ser números");
  }
  // if (a === 0) {
  //   return 1;
  // }
  // if (a !== 0 && b === 0) {
  //   return 0;
  // }

  return a ** b;
}

module.exports = { suma, resta, multiplicacion, division, potencia };
