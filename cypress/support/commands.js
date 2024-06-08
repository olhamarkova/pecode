Cypress.Commands.add("goTo", (url) => {
  cy.visit(`${Cypress.env("url")}/${url}.php`);
});
