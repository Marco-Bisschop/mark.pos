const { stringify } = require('querystring')
const { current, environment } = require('./lib/environment')

require ('./lib/environment')

const e = environment

e.user.uid = 12345

const _ = require('lodash')

const items = _.flattenDeep(e)

const http = require('http')

const server = http.createServer((req, res) => {
    res.write('items')
    res.end()
})

console.log(items)



server.listen(5000)
