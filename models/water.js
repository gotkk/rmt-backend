const mongoose = require('mongoose');

const Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;

const Water = new Schema({
    watername: {
        type: String,
        required: true
    },
    waterppunit: {
        type: String,
        required: true
    },
    waterstatus: {
        type: Boolean,
        required: true
    },
    land: {
        type: ObjectId,
        ref: "Land"
    },
    contract: {
        type: ObjectId,
        ref: "Contract"
    }
})

Water.pre('save', function (next) {
    this.log('saving water...');
    next();
});

Water.post('save', function (_doc) {
    this.log('water saved!');
});

Water.method('log', function (_message) {

});

module.exports = mongoose.model('Waters',Water);