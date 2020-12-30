#! /usr/bin/env node

const { existsSync, readFileSync } = require("fs")
const { resolve } = require("path")
const { load } = require('npm/lib/npm.js')
const currentDir = process.cwd()

const wrap = (prefix) => {
    const pkgDir = resolve(prefix, "./package.json")
    const package = JSON.parse(readFileSync(pkgDir))
    const pkg = package.bin ? package.bin[Object.keys(package.bin)[0]] : "./bin.js"
    
    try {
        process.chdir(prefix)
        require(resolve(prefix, pkg))
    }
    catch (e) {
        console.log("Schip Requires a `bin` to be set")
    }
}

if (existsSync(resolve(currentDir, "./package.json"))){
    wrap(currentDir)
} else {
    load({}, function (err) {
        if (err) {
            return console.log("Schip can only be used from root of npm package")
        }
        wrap(this.prefix)
    })
}