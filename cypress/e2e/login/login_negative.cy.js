/// <reference types="cypress"/>

describe("Login Form Spec - Negative", function () {
  before(() => {
    cy.goTo("greet");
  });

  it("User Shall See Error Messages When Submits An Empty Login Form", () => {});

  it("User Shall See The Error Message When Uses Invalid Credentials", () => {});
});
