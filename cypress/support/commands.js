/**
 * Opens a page of the site.
 * @param {string} url - url of a page
 */
Cypress.Commands.add("goTo", (url) => {
  cy.visit(`${Cypress.env("url")}/${url}.php`);
});

/**
 * Login through UI.
 * @param {string} username
 * @param {string} password
 */
Cypress.Commands.add("login", (username, password) => {
  cy.get("input[name='username']").type(username);
  cy.get("input[name='password']").type(password);
  cy.get("input[type='submit']").click();
});
