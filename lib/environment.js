const os = require('os')

const currentOS = {

    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMen: os.freemem(),
    upTime: os.uptime()

}

const currentUser = {
    email: 'email@domain.com',
    info: os.userInfo()
}

const path = require('path')

const currentPath = {

    seperator: path.sep,
    dirname: __dirname,
    filename: __filename,
    absolute: path.resolve(__filename),
    basename: path.basename(__filename),

    path: path
}


const {readFile, writeFile} = require('fs').promises

const environment = {

    os: currentOS,
    user: currentUser,
    path: currentPath,

    readFile: readFile,
    writeFile: writeFile

}

module.exports.environment = environment
