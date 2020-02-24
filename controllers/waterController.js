
const Water = require('../models/water');

module.exports = {
    createWater: (req, res, _next) => {
        let water = new Water({
            ...req.body
        })
        water.save()
            .then(result => {
                res.status(200).json({ success: true, result: result });
            })
            .catch((err) => {
                res.status(400).json({ success: false, result: err });
            })
    },
    getAllWater: (_req, res, _next) => {
        Water.find()
            .then((result) => {
                res.status(200).json({ success: true, result: result });
            })
            .catch((err) => {
                res.status(400).json({ success: false, result: err });
            })
    },
    updateWaterById: (req, res, _next) => {
        const { id } = req.params;
        let update_values = {
            ...req.body
        }
        Water.updateOne({ _id: id }, update_values)
            .then((result) => {
                res.status(200).json({ success: true, result: result })
            })
            .catch((err) => {
                res.json({ success: false, result: err })
            })
    },
    getWaterByContractId: (req, res, _next) => {
        const { id } = req.params;
        Water.find({ contract: { $in: [id] } })
            .then((result) => {
                res.status(200).json({ success: true, result: result })
            })
            .catch((err) => {
                res.json({ success: false, result: err })
            })
    },
}