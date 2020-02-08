const mongoose = require('mongoose');

const Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;

const Tenant = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true
    },
    tel: {
        type: Array,
        required: false
    },
    tenantstatus: {
        type: Boolean,
        required: true
    },
    contract: [{
        type: ObjectId,
        ref: "Contract"
    }],
    bill: [{
        type: ObjectId,
        ref: "Bill"
    }]
})

Tenant.pre('save', function (next) {
    this.log('saving tenant...');
    next();
});

Tenant.post('save', function (_doc) {
    this.log('tenant saved!');
});

Tenant.method('log', function (_message) {

});

module.exports = mongoose.model('Tenants',Tenant);