const mongoose = require('mongoose');
const Schema = mongoose.Schema;


ReturnItem = new Schema({
    RepaireId: {
        type: String
    },
    WarrantyId: {
        type: String
    },
    Note: {
        type: String
    }
}, {
    collation: 'returnitem'
});

module.exports = mongoose.model('ReturnItem',ReturnItem);