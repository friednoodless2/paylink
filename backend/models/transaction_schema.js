const mongoose = require('mongoose')

const transaction_Schema = new mongoose.Schema(
    {
        title: {type: String},
        description: {type: String},
        price: {type: Number}, 
        success: {type: Boolean},
    }
)

const transaction = mongoose.model('transaction', transaction_Schema)

module.exports = mongoose.model('transaction')