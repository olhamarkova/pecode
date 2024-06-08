/// <reference types="cypress"/>

import { LoginPage } from "../../pages/LoginPage.js";
import { urls } from "../../data/urls.js";
import { pageData } from "../../data/pageData.js";

const loginPage = new LoginPage();

describe("Login Form Spec - Smoke", function () {
  beforeEach(() => {
    cy.goTo(urls.login);
  });

  it("User Shall See The Login Form", () => {
    loginPage.validateLoginForm();
    loginPage.validateLogo();
    loginPage.validateHeading(pageData.heading);
    loginPage.validateInput("username", pageData.placeholder.username);
    loginPage.validateInput("password", pageData.placeholder.password);
    loginPage.validateSubmitButton();
  });
});
