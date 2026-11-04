it('Debe mostrar la tarea creada', () => {
  cy.visit('http://localhost:3000');

  cy.get('#email').type('admin@test.com');
  cy.get('#password').type('123');

  cy.contains('button', 'Ingresar').click();

  cy.get('#taskTitle').type('Comprar pan');
  cy.contains('button', 'Crear tarea').click();

  // ERROR INTENCIONAL: se creó "Comprar pan" pero se busca "Comprar leche"
  cy.contains('#taskList li', 'Comprar leche').should('exist');
});
