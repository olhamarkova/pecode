/// <reference types="cypress"/>

import { LoginPage } from "../../pages/LoginPage.js";
import { urls, pageData, errors } from "../../support/services/data_service.js";

const loginPage = new LoginPage();

describe("Login Form Spec - Negative", function () {
  beforeEach(() => {
    cy.goTo(urls.login);
  });

  it("User Shall See Error Messages When Submits An Empty Login Form", () => {
    loginPage.validateInputValue("username", "");
    loginPage.validateInputValue("password", "");
    loginPage.submitLoginForm();
    loginPage.validateErrorMessages(errors.noUserName, 1);
    loginPage.validateErrorMessages(errors.noPassword, 2);
  });

  it("User Shall See The Error Message When Uses Invalid Credentials", () => {});
});
