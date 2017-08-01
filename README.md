# babel-preset-medopad

[![Travis CI Build Status](https://img.shields.io/travis/Medopad/babel-preset-medopad/master.svg?style=flat-square)](https://travis-ci.org/Medopad/babel-preset-medopad)
[![License](http://img.shields.io/badge/license-MIT-green.svg?style=flat-square)](LICENSE)
[![Medopad Code Style](https://img.shields.io/badge/code%20style-Medopad-brightgreen.svg?style=flat-square)](https://github.com/Medopad/eslint-config-medopad)

This is [Medopad](http://medopad.com)'s [Babel](https://babeljs.io) preset.

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

## Develop

### Test

```
npm test
```

### Release

```
npm version [major|minor|patch] -m "v%s"
```
