<p align="center">
  <img src="https://camo.githubusercontent.com/4c4c8d90e242619972a11baa3c33acaaeb9bad00/687474703a2f2f692e696d6775722e636f6d2f666748314852742e706e67" />
</p>
<p align="center">
  <img src="https://circleci.com/gh/imgly/pesdk-html5/tree/develop.svg?style=shield&circle-token=62c63a2edc1d8f02fe583ac943ddf37846fdd210" />
  <a href="https://pesdk-slack.herokuapp.com/">
    <img src="https://pesdk-slack.herokuapp.com/badge.svg" alt="Slack Status" />
  </a>
</p>

## Photo Editor SDK for HTML5.
The PhotoEditor SDK for HTML5 is a **fully customizable** photo editor which you can integrate into your HTML5 app within minutes.
It contains the most important photo editing tools;
Auto-Enhance, Crop, Rotate, Focus, Brightness, Contrast, Saturation, and more.
It also features state-of-the-art photo filters, designed and calibrated with a lot of love.
A Text editor with an elegant and simple to use interface allows adding text instantly to the picture.

Visit [our website](https://www.photoeditorsdk.com/documentation/html5/getting-started) for tutorials on how to integrate and customize the editor.

## Preview

<p align="center">
  <img src="http://static.photoeditorsdk.com/html5-editor.gif" />
</p>

## Examples
See the examples folder for implementation examples or play with the [demo on our website](https://www.photoeditorsdk.com/).

## Setting up the development environment

### Mac OSX

```shell
$ xcode-select --install
$ brew install libtiff jpeg libpng cairo
$ npm install -g gulp
$ npm install
```

### All other environments

```shell
$ npm install -g gulp
$ npm install
```

## Running the tests

### Canvas tests

```shell
$ npm test
```

### WebGL tests (very rudimentary)

```shell
$ npm run test-webgl
```

### Run code coverage

```shell
$ npm run coverage
```

## Creating a new release

First, create a [GitHub API token](https://help.github.com/articles/creating-an-access-token-for-command-line-use/) and write it to `.github-token`. Then run

```shell
$ npm run release
```

## Building the documentation

```shell
$ gulp jsdoc
```

The documentation will be in the `doc` directory.

### License
Please see [LICENSE](https://github.com/imgly/imgly-sdk-html5/blob/master/LICENSE.md) for licensing details.

### Authors and Contributors
Made 2013-2016 by @9elements: Sascha Gehlich ([@saschagehlich](https://github.com/saschagehlich)), Johannes Emerich ([@knuton](https://github.com/knuton)), Carsten Przyluczky ([@K4stor](https://github.com/K4stor)), Sebastian Deutsch ([@sebastiandeutsch](https://github.com/sebastiandeutsch))

### Support or Contact
Contact contact@photoeditorsdk.com for support requests or to upgrade to an enterprise licence.


