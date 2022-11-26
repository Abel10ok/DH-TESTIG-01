const { suma, resta, multiplicacion, division, potencia } = require("../calc");

describe("test de la función suma", () => {
  it("Suma de 1 + 2 = 3", () => {
    expect(suma(1, 2)).toBe(3);
  });

  it("Suma de null + 2 = error", () => {
    expect(() => suma(null, 2)).toThrow("a y b deben ser números");
  });

  it("Suma de 1 + undefined = error", () => {
    expect(() => suma(1, undefined)).toThrow("a y b deben ser números");
  });

  it("Suma sin datos = error", () => {
    expect(() => suma()).toThrow("a y b deben ser números");
  });

  it("passes when value is NaN", () => {
    expect(NaN).toBeNaN();
    expect(1).not.toBeNaN();
  });
});

describe("test de la función resta", () => {
  it("Resta de 1 - 2 = -1", () => {
    expect(resta(1, 2)).toBe(-1);
  });

  it("Resta de null - 2 = error", () => {
    expect(() => resta(null, 2)).toThrow("a y b deben ser números");
  });

  it("Resta de 1 - undefined = error", () => {
    expect(() => resta(1, undefined)).toThrow("a y b deben ser números");
  });

  it("Resta sin datos = error", () => {
    expect(() => resta()).toThrow("a y b deben ser números");
  });

  it("passes when value is NaN", () => {
    expect(NaN).toBeNaN();
    expect(1).not.toBeNaN();
  });
});

describe("test de la función multiplicación", () => {
  it("Multiplicación de 1 * 2 = 2", () => {
    expect(multiplicacion(1, 2)).toBe(2);
  });

  it("Multiplicación de null * 2 = error", () => {
    expect(() => multiplicacion(null, 2)).toThrow("a y b deben ser números");
  });

  it("Multiplicación de 1 * undefined = error", () => {
    expect(() => multiplicacion(1, undefined)).toThrow(
      "a y b deben ser números"
    );
  });

  it("Multiplicación sin datos = error", () => {
    expect(() => multiplicacion()).toThrow("a y b deben ser números");
  });

  it("passes when value is NaN", () => {
    expect(NaN).toBeNaN();
    expect(1).not.toBeNaN();
  });
});

describe("test de la función división", () => {
  it("División de 1 / 2 = 0.5", () => {
    expect(division(1, 2)).toBe(0.5);
  });

  it("División de null / 2 = error", () => {
    expect(() => division(null, 2)).toThrow("a y b deben ser números");
  });

  it("División de 1 / undefined = error", () => {
    expect(() => division(1, undefined)).toThrow("a y b deben ser números");
  });

  it("División de 1 / 0 = NO PODES DIVIDIR POR CERO", () => {
    expect(() => division(1, 0)).toThrow("No se puede dividir por 0");
  });

  it("División sin datos = error", () => {
    expect(() => division()).toThrow("a y b deben ser números");
  });

  it("passes when value is NaN", () => {
    expect(NaN).toBeNaN();
    expect(1).not.toBeNaN();
  });
});

describe("test de la función potencia", () => {
  it("potencia de 2 ** 3 = 8 ", () => {
    expect(potencia(2, 3)).toBe(8);
  });

  it("Potencia de base 0 ** >0", () => {
    expect(potencia(0, 2)).toBe(0);
  });

  it("Potencia de 1 ** undefined = error", () => {
    expect(() => potencia(1, undefined)).toThrow("a y b deben ser números");
  });

  it("Potencia de 1 ** 0 = NO PODES DIVIDIR POR CERO", () => {
    expect(potencia(2, 0)).toBe(1);
  });

  it("División sin datos = error", () => {
    expect(() => potencia()).toThrow("a y b deben ser números");
  });

  it("passes when value is NaN", () => {
    expect(NaN).toBeNaN();
    expect(1).not.toBeNaN();
  });
});
