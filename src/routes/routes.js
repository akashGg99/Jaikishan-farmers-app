const express =require('express')
const router = express.Router()
const {getCustomer,deletecustomer,createCust}=require('../controller/customerController')
const {}=require('../controller/cardController')


router.get("/getCustomers",getCustomer)
router.delete("/deleteCustomers",deletecustomer)
router.post("/createCustomer",createCust)


router.get("/getCards",)
router.post("/createCard",)