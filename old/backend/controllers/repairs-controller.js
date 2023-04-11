const repair = require("../model/repair");

const getAllrepairs = async(req,res,next) => {
    let repairs;
    try{
        repairs = await repair.find();
    }catch (err){ 
        console.log(err);
    }
    if (!repairs){
        return res.status(404).json({message:"No product found"});
    }
    return res.status(200).json({repairs});
};
//add
const getById = async(req,res,next) => {
    const id =req.params.id;
    let repairs;
    try{
       repairs = await repair.findById(id);
    }catch(err){
        console.log(err);
    }
    if (!repairs){
        return res.status(404).json({message:"No repairs found"});
    }
    return res.status(200).json({repairs});
}

//add
const addrepair = async(req,res,next) =>{
    let repairs;
    console.log('backend called done');

    try {
        repairs = new repair({
                // RepairID : req.body.RepairID,
            ItemName : req.body.ItemName,
            RepairPeriod: req.body.RepairPeriod,
            EstimatedCost : req.body.EstimatedCost,
            Description : req.body.Description,
        });
        await repairs.save();
        
    } catch (err){
        console.log(err);
    }

     if(!repairs){
        return res.status(500).json({message:'Unable To Add To Repair'});
        
     }
     return res.status(201).json({repairs});

};
//update
const updaterepair = async (req, res, next) => {
    const id =req.params.id;
     let repairs;
    try{
        repairs = await repair.findByIdAndUpdate(id,{
                RepairID : req.body.RepairID,
                ItemName : req.body.ItemName,
                RepairPeriod: req.body.RepairPeriod,
                EstimatedCost : req.body.EstimatedCost,
                Description : req.body.Description,
        });
       repairs = await repair.save();
        
    } catch (err){
        console.log(err);
    }

 if(!repairs){
    return res.status(404).json({message:'Unable To Update By this ID'});
    
 }
 return res.status(200).json({repairs});

};
//delete
const deleterepair = async (req, res, next) => {
    const id =req.params.id;
    let repairs;
    try{
        repairs = await repair.findByIdAndRemove(id);
        
    } catch (err){
        console.log(err);
    }

 if(!repairs){
    return res.status(404).json({message:'Unable To Delete By this ID'});
    
 }else
 return res.status(200).json({message:'Product Successfully Deleted'});

};
exports.getAllrepairs=getAllrepairs;
exports.addrepair=addrepair;
exports.getById = getById;
exports.updaterepair = updaterepair;
exports.deleterepair = deleterepair;
