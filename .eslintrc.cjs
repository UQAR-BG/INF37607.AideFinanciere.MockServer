require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "node": true
    },
    "extends": [
        "eslint:recommended"
      ],
    "parserOptions": {
        "ecmaVersion": "latest"
    }
}
  