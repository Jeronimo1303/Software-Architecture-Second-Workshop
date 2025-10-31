const express = require('express')
const Pokenea = require('./pokenea.js')
const { pokenea_phrases } = require('./constants.js')
const os = require('os')
const app = express()
const port = 3000
const number_of_pokeneas = 8


app.get('/random', (req, res) => {
    const container_id = os.hostname()
    const pokeneas = Pokenea.createPokeneas(number_of_pokeneas)
    const random_index = Math.floor(Math.random() * pokeneas.length)

    const random_pokena = pokeneas[random_index]

    const body =
        'Container Id: ' + container_id + '\n' +
        'Pokena id: ' + random_pokena.id + '\n' +
        'Pokena name: ' + random_pokena.name + '\n' +
        'Pokena ability: ' + random_pokena.ability + '\n' +
        'Pokena phrase: ' + random_pokena.phrase

    res.send(body)
})

app.get('/image', (req, res) => {
    const number = Math.floor(Math.random() * pokenea_phrases.length)
    res.send(pokenea_phrases[number] + ' - Container Id: ' + os.hostname())
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})