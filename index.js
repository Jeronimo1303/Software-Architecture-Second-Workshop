const express = require('express')
const Pokenea = require('./src/pokenea.js')
const os = require('os')
const path = require('path')
const app = express()
const port = 80
const number_of_pokeneas = 8
const pokeneas = Pokenea.createPokeneas(number_of_pokeneas)

// Serve static files from public directory
app.use(express.static(path.join(__dirname, './public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
})

app.get('/image', (req, res) => {
    const container_id = os.hostname()
    const random_index = Math.floor(Math.random() * pokeneas.length)
    const random_pokena = pokeneas[random_index]

    const body = {
        image: random_pokena.image,
        phrase: random_pokena.phrase,
        container_id: container_id
    }

    res.send(body)
})

app.get('/random', (req, res) => {
    const container_id = os.hostname()
    const random_index = Math.floor(Math.random() * pokeneas.length)

    const random_pokena = pokeneas[random_index]

    const body = {
        id: random_pokena.id,
        name: random_pokena.name,
        ability: random_pokena.ability,
        phrase: random_pokena.phrase,
        container_id: container_id
    }

    res.send(body)
})

app.listen(port, () => {
    console.log(`Pokenea app listening on port ${port}`)
})