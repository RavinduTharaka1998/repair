const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const repairSchema = new Schema({
    // RepairID : {
    //     type: String,
    //     required: true
    // },
    ItemName : {
        type: String,
        required: true
    },
    RepairPeriod : {
        type: String,
        required: true
    },
    EstimatedCost : {
        type: String,
        required: true
    },
    Description : {
        type: String,
        //required: true
    },

});
const repair = mongoose.model('repair',repairSchema);
module.exports = repair;