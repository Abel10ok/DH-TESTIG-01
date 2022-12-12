const { generateText, validateInput, createElement } = require("../util");
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

describe("validar funcion input", () => {
  test("validar input funcion text", () => {
    const text = validateInput("texto");
    expect(text).toBeTruthy;
  });

  // PRUEBA MIA NO SE BIEN
  test("validar input funcion vacio", () => {
    const text = validateInput("");
    expect(text).toBe(false);
  });

  test("validar input funcion vacio con espacios", () => {
    const text = validateInput("  ");
    expect(text).toBe(false);
  });

  test("validar input funcion con String + espacio", () => {
    const text = validateInput("a bel ");
    expect(text).toBe(true);
  });
});

// ----------------------------------
describe("validar funcion creatElement", () => {
  test("validar creatElement funcion vacia", () => {
    const text = createElement("li", "abel", "user-item");
    const text2 = createElement("li", null, "user-item");
    expect(text.textContent).toMatch(/abel/);
    // expect(text.textCont).toBe(" ");
  });
});
