const express =require('express')
const router = express.Router()
const {getCustomer,deletecustomer,createCust}=require('../controller/customerController')
const {getCards,createCard}=require('../controller/cardController')

//------------------------ customers -----------------//
router.get("/getCustomers",getCustomer)
router.delete("/deleteCustomers",deletecustomer)
router.post("/createCustomer",createCust)

//--------------------------cards-----------------------//
router.get("/getCards",getCards)
router.post("/createCard",createCard)


router.all("*",function(){ return res.status(400).send({status:false, message:"url not found."})})