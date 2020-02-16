
const Land = require('../models/land');
const Contract = require('../models/contract');
const Water = require('../models/water');
const Electricity = require('../models/electricity');

module.exports = {
    createLand: (req, res, _next) => {
        let land = new Land({
            ...req.body
        })
        land.save()
            .then(result => {
                res.status(200).json({ success: true, result: result });
            })
            .catch((err) => {
                res.status(400).json({ success: false, result: err });
            })
    },
    getAllLand: (_req, res, _next) => {
        Land.find()
        .populate({
            path: 'water',
            models: Water
        })
        .populate({
            path: 'electricity',
            models: Electricity
        })
        .populate({
            path: 'contract',
            Model: Contract,
        })
        .exec()
            .then((result) => {
                res.status(200).json({ success: true, result: result });
            })
            .catch((err) => {
                res.status(400).json({ success: false, result: err });
            })
    },
    updateLandById: (req, res, _next) => {
        const { id } = req.params;
        let update_values = {
            ...req.body
        }
        Land.updateOne({ _id: id }, update_values)
            .then((result) => {
                res.status(200).json({ success: true, result: result })
            })
            .catch((err) => {
                res.json({ success: false, result: err })
            })
    },
}