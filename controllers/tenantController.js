
const Tenant = require('../models/tenant');
const Contract = require('../models/contract');
const Electricity = require('../models/electricity');
const Water = require('../models/water');

module.exports = {
    getAllTenant: (_req, res, _next) => {
        Tenant.find()
            .populate({
                path: 'contract',
                Model: Contract,
                populate: {
                    path: 'water',
                    model: Water
                },                
                populate: {
                    path: 'electricity',
                    model: Electricity
                },
            })
            .populate({
                path: 'contract',
                Model: Contract,
                populate: {
                    path: 'water',
                    model: Water
                }
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