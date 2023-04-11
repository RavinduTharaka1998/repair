const express = require('express');
const repairRoutes = express.Router();


let Repairs = require('./repair.model');
let ReturnItems = require('./returnitem.model');

repairRoutes.route('/add').post(function (req,res){
    //console.log("backend called")
    let repairs = new Repairs(req.body);
    repairs.save()
        .then(repairs => {
            res.status(200).json({'repair' : 'Item is added successfull'});
        })
        .catch(err => {
            res.status(400).send("Unable to save database")
        });
});

repairRoutes.route('/addreturnitem').post(function (req,res){
    //console.log("backend called")
    let returnitems = new ReturnItems(req.body);
    returnitems.save()
        .then(repairs => {
            res.status(200).json({'returnitem' : 'Item is added successfull'});
        })
        .catch(err => {
            res.status(400).send("Unable to save database")
        });
});

repairRoutes.route('/getData').get(function (req,res){
    Repairs.find(function (err,repairs){
        res.json(repairs);
    });
});


repairRoutes.route('/getData/:id').get(function (req,res){
    let id = req.params.id;
    console.log("get item id : " +id);
    Repairs.findById(id, function (err,repairs){
        res.json(repairs);
    });
});


repairRoutes.route('/editRepair/:id').get(function (req,res){
    let id = req.params.id;
    Repairs.findById(id, function (err,repairs){
        res.json(repairs);
    });
});

repairRoutes.route('/updateRepair/:id').post(function (req,res){
    let id = req.params.id;
    //console.log("update id : "+id)
    Repairs.findById(id, function (err, repairs){
        if(!repairs)
            res.status(404).send("Data is not found??");
        else{
            repairs.ItemName = req.body.ItemName;
            repairs.RepairPeriod = req.body.RepairPeriod;
            repairs.EstimatedCost = req.body.EstimatedCost;
            repairs.Description = req.body.Description;

            repairs.save().then(repairs => {
                res.json('Update Complete');
            })
                .catch(err =>{
                    res.status(400).send("Unable to update data");
                });
        }
    });
});

repairRoutes.route('/deleteRepair/:id').get(function(req,res){
    Repairs.findByIdAndRemove({_id:req.params.id}, function (err, repairs){
        if(err)res.json(err);

        else res.json('Successfully Removed');
    });
});

module.exports = repairRoutes;