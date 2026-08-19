import {defineConfig} from 'oxlint';

export default defineConfig({
  plugins: ['typescript', 'unicorn', 'import', 'oxc'],
  categories: {
    correctness: 'error',
  },
  rules: {
    // --- Core language rules ---
    // "Always use triple equals... Exception: comparisons to literal null
    // may use == and !=" -- "smart" allows the == null idiom, nothing else.
    eqeqeq: ['error', 'smart'],
    // "always use braced blocks... first statement must begin on its own line"
    curly: ['error', 'all'],
    'no-var': 'error',
    'prefer-const': 'error',
    // "Do not use eval or the Function(...string) constructor"
    'no-eval': 'error',
    'no-new-func': 'error',
    'guard-for-in': 'warn',
    'new-cap': 'error',
    // "Do not use the Array() constructor"
    'no-array-constructor': 'error',
    // "The Object constructor is disallowed"
    'no-object-constructor': 'error',
    // "must not instantiate the wrapper classes... String, Boolean, Number"
    'no-new-wrappers': 'error',
    // "Never modify builtin types"
    'no-extend-native': 'error',
    'no-unused-vars': 'warn',

    // --- TypeScript-specific guidance ---
    // "Code must not use `const enum`; use plain `enum` instead"
    'oxc/no-const-enum': 'error',
    // "Consider *not* to use `any`" (not a hard ban)
    'typescript/no-explicit-any': 'warn',
    // "x! ... can cause your program to crash at runtime"
    'typescript/no-non-null-assertion': 'warn',
    // "Your code must not use the `namespace Foo {}` construct"
    'typescript/no-namespace': 'error',
    // "Code must not use `require`... Use ES6 module syntax"
    'typescript/no-require-imports': 'error',
    // "Do not use @ts-ignore nor the variants @ts-expect-error or @ts-nocheck"
    // (guide allows @ts-expect-error in tests, discouraged, hence "with-description")
    'typescript/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': true,
        'ts-nocheck': true,
      },
    ],
    // "Type assertions must use the `as` syntax" + "use type annotations (: Foo)
    // instead of type assertions (as Foo) to specify the type of an object literal"
    'typescript/consistent-type-assertions': [
      'warn',
      {assertionStyle: 'as', objectLiteralTypeAssertions: 'never'},
    ],
    // "Never use the `public` modifier except... non-readonly public parameter properties"
    'typescript/explicit-member-accessibility': [
      'warn',
      {accessibility: 'no-public'},
    ],
    // "For simple types, use T[]... For anything more complex, use Array<T>"
    'typescript/array-type': ['warn', {default: 'array-simple'}],
    // "there is no benefit to type aliases [for object types]... interface should be used"
    'typescript/consistent-type-definitions': ['warn', 'interface'],
    // "Leave out type annotations for trivially inferred types"
    'typescript/no-inferrable-types': 'warn',

    // "Use named exports in all code... Do not use default exports."
    'import/no-default-export': 'error',

    // "File names must be all lowercase and may include underscores or dashes"
    'unicorn/filename-case': ['warn', {case: 'kebabCase'}],
  },
  overrides: [
    {
      files: ['*.config.ts', '*.config.js'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
  options: {
    typeAware: true,
    typeCheck: true,
  },
});
