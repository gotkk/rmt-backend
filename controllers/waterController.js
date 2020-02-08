
const Water = require('../models/water');

module.exports = {
    getAllWater: (_req, res, _next) => {
        Water.find()
            .then((result) => {
                res.status(200).json({ success: true, result: result });
            })
            .catch((err) => {
                res.status(400).json({ success: false, result: err });
            })
    },
}