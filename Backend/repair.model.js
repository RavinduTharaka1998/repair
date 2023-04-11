const mongoose = require('mongoose');
const Schema = mongoose.Schema;


Repairs = new Schema({
    ItemName: {
        type: String
    },
    RepairPeriod: {
        type: String
    },
    EstimatedCost: {
        type: String
    },
    Description: {
        type: String
    },
    status: {
        type: String
    }
}, {
    collation: 'repairs'
});

module.exports = mongoose.model('Repairs',Repairs);