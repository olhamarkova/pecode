## How to run tests

Make sure NodeJS is installed.

If you haven’t installed NodeJS yet, please install it from the [NodeJS site](https://nodejs.org/en).

Then:

1. Clone this repository;
2. Open the folder in your terminal and write the command:

`npm install`

To run test in your terminal (headless mode):

`npm run test`

To open Cypress:

`npm run cypress`

or

`npx cypress open`

## Test Assignment

1. Write an automation script using a Javascript testing framework which will open: [page] (https://www.pecodesoftware.com/qa-portal/greet.php)
   `You will find the script in the cypress/support/commands.js file`

2. Create an environment file and pick up all the credentials values from there.
   `See .env.example file`

3. Fill in the “Username” and “Password” input fields and click the “LogIn” button.
   `You will find the script in the cypress/support/commands.js file`

4. Use an assertion library and verify that all the elements are present on the page.
   `See cypress/e2e/login/loginSmoke.cy.js`

5. Verify that all the error messages appear.
   `See cypress/e2e/login/loginNegative.cy.js`

6. Create a test case that will fail because of unsuccessful login.
   `See cypress/e2e/login/loginFailed.cy.js`

7. Use a page-object pattern or app actions.
   `Done. See cypress/pages folder`

8. The result of execution should generate

   - A mochawesome report file `done`
   - Screenshots for failing the test `done`
   - Video recording for all the tests. `done`

9. Optional - provide additional options to step 2(get test data from different sources).
   `See cypress/data folder`

10. Post the code (without node_modules) to the public Github repository and provide a link.
    `Here we are :)`
