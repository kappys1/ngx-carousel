#!/usr/bin/env node

const { readPackageJson, writePackageJson, serialCommands, changeDirectory } = require('./auxFunctions');
const path = require('path');
const pkgPath = path.join(process.cwd(), 'package.json');
const pkgLibPath = path.join(process.cwd(), 'projects/carousel/package.json');

const readmePath = path.join(process.cwd(), 'README.md');
const readmePathDest = path.join(process.cwd(), 'dist/carousel/README.md');
const changelogPath = path.join(process.cwd(), 'CHANGELOG.md');
const changelogPathDest = path.join(process.cwd(), 'dist/carousel/CHANGELOG.md');

const fs = require('fs');

function log(...args) {
    args[0] = '[carousel] ' + args[0]
    console.log(...args)
}

function newBuild(){
    log('   Build New version ...');
    return serialCommands([
            ['npm', ['run','build-lib']]
        ]).then(async val => {
            await fs.copyFile(readmePath, readmePathDest,() => {});
            await fs.copyFile(changelogPath, changelogPathDest, () => {});
        })
}

function updateVersion(type){
    if(type.indexOf('alpha') !== -1 || type.indexOf('prerelease') !== -1 || type.indexOf('release') !== -1 || type.indexOf('latest') !== -1){
        log('   updating version ...');
        return serialCommands([
                ['standard-version', ['--'],[`--${type}`]]
            ]).then(async val => {
                var objPkg = await readPackageJson(pkgPath);
                var objLibPkg = await readPackageJson(pkgLibPath);
                objLibPkg.version = objPkg.version;
                var objPkg = await writePackageJson(objLibPkg, pkgLibPath);
                log('   Done new version ... '+objLibPkg.version);
                return newBuild();
            })
    }
    else{
        throw new Error('[carousel] -> no es un tipo de version(alpha, prerelease, release)' )
    }
}

function publish(){
    const type = process.argv[2] || 'prerelease';
    console.log(type);
    log('updating version ...');
    return updateVersion(type).then( async val =>{
        log('Push version to bitbucket...');
        await serialCommands([
            ['git', ['push','--follow-tags', 'origin', 'master']],
        ])
        changeDirectory('./dist/carousel')
        log('Publishing...');
        return await serialCommands ([
            ['npm ', [ 'publish', '--tag', type]]
        ])
    })
}

publish();
