import type { ESLint, Linter } from 'eslint';
import { version } from '../package.json';
import noNestedIf from './rules/no-nested-if';

const plugin = {
  meta: {
    name: 'mm',
    version,
  },
  rules: {
    'no-nested-if': noNestedIf,
  },
} satisfies ESLint.Plugin;

export default plugin;

type RuleDefinitions = (typeof plugin)['rules'];

export type RuleOptions = {
  [K in keyof RuleDefinitions]: RuleDefinitions[K]['defaultOptions'];
};

export type Rules = {
  [K in keyof RuleOptions]: Linter.RuleEntry<RuleOptions[K]>;
};
