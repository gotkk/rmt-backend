const mongoose = require('mongoose');

const Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;

const Contract = new Schema({
    name: {
        type: String,
        required: true
    },
    detail: {
        type: String,
        required: true
    },
    deposit: {
        type: Number,
        required: true
    },
    start: {
        type: ObjectId,
        ref: "Contract"
    },
    start: {
        type: String,
        required: true
    },
    end: {
        type: String,
        required: true
    },
    rent: {
        type: String,
        required: true
    },
    ctstatus: {
        type: Boolean,
        required: true
    },
    tenant: [{
        type: ObjectId,
        ref: "Tenants"
    }],
    land: [{
        type: ObjectId,
        ref: "Lands"
    }],
    electricity: [{
        type: ObjectId,
        ref: "Electricitys"
    }],
    water: [{
        type: ObjectId,
        ref: "Waters"
    }],
})

Contract.pre('save', function (next) {
    this.log('saving contract...');
    next();
});

Contract.post('save', function (_doc) {
    this.log('contract saved!');
});

Contract.method('log', function (_message) {

});

module.exports = mongoose.model('Contracts',Contract);