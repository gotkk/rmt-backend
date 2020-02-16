const mongoose = require('mongoose');

const Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;

const Bill = new Schema({
    period: {
        type: String,
        required: true
    },
    billstatus: {
        type: String,
        required: true
    },
    rent: {
        type: Number,
        required: false
    },
    waterprice: {
        type: Number,
        required: false
    },
    electprice: {
        type: Number,
        required: false
    },
    mulct: {
        type: Number,
        required: false
    },
    totalprice: {
        type: Number,
        required: false
    },
    paid:{
        type: Number,
        required: false
    },
    waterunit: {
        type: Array,
        required: false
    },
    electunit: {
        type: Array,
        require: false
    },
    tenant: {
        type: ObjectId,
        ref: "Tenants"
    },
    contract: {
        type: ObjectId,
        ref: "Contracts"
    }
})

Bill.pre('save', function (next) {
    this.log('saving bill...');
    next();
});

Bill.post('save', function (_doc) {
    this.log('bill saved!');
});

Bill.method('log', function (_message) {

});

module.exports = mongoose.model('Bills',Bill);