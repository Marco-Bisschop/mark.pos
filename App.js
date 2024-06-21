const { stringify } = require('querystring')
const { current, environment } = require('./lib/environment')
const EventEmitter = require('events')
const {logger} = require ('./lib/logger')
const {authorize} = require ('./lib/authorize')

require ('./lib/environment')
const e = environment

e.user.uid = 12345
const _ = require('lodash')

const express = require('express')
const app = express()

app.use([logger])

const {locations} = require('./data/locations.js')

app.get('/api/locations/', (req,res) => {
    res.json(locations)
    res.end ('Finished')
})

app.get('/api/locations/:id', (req,res) =>{
    try {
        const { id } = req.params
        const location = locations.find((location) => location.id === Number(id))
        if (!location){
            return res.status(404).send(`Location with id: ${id} doesn't exist`)
        }
        res.status(200).json(location)
    } catch (error) {
        console.error(error)
        res.status(500).send('Internal Server Error')
    }
})

app.get('/api/locations/:id/positions', (req,res) =>{
    const { id } = req.params
    const location = locations.find((location) => location.id === Number(id))
    if (!location){
        return res.status(404).send(`Location with id: ${id} doesn't exist`)
    }
    if (location.displayPositions.length === 0){
        return res.status(404).send(`There are no display positions found for location ${location.name}`)
    }
    res.status(200).json(location.displayPositions)
})

app.all('*', (req, res) =>{
    res.status(201).send('<h1>Page not found</h1>')
})

app.listen(5000, () => {
    console.log('Listening on port 5000...')
})


