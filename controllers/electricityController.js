
const Electricity = require('../models/electricity');

module.exports = {
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