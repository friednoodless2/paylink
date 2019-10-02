const mongoose = require('mongoose')

const payee_user_Schema = new mongoose.Schema(
    {
        username: {type: String },
        password: {type: String} ,

        payer_name: {type: String} ,
        card_type: {type: String} ,
        card_num: {type: Number} ,
        sec_code: {type: Number},
        
        status: {type: Boolean} ,
    }
)

const payee_user = mongoose.model('payee_user', payee_user_Schema)

module.exports = mongoose.model('payee_user')