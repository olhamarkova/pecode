const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "test-assignment",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  env: {
    url: `${process.env.URL}`,
    username: `${process.env.LOGIN}`,
    password: `${process.env.PASSWORD}`,
  },
  viewportWidth: 1920,
  viewportHeight: 1080,
  //video: true,
  screenshotOnRunFailure: true,
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    specPattern: "cypress/e2e/*/*.cy.js",
  },
});
