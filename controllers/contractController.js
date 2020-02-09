
const Contract = require('../models/contract');
const Tenant = require('../models/tenant');
const Land = require('../models/land');
const Water = require('../models/water');
const Electricity = require('../models/electricity');

module.exports = {
    getAllContract: (_req, res, _next) => {
        Contract.find()
            .populate({
                path: 'tenant',
                models: Tenant
            })
            .populate({
                path: 'land',
                models: Land
            })
            .populate({
                path: 'water',
                models: Water
            })
            .populate({
                path: 'electricity',
                models: Electricity
            })
            .exec()
            .then((result) => {
                res.status(200).json({ success: true, result: result });
            })
            .catch((err) => {
                res.status(400).json({ success: false, result: err });
            })

    },


}