# Schip
 [![npm version](https://badge.fury.io/js/schip.svg)](https://npmjs.org/package/schip)  [![minzipped size](https://img.shields.io/bundlephobia/minzip/schip.svg)](https://bundlephobia.com/result?p=schip)  [![build status](https://img.shields.io/travis/elcharitas/schip/master.svg)](https://travis-ci.org/elcharitas/schip#master)  [![coverage status](https://coveralls.io/repos/elcharitas/schip/badge.svg)](https://coveralls.io/github/elcharitas/schip)  [![dependency status](https://david-dm.org/elcharitas/schip.svg?theme=shields.io)](https://david-dm.org/elcharitas/schip)  [![devDependency status](https://david-dm.org/elcharitas/schip/dev-status.svg)](https://david-dm.org/elcharitas/schip#info=devDependencies)  [![Gitter](https://badges.gitter.im/elcharitas/schip.svg)](https://gitter.im/elcharitas/schip) 

Schip(pronounced skip) is A zero dependency CLI Utility that allows to use custom wrappers thereby permitting testing of `package.bin`

## Installation
Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
$ npm install -g schip
```

## Usage
Create a `bin.js` file in the root of your project or edit your package.json to include `bin`. Schip looks within bin for the first command and wraps that
``` json
{
    "bin": {
        "mybin": "./path/to/file"
    }
}
```

Now you can run
``` sh
$ schip <mycommand>
```

## License
[MIT](LICENSE)
