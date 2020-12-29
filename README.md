# Schippo@0.0.1
 [![npm version](https://badge.fury.io/js/schippo.svg)](https://npmjs.org/package/schippo)  [![minzipped size](https://img.shields.io/bundlephobia/minzip/schippo.svg)](https://bundlephobia.com/result?p=schippo)  [![build status](https://img.shields.io/travis/elcharitas/schippo/master.svg)](https://travis-ci.org/elcharitas/schippo#master)  [![coverage status](https://coveralls.io/repos/elcharitas/schippo/badge.svg)](https://coveralls.io/github/elcharitas/schippo)  [![dependency status](https://david-dm.org/elcharitas/schippo.svg?theme=shields.io)](https://david-dm.org/elcharitas/schippo)  [![devDependency status](https://david-dm.org/elcharitas/schippo/dev-status.svg)](https://david-dm.org/elcharitas/schippo#info=devDependencies)  [![Gitter](https://badges.gitter.im/elcharitas/schippo.svg)](https://gitter.im/elcharitas/schippo) 

A Zero-dependencies CLI Utility to use custom wrappers


## Installation
Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
$ npm install -g schippo
```

## Usage
Create a `bin.js` file in the root of your project or edit your package.json to include bin. Schippo looks within bin for the first record and wraps that
``` json
{
    "bin": {
        "mybin": "./path/to/file"
    }
}
```

Noww you can run
``` sh
$ schip <mycommand>
```

## License
[MIT](LICENSE)
