module.exports = {
  meta: {
    type: "suggestion",
    hasSuggestions: true,
    docs: {
      description: "Enforce no nested if statement",
      recommended: true,
    },
    messages: {
      nestedIf: `Deeply nested code is a common feature of structured programming. While it has some advantages, it is frequently considered hard to read and an anti-pattern: “Flat is better than nested”.
Specifically, nested control flow – conditional blocks (if) or loops (for, while) – is hard to understand beyond three levels of nesting, and has high cyclomatic complexity. This is known as “Dangerously Deep Nesting” or, in the case of nested if statements, the “Arrow Anti Pattern”
    `,
      earlyReturnMessage:
        "Instead of nested a if statement here, maybe you can return early and make another if statement.",
    },
    schema: [],
  },
  create(context) {
    return {
      "IfStatement > * > IfStatement": function (ifStatementNode) {
        const parentIfStatement = ifStatementNode.parent.parent;

        if (ifStatementNode) {
          context.report({
            node: ifStatementNode,
            messageId: "nestedIf",
            suggest: [
              {
                messageId: "earlyReturnMessage",
                fix: function (fixer) {
                  return fixer.replaceText(ifStatementNode, "return;");
                },
              },
            ],
          });
        }
      },
    };
  },
};
