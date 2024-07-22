const fs = require('fs')

const bicicletasJSON = () =>{
    const bicisJSON = fs.readFileSync('./bicicletas.json','utf-8')
    const biciJS = JSON.parse(bicisJSON)
    return biciJS
}


module.exports = {
    bicicletasJSON
}
