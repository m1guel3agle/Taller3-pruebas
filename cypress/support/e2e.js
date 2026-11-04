// Error intencional en test1.cy.js: demuestra un fallo en el CI (Cypress).
// Si un test falla, esperamos unos segundos antes de terminar para que el
// video de Cypress alcance a mostrar claramente el estado en rojo del error
// (por defecto la grabación corta casi al instante en que falla el test).
afterEach(function () {
  if (this.currentTest.state === 'failed') {
    cy.wait(4000);
  }
});
