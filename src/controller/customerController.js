const customerModel = require("../model/customerModel")

const getCustomer = async function(req,res){
    try{

        const custData = await customerModel.find({status:"Active"})

        return res.status(200).send({status:true,message:"Success", data:custData})
    }
    catch(err){
        res.status(500).send({status:false,message:err.message})
    }
}


const deletecustomer = async function(req,res){
    try{
        const data1= req.body.customerId
        // if(sdc){}
        const delCust = await customerModel.deleteOne({ _id:data1 })

        return res.status(200).send({status:true,message:"Successfully deleted.", data:delCust})
    } 
    catch(err){
        res.status(500).send({status:false,message:err.message})
    }
}




const createCust = async function(req,res){
    try{
        const data1 = req.body

        const createddata=await customerModel.create(data1)
        return res.status(200).send({status:true,message:"Success", data:crea})
    }
    catch(err){
        res.status(500).send({status:false,message:err.message})
    }
}

module.exports={getCustomer,deletecustomer,createCust}