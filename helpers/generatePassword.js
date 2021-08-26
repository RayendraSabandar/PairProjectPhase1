const generator = require('generate-password')

function generatePassword(){
    return generator.generateMultiple(5, {
        length: 10,
        numbers: true,
        excludeSimilarCharacters:true,
        strict: true
    })
}

module.exports = {generatePassword}