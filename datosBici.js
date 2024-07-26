const fs = require('fs')

const leerJSON = () => {
    const biciJSON = fs.readFileSync('./bicicletas.json', 'utf-8');
    const biciJS= JSON.parse(biciJSON)
    return biciJS
}
module.exports = {
    leerJSON
}