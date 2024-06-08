export default class BasePage {
  constructor() {
    this.heading = () => cy.get("h1");
  }

  validateHeading(text) {
    this.heading().should("be.visible").and("have.text", text);
  }
}
