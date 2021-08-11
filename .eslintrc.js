module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: ['airbnb-typescript', "airbnb-typescript-prettier"],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
        project: './tsconfig.json',
    },

    env: {
        es6: true,
    },
	
	  rules: {
    "prettier/prettier": [
      "warn",
      {
        singleQuote: true,
      },
    ],
	'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
