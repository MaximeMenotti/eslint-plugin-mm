import { createEslintRule } from '../utils';

export const RULE_NAME = 'no-nested-if';
export type MessageIds = 'noNestedIf';
export type Options = [];

export default createEslintRule<Options, MessageIds>({
  name: RULE_NAME,
  meta: {
    type: 'suggestion',
    docs: {
      description: 'No nested if',
      recommended: 'recommended',
    },
    hasSuggestions: true,
    schema: [],
    messages: {
      noNestedIf: 'Avoid nested if for complexity',
    },
  },
  defaultOptions: [],
  create: (context) => {
    return {
      IfStatement(node) {
        const parentIfStatement = node.parent.parent;

        if (
          parentIfStatement
          && parentIfStatement.type === 'IfStatement'
          && node
        ) {
          context.report({
            node,
            messageId: 'noNestedIf',
            suggest: [
              {
                messageId: 'noNestedIf',
                fix(fixer) {
                  return fixer.replaceText(node, 'return;');
                },
              },
            ],
          });
        }
      },
    };
  },
});
