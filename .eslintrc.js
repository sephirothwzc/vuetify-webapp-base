module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'vuetify',
  ],

  parserOptions: {
    ecmaVersion: 2020,
  },

  rules: {
    'no-console':
      process.env.NODE_ENV === 'production'
        ? 'warn'
        : 'off',
    'no-debugger':
      process.env.NODE_ENV === 'production'
        ? 'warn'
        : 'off',
    'vue/max-attributes-per-line': ['off', 2],
    'vue/script-indent': ['off', 2],
    semi: ['off', 2],
  },

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],

  parserOptions: {
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
};
