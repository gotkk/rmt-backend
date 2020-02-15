
const Electricity = require('../models/electricity');

module.exports = {
    createElectricity: (req, res, _next) => {
        let elect = new Electricity({
            ...req.body
        })
        elect.save()
            .then(result => {
                res.status(200).json({ success: true, result: result });
            })
            .catch((err) => {
                res.status(400).json({ success: false, result: err });
            })
    },
    getAllElectricity: (_req, res, _next) => {
        Electricity.find()
            .then((result) => {
                res.status(200).json({ success: true, result: result });
            })
            .catch((err) => {
                res.status(400).json({ success: false, result: err });
            })
    },
}