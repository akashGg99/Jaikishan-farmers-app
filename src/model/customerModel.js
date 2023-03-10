const mongoose=require('mongoose')

const customerSchema = new mongoose.Schema(
    {
    firstName: String,
    lastName: String,
    mobileNumber:{type:String},
    DOB:Date,
    emailID: String,
    address: String,
    customerID: String,
    status: {type: String, enum:[ACTIVE,INACTIVE]}
    }
);

module.exports = mongoose.model('customer',customerSchema)