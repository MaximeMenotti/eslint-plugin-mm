const noNestedIfRule = require("./rules/no-nested-if");

const plugin = {
  rules: { "no-nested-if": noNestedIfRule },
};

module.exports = plugin;
