/// <reference types="cypress"/>

import { LoginPage } from "../../pages/LoginPage.js";
import { urls } from "../../support/services/dataService.js";

const loginPage = new LoginPage();
const username = Cypress.env("username");
const password = Cypress.env("password");

describe("Login Spec", function () {
  beforeEach(() => {
    cy.goTo(urls.login);
  });

  it("User Shall Login Through The Login Form", () => {
    cy.login(username, password);
    loginPage.validateHeading("Welcome!");
  });
});
