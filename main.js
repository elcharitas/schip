#! /usr/bin/env node
const { existsSync, readFileSync } = require("fs")
const { resolve } = require("path")
const { load } = require("npm/lib/npm.js")
const currentDir = process.cwd()

// get absolute path to package if it exists
const pkgPath = (prefix, pkg = "./package.json") => {
    process.chdir(prefix)
    let path = resolve(prefix, pkg)
    if (existsSync(path)) {
        return path
    }
    return null
}

// wrap first command or bin.js
const wrap = (prefix) => {
    const pkgDir = pkgPath(prefix)
    const package = JSON.parse(readFileSync(pkgDir))
    let pkg = package.bin ? package.bin[Object.keys(package.bin)[0]] : "./bin.js"
    
    if(pkg = pkgPath(prefix, pkg)) {
        require(pkg)
    } else {
        console.log("Schip Requires a `bin` to be set")
    }
}

// its time to schip
if (!pkgPath(currentDir)) {
    load({}, function (err) {
        if (err) return console.log("Schip could not process npm package")
        wrap(this.prefix)
    })
} else wrap(currentDir)