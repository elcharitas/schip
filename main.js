#! /usr/bin/env node

const { existsSync, readFileSync } = require("fs")
const { resolve } = require("path")
const currentDir = process.cwd()
const pkgDir = resolve(currentDir, "./package.json")

if (existsSync(pkgDir)) {
    const package = JSON.parse(readFileSync(pkgDir))
    try {
        const pkg = package?.bin[Object.keys(package.bin)[0]] || "./bin.js"
        require(resolve(currentDir, pkg))
    }
    catch (e) {
        console.log("Schip Requires a binary to be set")
    }
} else {
    console.log("Schip can only be used from root of npm package")
}