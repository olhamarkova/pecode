/// <reference types="cypress"/>

import { BasePage } from "./core/BasePage.js";
import { colors, pageData } from "../support/services/data_service.js";

export class LoginPage extends BasePage {
  constructor() {
    super();
    this.loginFormBlock = () => cy.get("div.wrapper");
    this.logo = () => cy.get("#logomini");
    this.loginFormInput = (inputNameAttribute) =>
      cy.get(`input[name="${inputNameAttribute}"]`); //username, password
    this.submitButton = () => cy.get("input[type='submit']");
    this.errorMessage = (index) => cy.get("span.help-block").eq(index - 1); //for UI consistency
  }
  // elements = {
  //   loginFormBlock: () => cy.get("div.wrapper"),
  //   logo: () => cy.get("#logomini"),
  //   heading: () => cy.get("h1"),
  //   loginFormInput: (inputNameAttribute) =>
  //     cy.get(`input[name="${inputNameAttribute}"]`), //username, password
  //   submitButton: () => cy.get("input[type='submit']"),
  //   errorMessage: (index) => cy.get("span.help-block").eq(index - 1), //for UI consistency
  // };

  submitLoginForm() {
    this.submitButton().click();
  }

  fillInputField(inputNameAttribute, data) {
    this.loginFormInput(inputNameAttribute).type(data);
  }

  //validations
  validateLogo() {
    this.logo().should("be.visible");
  }

  validateLoginForm() {
    this.loginFormBlock().should("be.visible");
  }

  validateInput(inputNameAttribute, placeholder) {
    this.loginFormInput(inputNameAttribute)
      .should("be.visible")
      .and("have.attr", "placeholder", placeholder);
  }

  validateSubmitButton() {
    this.submitButton()
      .should("be.visible")
      .and("have.css", "background-color", colors.darkGreen)
      .and("have.value", pageData.submitButton);
  }

  validateInputValue(inputNameAttribute, value) {
    this.loginFormInput(inputNameAttribute).should("have.value", value);
  }

  validateErrorMessages(message, index) {
    this.errorMessage(index).should("have.text", message);
  }
}
