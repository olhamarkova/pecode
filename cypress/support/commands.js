Cypress.Commands.add("goTo", (url) => {
  cy.visit(`${Cypress.env("url")}/${url}.php`);
});

Cypress.Commands.add("login", (username, password) => {
  cy.get("input[name='username']").type(username);
  cy.get("input[name='password']").type(password);
  cy.get("input[type='submit']").click();
});
