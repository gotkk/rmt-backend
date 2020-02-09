const mongoose = require('mongoose');

const Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;

const Land = new Schema({
    landname: {
        type: String,
        required: true
    },
    landarea: {
        type: String,
        required: true
    },
    landstatus: {
        type: Boolean,
        required: true
    },
    contract: {
        type: ObjectId,
        ref: "Contracts"
    },
    electricity: [{
        type: ObjectId,
        ref: "Electricitys"
    }],
    water: [{
        type: ObjectId,
        ref: "Waters"
    }]
})

Land.pre('save', function (next) {
    this.log('saving land...');
    next();
});

Land.post('save', function (_doc) {
    this.log('land saved!');
});

Land.method('log', function (_message) {

});

module.exports = mongoose.model('Lands',Land);