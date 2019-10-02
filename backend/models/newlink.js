const mongoose = require('mongoose')

const newLink_Schema = new mongoose.Schema(
    {
        username: {type: String},
        reciever_name: {type: String},
        description: {type: String},
        price: {type: Number}
    }
)

const newLink = mongoose.model('newLink', newLink_Schema)

module.exports = mongoose.model('newLink')