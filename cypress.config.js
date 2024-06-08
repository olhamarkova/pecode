const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  env: {
    url: `${process.env.URL}`,
  },
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/*/*.cy.js",
  },
});
