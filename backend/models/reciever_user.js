const mongoose = require('mongoose')

const reciever_user_Schema = new mongoose.Schema(
    {
        username: {type: String },
        password: {type: String} ,
        
        reciever_name: {type: String} ,
        bank_num: {type: Number} ,
        account_num: {type: Number} ,
        status: {type: Boolean} ,
    }
)

const reciever_user = mongoose.model('reciever_user', reciever_user_Schema)

module.exports = mongoose.model('reciever_user')