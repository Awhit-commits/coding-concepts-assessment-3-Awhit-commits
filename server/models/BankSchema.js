const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let BankSchema = new Schema ({
    accountName:String,
    accountNumber:{unique:true,type:Number},
    accountBalance:Number,
    accountType:String
},{timestamps:true})

module.exports = mongoose.model('BankAccounts',BankSchema)