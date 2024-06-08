/// <reference types="cypress"/>

import { LoginPage } from "../../pages/LoginPage.js";
import {
  urls,
  errors,
  invalidCredentials,
} from "../../support/services/dataService.js";

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

  it("User Shall See The Error Message When Uses Invalid Credentials", () => {
    loginPage.fillInputField("username", invalidCredentials.username);
    loginPage.validateInputValue("username", invalidCredentials.username);
    loginPage.fillInputField("password", invalidCredentials.password);
    loginPage.validateInputValue("password", invalidCredentials.password);
    loginPage.submitLoginForm();
    loginPage.validateErrorMessages(errors.invalidPassword, 2);
  });
});
