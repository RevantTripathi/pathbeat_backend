const Data = require('../model/data');



const getAllData = async(req,res) => {

    try{
    const data = await Data.find();
    res.status(200).json(data);

    } catch(err){
        res.status(500).json({message: err.message});
    }

};

module.exports = {
    getAllData,
}

