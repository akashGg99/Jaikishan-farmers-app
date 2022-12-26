const cardModel = require("../model/cardModel")

const getCards = async function(req,res){
    try{
        const cardData = await cardModel.find()

        return res.status(200).send({status:true,message:"Success", data:cardData})
    }
    catch(err){
        res.status(500).send({status:false,message:err.message})
    }
}



const createCard = async function(req,res){
    try{
        const data1 = req.body

        const createddata=await cardModel.create(data1)
        return res.status(200).send({status:true,message:"Success", data:createddata})
    }
    catch(err){
        res.status(500).send({status:false,message:err.message})
    }
}

module.exports={getCards,createCard}