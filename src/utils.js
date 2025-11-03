const Pokenea = require('./pokenea')
const os = require('os')
const number_of_pokeneas = 8
const pokeneas = Pokenea.createPokeneas(number_of_pokeneas)

function getRandomPokenea(){
    const random_index = Math.floor(Math.random() * pokeneas.length)
    
    const random_pokenea = pokeneas[random_index]

    return {
        data : {
            id : random_pokenea.id,
            name : random_pokenea.name,
            height : random_pokenea.height,
            ability : random_pokenea.ability,
            phrase : random_pokenea.phrase,
            image : random_pokenea.image,
        },
        meta : {container_id : os.hostname()},
    }
}

module.exports = getRandomPokenea