const { generateText, validateInput } = require("../util");

describe("Pruebas de salidas de datos", () => {
  test("salida de nombre y edad", () => {
    const text = generateText("Abel", 25);
    expect(text).toBe("Abel (25 years old!)");
  });

  it("salida de nombre y edad", () => {
    const text = generateText("", null);
    expect(text).toBe(" (null years old!)");
  });

  test("salida de nombre y edad", () => {
    const text = generateText();
    expect(text).toBe("undefined (undefined years old!)");
  });
});

// -------------------------------------
describe("validar funcion", () => {
  test("validar input funcion text", () => {
    const text = validateInput("texto");
    expect(text).toBeTruthy;
  });

  // PRUEBA MIA NO SE BIEN
  test("validar input funcion vacio", () => {
    const text = validateInput("");
    expect(text).toBeTruthy;
  });
});
