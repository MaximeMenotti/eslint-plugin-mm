// enforce-otter-cute.test.js
const { RuleTester } = require("eslint");
const noNestedIfRule = require("./no-nested-if");

const ruleTester = new RuleTester({
  parserOptions: { ecmaVersion: 2015 },
});

ruleTester.run("no-nested-if", noNestedIfRule, {
  valid: [
    {
      code: "if(true) {}",
    },
    {
      code: `
        if(true) {
          const arrowFunction = () => {
            if(false) {
              const otter = "cute";
            }
          }
        }
      `,
    },
  ],
  invalid: [
    {
      code: `
        if (true) {
          if (false) {
            const otter = "cute";
          }
        }
      `,
      errors: 1,
    },
  ],
});

console.log("All tests passed!");
