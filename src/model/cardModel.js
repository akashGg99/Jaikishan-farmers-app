const mongoose=require('mongoose')

const cardSchema = new mongoose.Schema(
    {
    cardNumber: String,
    cartType: String,
    customerName: String,
    status: {type: String, default: "ACTIVE", enum:[ACTIVE,INACTIVE]},
    vision: String,
    customerID: {type: String,
                ref: "customer"}
    }
);

module.exports = mongoose.model('card',cardSchema)