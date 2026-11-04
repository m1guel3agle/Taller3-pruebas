describe('Validación de vulnerabilidad XSS', () => {

  it('No debe interpretar HTML ingresado por el usuario como markup', () => {

    cy.visit('http://localhost:3000');

    // Login
    cy.get('#email').type('admin@test.com');
    cy.get('#password').type('123');
    cy.contains('button', 'Ingresar').click();

    // Crear tarea con HTML
    cy.get('#taskTitle').type('<h1>TAREA MALICIOSA</h1>');
    cy.contains('button', 'Crear tarea').click();

    // La app usa textContent (no innerHTML), así que el HTML NO debe renderizarse
    cy.get('#taskList h1').should('not.exist');

    // El contenido debe aparecer como texto plano, no como markup interpretado
    cy.contains('#taskList li', '<h1>TAREA MALICIOSA</h1>').should('exist');

  });

});
