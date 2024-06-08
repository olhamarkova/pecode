/// <reference types="cypress"/>

import { colors } from "../data/colors";
import { pageData } from "../data/pageData";

export class LoginPage {
  elements = {
    loginFormBlock: () => cy.get("div.wrapper"),
    logo: () => cy.get("#logomini"),
    heading: () => cy.get("h1"),
    loginFormInput: (inputNameAttribute) =>
      cy.get(`input[name="${inputNameAttribute}"]`), //username, password
    submitButton: () => cy.get("input[type='submit']"),
    errorMessage: (index) => cy.get("span.help-block").eq(index - 1), //for UI consistency
  };

  submitLoginForm() {
    this.submitLoginForm().click();
  }

  fillInputField(inputNameAttribute, data) {
    this.elements.loginFormInput(inputNameAttribute).type(data);
  }

  //validations
  validateHeading(text) {
    this.elements.heading().should("be.visible").and("have.text", text);
  }

  validateLogo() {
    this.elements.logo().should("be.visible");
  }

  validateLoginForm() {
    this.elements.loginFormBlock().should("be.visible");
  }

  validateInput(inputNameAttribute, placeholder) {
    this.elements
      .loginFormInput(inputNameAttribute)
      .should("be.visible")
      .and("have.attr", "placeholder", placeholder);
  }

  validateSubmitButton() {
    this.elements
      .submitButton()
      .should("be.visible")
      .and("have.css", "background-color", colors.darkGreen)
      .and("have.value", pageData.submitButton);
  }

  validateInputValue(inputNameAttribute, value) {
    this.elements
      .loginFormInput(inputNameAttribute)
      .should("have.value", value);
  }

  validateErrorMessages(message, index) {
    this.elements.errorMessage(index).should("have.text", message);
  }
}
