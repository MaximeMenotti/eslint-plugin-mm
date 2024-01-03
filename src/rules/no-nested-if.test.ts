import { RuleTester } from 'eslint';
import rule, { RULE_NAME } from './no-nested-if';

const ruleTester = new RuleTester({
  parserOptions: { ecmaVersion: 2015 },
});

ruleTester.run(RULE_NAME, rule, {
  valid: [
    {
      code: 'if(true) {}',
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
    {
      code: `
        if (true) {
          const otter = "cute";
        } else {
          if (false) {
            const otter = "cute";
          }
        }
      `,
      errors: 1,
    },
  ],
});
