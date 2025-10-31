const { pokenea_phrases, pokenea_names, pokenea_abilities } = require('./constants.js');

class Pokenea {
    // simple numeric id counter
    static nextId = 1;

    constructor(name, height, ability, image, phrase) {
        this.id = Pokenea.nextId++;
        this.name = name;
        this.height = height;
        this.ability = ability;
        this.image = image;
        this.phrase = phrase;
    }

    static createPokeneas(amount) {
        const pokeneas = [];

        // guard: ensure arrays exist and have the same length
        const poolSize = Math.min(
            pokenea_names.length,
            pokenea_abilities.length,
            pokenea_phrases.length
        );

        for (let i = 0; i < amount; i++) {
            const number = Math.floor(Math.random() * poolSize);

            const name = pokenea_names[number];
            const ability = pokenea_abilities[number];
            const phrase = pokenea_phrases[number];
            const height = number;

            const image_path = '';

            pokeneas.push(new Pokenea(name, height, ability, image_path, phrase));
        }

        return pokeneas;
    }
}

module.exports = Pokenea;