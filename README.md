# babel-preset-medopad

[![Package Version](https://img.shields.io/npm/v/babel-preset-medopad.svg?style=flat-square)](https://npmjs.org/package/babel-preset-medopad)
[![Travis CI Build Status](https://img.shields.io/travis/Medopad/babel-preset-medopad/master.svg?style=flat-square)](https://travis-ci.org/Medopad/babel-preset-medopad)
[![License](http://img.shields.io/badge/license-MIT-green.svg?style=flat-square)](LICENSE)
[![Medopad Code Style](https://img.shields.io/badge/code%20style-Medopad-brightgreen.svg?style=flat-square)](https://github.com/Medopad/eslint-config-medopad)

This is [Medopad](http://medopad.com)'s [Babel](https://babeljs.io) preset.

## Plugins

[transform-exponentiation-operator](https://babeljs.io/docs/plugins/transform-exponentiation-operator) allows the use of exponentiation operators.

[transform-object-rest-spread](https://babeljs.io/docs/plugins/transform-object-rest-spread) allows the use of rest properties for object destructuring assignment and spread properties for object literals. Built-ins usage is enabled by default.

[transform-class-properties](https://babeljs.io/docs/plugins/transform-class-properties) allows the use of class properties.

[transform-runtime](https://babeljs.io/docs/plugins/transform-runtime) externalizes references to helpers and built-ins, automatically polyfilling the code without polluting globals.

## Install

[Shareable presets](https://babeljs.io/docs/plugins/#presets) are designed to work with the `presets` feature of `.babelrc` files.

First, install the preset (with all of its dependencies):

```
npm install babel-preset-medopad --save-dev
```

Then, add this to your `.babelrc` file:

```
{
  "presets": ["medopad"]
}
```

You can override settings from the shareable preset by adding them directly into your `.babelrc` file.

### Use with ESLint

If you wish to use [ESLint](https://github.com/eslint/eslint), install the parser:

```
npm install babel-eslint --save-dev
```

Then, add this to your `.eslintrc` file:

```
parser: "babel-eslint"
```

## Develop

### Test

```
npm test
```

### Release

```
npm version [major|minor|patch] -m "v%s"
```
