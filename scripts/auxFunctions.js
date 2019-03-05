const path = require('path');
const {spawn} = require('child_process');
const isWin = process.platform === 'win32'
const CODE_OK = 0
const fs = require('fs');
const fse = require('fs-extra');

function serialCommands(commands, options = {}) {
    return commands.reduce(function(promise, args) {
      return promise.then(executeCommandFactory(...args, options))
    }, Promise.resolve())
}

function executeCommandFactory(bin, args, options){
    return function() {
        return getCommandPromise(bin, args, options).catch(val => console.error(val))
    }
}

function getCommandPromise(bin, args, options = {}) {
    return new Promise(function(resolve, reject) {
        if (options.stdio !== 'ignore') {
            // log('')
            // log(getCommandCallMessage(bin, args, options))
        }
        let ch = getSpawnProcess(bin, args, options);
        ch.on('exit', code => {
            code === CODE_OK ? resolve(code) : reject(code)
        })
    })
}

function changeDirectory(directory){
    process.chdir(directory);
}

function getArrangedCommand(bin, args, opts) {
    return path.isAbsolute(bin) && isWin // check if it's a file or an alias
      ? ['node', [bin, ...args], opts]
      : [bin, args, opts]
}

function getSpawnProcess(bin, args, options = {}) {
  options = Object.assign(
      {shell: true, stdio: 'inherit', cwd: process.cwd()},
      options
  )
  return spawn(...getArrangedCommand(bin, args, options))
}

async function readPackageJson(path){
  path = path || pkgPath;
  return JSON.parse(await readFile(path))
}

async function writePackageJson(obj,path) {
  path = path || pkgPath;
  return await writeFile(path,JSON.stringify(obj, null, 2))
}

function readFile(path){
  return fs.readFileSync(path, {encoding: 'utf8'})
}

const writeFile = (path, content) => {
  return fse.outputFileSync(path, content)
}

exports.readPackageJson = readPackageJson;
exports.writePackageJson = writePackageJson;
exports.serialCommands = serialCommands;
exports.changeDirectory = changeDirectory;
