const mongoose = require('mongoose');

const Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;

const Electricity = new Schema({
    electname: {
        type: String,
        required: true
    },
    electppunit: {
        type: String,
        required: true
    },
    electstatus: {
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

Electricity.pre('save', function (next) {
    this.log('saving electricity...');
    next();
});

Electricity.post('save', function (_doc) {
    this.log('electricity saved!');
});

Electricity.method('log', function (_message) {

});

module.exports = mongoose.model('Electricitys',Electricity);